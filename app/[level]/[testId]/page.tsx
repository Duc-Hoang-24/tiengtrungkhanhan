'use client';

import { useState, useEffect, use, useRef } from 'react';
import { parseCSV } from '@/utils/csvParser';
import Image from 'next/image';

type TestParams = {
  level: string;
  testId: string;
};

type Question = {
  id: number | string;
  type: '对-错' | '对-错-shared' | 'multiple-choice' | 'multiple-choice-shared' | 'fill-in-blank' | 'fill-in-blank-shared' | 'put-answer-in-order' | 'fill-in-sentence';
  prompt: string;
  question: string;
  image?: string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  optionE?: string;
  optionF?: string;
  correctAnswer: string;
  passage?: string;
  fontFamily?: string;
  blanks?: number;
  pinyin?: string;
};

type QuestionGroup = {
  prompt: string;
  image?: string;
  passage?: string;
  questions: Question[];
  isSharedFillIn?: boolean;
};

export default function TestPage({ params }: { params: Promise<TestParams> }) {
  const { level, testId } = use(params);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<Record<number | string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isStart, setIsStart] = useState(false);
  
  const TEST_TIMES = {
        hsk1: { nghe: 15 * 60, đọc: 12 * 60, viết: 0 * 60 },
        hsk2: { nghe: 26 * 60, đọc: 22 * 60, viết: 0 * 60 },
        hsk3: { nghe: 35 * 60, đọc: 30 * 60, viết: 15 * 60 },
        hsk4: { nghe: 30 * 60, đọc: 40 * 60, viết: 25 * 60 },
        hsk5: { nghe: 30 * 60, đọc: 45 * 60, viết: 40 * 60 },
  };
  const isListening = testId.includes('listening');
  const isReading = testId.includes('reading');
  const isWriting = testId.includes('writing')
  const testType = isListening ? 'nghe' : isReading ? 'đọc' : isWriting ? 'viết' : 'viết';
  const totalTestTime = TEST_TIMES[level as keyof typeof TEST_TIMES]?.[testType];
  const [timeLeft, setTimeLeft] = useState(totalTestTime);
  const [timerActive, setTimerActive] = useState(false);

  const testNumber = testId.replace(/\D/g, '');
  const audioRef = useRef<HTMLAudioElement>(null);
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const baseUrl = process.env.NEXT_PUBLIC_ASSET_TEST_URL;

  function groupQuestions(questions: Question[]): QuestionGroup[] {
    if (!questions.length) return [];

    const groups: QuestionGroup[] = [];
    let currentGroup: QuestionGroup | null = null;

    for (const q of questions) {
      if (!currentGroup) {
        currentGroup = {
          prompt: q.prompt,
          image: q.image,
          passage: q.passage,
          questions: [q],
          isSharedFillIn: q.type === 'fill-in-blank-shared' || q.type === 'multiple-choice-shared' || q.type === '对-错-shared',
        };
        continue;
      }

      const canExtend =
        currentGroup.isSharedFillIn && q.type === 'fill-in-blank-shared'
          ? currentGroup.prompt === q.prompt
          : currentGroup.prompt === q.prompt &&
            ((currentGroup.image && q.image && currentGroup.image === q.image) ||
              (!currentGroup.image && !q.image)) &&
            (
              (currentGroup.questions[0].type === '对-错-shared' && q.type === '对-错-shared') ||
              (
                (currentGroup.passage && q.passage && currentGroup.passage === q.passage) ||
                (!currentGroup.passage && !q.passage)
              )
            ) &&
            currentGroup.isSharedFillIn === (q.type === 'fill-in-blank-shared' || q.type === 'multiple-choice-shared' || q.type === '对-错-shared');

      if (canExtend) {
        currentGroup.questions.push(q);
      } else {
        groups.push(currentGroup);
        currentGroup = {
          prompt: q.prompt,
          image: q.image,
          passage: q.passage,
          questions: [q],
          isSharedFillIn: q.type === 'fill-in-blank-shared' || q.type === 'multiple-choice-shared' || q.type === '对-错-shared',
        };
      }
    }

    if (currentGroup) {
      groups.push(currentGroup);
    }

    return groups;
  }

  // Test Timer 
    useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setSubmitted(true);
      setTimerActive(false);
      stopAudio();
    }
    return () => { if (interval) clearInterval(interval); };
  }, [timerActive, timeLeft, isStart]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  function parseQuestionType(input: string): Question['type'] {
    const validTypes = [
      '对-错',
      '对-错-shared',
      'multiple-choice',
      'multiple-choice-shared',
      'fill-in-blank',
      'fill-in-blank-shared',
      'put-answer-in-order',
      'fill-in-sentence'
    ] as const;

    if (validTypes.includes(input as any)) {
      return input as Question['type'];
    }
    return 'multiple-choice'; // fallback
  }

  useEffect(() => {
    const loadTestData = async () => {
      try {
        const res = await fetch(`${baseUrl}/data/${level}/${testId}.csv?v=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load test data');
        const csvText = await res.text();
        const parsed = parseCSV(csvText);

        const formatted = parsed
          .filter(row => row.id && row.id.trim() !== '')
          .map(row => {
            const question = {
              id: row.id,
              type: parseQuestionType(row.type || 'multiple-choice'),
              question: row.question,
              prompt: row.prompt,
              image: row.image || undefined,
              optionA: row.optionA || undefined,
              optionB: row.optionB || undefined,
              optionC: row.optionC || undefined,
              optionD: row.optionD || undefined,
              optionE: row.optionE || undefined,
              optionF: row.optionF || undefined,
              correctAnswer: row.correctAnswer?.trim() || '',
              passage: row.passage || undefined,
              fontFamily: row.fontFamily || undefined,
              blanks: row.blanks ? parseInt(row.blanks, 10) : undefined,
              pinyin: row.pinyin || undefined,
            };
            return question;
          });

        setQuestions(formatted);

        const exampleAnswers: Record<string | number, string> = {};
        formatted.forEach(q => {
          if (String(q.id).startsWith('例子') && q.correctAnswer) {
            exampleAnswers[q.id] = q.correctAnswer;
          }
        });
        setUserAnswers(exampleAnswers);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTestData();
  }, [level, testId, baseUrl]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center space-x-2'>
        <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-400"></span>
        <span className='text-xl'>Đang tải bài kiểm tra...</span>
      </div>
    );
  }

  const handleAnswerChange = (questionId: number | string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const startTest = () => {
    setIsStart(true);
    setTimerActive(true);

    if (isListening && audioRef.current) {
      audioRef.current.play().catch(e => {
        console.log("Auto-play blocked - user must click to play");
      });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimerActive(false);
    stopAudio();
  };

  const handleConfirmSubmit = () => {
    setShowConfirm(true);
  };

  const handleSubmitConfirmed = () => {
    setShowConfirm(false);
    setSubmitted(true);
    setTimerActive(false);
    stopAudio();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const getCharCount = (text: string) => {
    return text.replace(/\s/g, '').length;
  };

  const calculateScore = () => {
    let correct = 0;
    questions
      .filter(q => !String(q.id).startsWith('例子'))
      .forEach(q => {
        const user = (userAnswers[q.id] || '').trim();
        const correctAns = q.correctAnswer.trim();

        // Normalize function - only collapse spaces, keep punctuation for sentences
        const normalize = (s: string) => {
          // Just collapse multiple spaces into single space
          return s.replace(/\s+/g, ' ').trim();
        };

        // Check if correctAnswer contains multiple options separated by /
        if (correctAns.includes('/')) {
          // Split by / and check if user answer matches any of them
          const correctOptions = correctAns.split('/').map(opt => normalize(opt.trim()));
          if (correctOptions.some(opt => opt === normalize(user))) {
            correct++;
          }
        } else {
          // Single correct answer
          if (normalize(user) === normalize(correctAns)) {
            correct++;
          }
        }
      });
    return correct;
  };

  const score = submitted ? calculateScore() : null;

  const realQuestions = questions.filter(q => !String(q.id).startsWith('例子'));

    return (
    <div>
      {!isStart && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center z-50 justify-center p-8">
        <div className="text-center p-8 bg-gray-800 rounded-xl">
          <p className="text-gray-300">
            Bạn sẽ có khoảng {formatTime(timeLeft).replace(':00','')} phút để làm bài {testType} này! <br/> Bài kiểm tra sẽ tự động đóng khi hết thời gian.
          </p>
          <p className='text-gray-300 mb-6'>Hãy chuẩn bị thật kỹ trước khi nhấn bắt đầu và luôn tự tin trong lúc làm bài kiểm tra.</p>
          <div className='grid grid-cols-1'>
            <button
              onClick={startTest}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 mb-3"
            >
              Bắt đầu ▶
            </button>
            <button
                onClick={() => window.history.back()}
                className='text-gray-300 hover:text-gray-500'
              >
                ◀ Quay lại
              </button>
          </div>
        </div>
      </div>
      )}

      <nav className={`w-full fixed flex items-center justify-between px-3 lg:px-20 py-2 z-1 transition-colors duration-300 ${
          timeLeft <= 90 && !submitted 
            ? 'bg-red-400 border-b-2 border-red-700 animate-pulse'        
            : 'bg-amber-950' 
        }`}>
        <div className="flex items-center">
          <img src={`${baseUrl}/images/logo.png`} alt="Logo" className="w-auto h-8 md:h-10 mr-2" />
          <span className="hidden md:flex md:text-lg lg:text-xl text-yellow-200 font-bold">
            Tiếng Trung Khánh An
          </span>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          {!submitted && (
            <div className="text-lg bg-red-100 text-red-700 font-bold rounded px-2 py-1">
              🕕{formatTime(timeLeft)}
            </div>
          )}
        </div>

        <div>
          {!submitted && (
            <button
              onClick={timeLeft > 180 ? handleConfirmSubmit : handleSubmit}
              className="px-2 lg:px-4 pt-3 bg-cyan-500 text-white flex flex-row rounded-lg hover:bg-cyan-700 transition text-md lg:text-xl md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 35"
                width="36"
                height="36"
                fill="currentColor"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              Nộp bài 
            </button>
          )}
        </div>

        {showConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Xác nhận nộp bài</h3>
            <p className="text-gray-600 mb-4">
              ⚠️ Bạn còn <span className="font-bold">{formatTime(timeLeft)}</span>! <br />
              Bạn có chắc muốn nộp bài ngay bây giờ không?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-600 hover:bg-gray-100 rounded"
              >
                Hủy
              </button>
              <button
                onClick={handleSubmitConfirmed}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Nộp bài
              </button>
            </div>
          </div>
        </div>
      )}
      </nav>

      <div className="min-h-screen bg-amber-50 top-20 pb-20">
        <div className='pt-20 px-5 sm:px-5 lg:px-15'>
          <div className='block lg:flex flex-row gap-4'>
            <button
              onClick={() => window.history.back()}
              className="mb-6 flex items-center text-amber-700 border-2 font-bold hover:bg-yellow-400 bg-yellow-500 p-2 rounded-lg"
            >
              ← Quay lại
            </button>

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              HSK {level.replace('hsk', '')} Bài Kiểm Tra {testType} {testNumber}
            </h1>
          </div>

          {isListening && (
            <div className="max-w-sm mx-auto">
              <audio
                ref={audioRef}
                controls
                src={`${baseUrl}/audio/${level}/${testId}.mp3`}
                className="w-full max-w-2xl mx-auto"
              >
                Your browser does not support audio.
              </audio>
            </div>
          )}

          <p className="text-gray-800 font-bold mb-6 bg-emerald-500 w-fit p-2 rounded-lg border-2 m-3">
            Tổng {questions.filter(q => !String(q.id).startsWith('例子')).length} câu
          </p>
        </div>

        {!submitted ? (
          <div className='gap-1'>
              <div className="space-y-2 mb-8 sm:max-w-xl md:max-w-3xl lg:max-w-7xl mx-auto bg-amber-900 p-2 rounded-xl">
                  {groupQuestions(questions).map((group, idx) => (
                    <div key={idx} className='bg-blue-100 p-3 rounded-lg'>
                      <div className="text-xl font-bold text-blue-700 mb-2 underline underline-offset-4 decoration-2">{group.prompt}</div>

                      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
                        {/* Left column: questions */}
                        <div className="space-y-4">
                          {group.isSharedFillIn ? (
                            <>
                              {/* Shared fill-in-blank: show options once */}
                              <div className="p-4 rounded mb-6">

                                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                                  <div>
                                    {/* Shared questions */}
                                    {group.questions.map(q => {
                                      const isExample = String(q.id).startsWith('例子');
                                      const isTrueFalseShared = q.type === '对-错-shared';
                                      return (
                                        <div key={q.id} className="py-2">
                                          <p
                                            className="font-bold text-gray-800"
                                            dangerouslySetInnerHTML={{ __html: q.question.replace(/\\n/g, '<br/>') }}
                                          />
                                          {q.passage && (
                                            <p
                                              className="text-black text-md whitespace-pre-wrap mb-2"
                                              dangerouslySetInnerHTML={{ __html: q.passage.replace(/\\n/g, '<br/>') }}
                                            />
                                          )}
                                          {isTrueFalseShared ? (
                                          // ✅ 对-错-shared: show "对 / 错" radio buttons
                                          <div className={`flex items-center gap-4 mt-2 ${isExample ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                                            <h1>Chọn đáp án:</h1>
                                            {(['对', '错'] as const).map(choice => (
                                              <label key={choice} className="flex items-center space-x-1">
                                                <input
                                                  type="radio"
                                                  name={`q${q.id}`}
                                                  value={choice}
                                                  checked={userAnswers[q.id] === choice}
                                                  onChange={e => !isExample && handleAnswerChange(q.id, e.target.value)}
                                                  disabled={isExample}
                                                  className="w-4 h-4 text-blue-600"
                                                />
                                                <span>{choice}</span>
                                              </label>
                                            ))}
                                          </div>
                                        ) : (
                                          <div className={`flex items-center gap-2 mt-2 ${isExample ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                                            <span>Chọn đáp án:</span>
                                            <select
                                              value={userAnswers[q.id] || ''}
                                              onChange={e => !isExample && handleAnswerChange(q.id, e.target.value)}
                                              disabled={isExample}
                                              className="border p-1 rounded"
                                            >
                                              <option value="">-- Chọn --</option>
                                              {['A', 'B', 'C', 'D', 'E', 'F'].map(letter => {
                                                const optionKey = `option${letter}`;
                                                const optionValue = group.questions[0][optionKey as keyof Question];
                                                if (!optionValue && optionValue) return null;
                                                return (
                                                  <option key={letter} value={letter}>
                                                    {letter}
                                                  </option>
                                                );
                                              })}
                                            </select>
                                          </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                  <div>
                                    {group.image ? (
                                      // Show image if it exists
                                      <div className="flex justify-center my-4">
                                        <img
                                          src={`${baseUrl}/photos/image-${level}/${group.image}?v=${testId}`}
                                          alt={`Visual for ${group.prompt}`}
                                          className="max-w-full max-h-[400px] w-auto h-auto object-contain border rounded"
                                        />
                                      </div>
                                    ) : (
                                      // Otherwise show options (if any exist)
                                      <div className="space-y-2 mb-6">
                                        {['A', 'B', 'C', 'D', 'E', 'F'].map(letter => {
                                          const firstQ = group.questions[0];
                                          const optionKey = `option${letter}`;
                                          const optionValue = firstQ[optionKey as keyof Question];
                                          if (!optionValue) return null;
                                          return (
                                            <div key={letter} className="flex items-center space-x-2 p-2 border rounded">
                                              <span className="font-bold">{letter}.</span>
                                              <span
                                                className="text-md lg:text-xl"
                                                style={{ fontFamily: firstQ.fontFamily || 'inherit' }}
                                                dangerouslySetInnerHTML={{ __html: optionValue }}
                                              />
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            /* Non-shared questions */
                            group.questions.map(q => {
                              const isExample = String(q.id).startsWith('例子');
                              return (
                                <div key={q.id} className="py-2">
                                  {q.type === '对-错' && (
                                    <div className="space-y-1">
                                      <h3
                                        className="font-bold text-gray-800 text-lg"
                                        dangerouslySetInnerHTML={{ __html: q.question.replace(/\\n/g, '<br/>') }}
                                      />
                                      {[
                                        { label: '对', value: q.optionA || '对' },
                                        { label: '错', value: q.optionB || '错' },
                                      ].map(option => (
                                        <label
                                          key={option.label}
                                          className={`flex items-center space-x-2 ${
                                            isExample ? 'cursor-not-allowed' : 'cursor-pointer'
                                          }`}
                                        >
                                          <input
                                            type="radio"
                                            name={`q${q.id}`}
                                            value={option.label}
                                            onChange={() => !isExample && handleAnswerChange(q.id, option.label)}
                                            checked={userAnswers[q.id] === option.label}
                                            disabled={isExample}
                                            className="w-4 h-4 text-blue-600"
                                          />
                                          <span dangerouslySetInnerHTML={{ __html: option.value }} />
                                        </label>
                                      ))}
                                    </div>
                                  )}

                                  {q.type === 'multiple-choice' ? (
                                    // ===== MULTIPLE CHOICE =====
                                    <>
                                      <h3
                                        className="font-bold text-gray-800 text-lg"
                                        dangerouslySetInnerHTML={{ __html: q.question.replace(/\\n/g, '<br/>') }}
                                      />
                                      {q.passage && (
                                        <p
                                          className="text-black text-md whitespace-pre-wrap mb-2"
                                          dangerouslySetInnerHTML={{ __html: q.passage.replace(/\\n/g, '<br/>') }}
                                        />
                                      )}
                                      <div className="space-y-1 mt-2">
                                        {(['A', 'B', 'C', 'D', 'E', 'F'] as const).map(letter => {
                                          const optionValue = q[`option${letter}` as keyof Question];
                                          if (!optionValue) return null;
                                          return (
                                            <label
                                              key={letter}
                                              className={`flex items-center space-x-2 ${
                                                isExample ? 'cursor-not-allowed' : 'cursor-pointer'
                                              }`}
                                            >
                                              <input
                                                type="radio"
                                                name={`q${q.id}`}
                                                value={letter}
                                                onChange={() => !isExample && handleAnswerChange(q.id, letter)}
                                                checked={userAnswers[q.id] === letter}
                                                disabled={isExample}
                                                className="w-4 h-4 text-blue-600"
                                              />
                                              <span
                                                style={{ fontFamily: q.fontFamily || 'inherit' }}
                                                dangerouslySetInnerHTML={{ __html: `${letter}. ${optionValue}` }}
                                              />
                                            </label>
                                          );
                                        })}
                                      </div>
                                    </>
                                  ) : q.type === 'fill-in-blank' ? (
                                    // ===== FILL IN THE BLANK =====
                                    <>
                                      {q.question &&
                                        !/^(Điền|Chọn|Fill|Select)/i.test(q.question.trim()) && (
                                          <h3
                                            className="font-bold text-gray-800 text-lg mb-2"
                                            dangerouslySetInnerHTML={{ __html: q.question.replace(/\\n/g, '<br/>') }}
                                          />
                                        )}

                                      {q.passage && (
                                        <div className="text-lg p-3 mb-4 bg-gray-50 rounded border">
                                          {q.passage.split('___').map((part, idx, arr) => (
                                            <span key={idx}>
                                              <span dangerouslySetInnerHTML={{ __html: part }} />
                                              {idx < arr.length - 1 && (
                                                <span className="mx-1 inline-block min-w-[40px] h-6 border-b-2 border-dashed align-bottom"></span>
                                              )}
                                            </span>
                                          ))}
                                        </div>
                                      )}

                                      <div className="grid grid-cols-2 gap-2">
                                        {(['A', 'B', 'C', 'D', 'E', 'F'] as const).map(letter => {
                                          const optionValue = q[`option${letter}` as keyof Question];
                                          if (!optionValue) return null;
                                          return (
                                            <label
                                              key={letter}
                                              className={`flex items-center space-x-2 p-2 border rounded ${
                                                isExample
                                                  ? 'bg-gray-100 cursor-not-allowed'
                                                  : 'cursor-pointer hover:bg-gray-50'
                                              }`}
                                            >
                                              <input
                                                type="radio"
                                                name={`q${q.id}`}
                                                value={letter}
                                                onChange={() => !isExample && handleAnswerChange(q.id, letter)}
                                                checked={userAnswers[q.id] === letter}
                                                disabled={isExample}
                                                className="w-4 h-4 text-blue-600"
                                              />
                                              <span
                                                style={{ fontFamily: q.fontFamily || 'inherit' }}
                                                dangerouslySetInnerHTML={{ __html: `${letter}. ${optionValue}` }}
                                              />
                                            </label>
                                          );
                                        })}
                                      </div>
                                    </>
                                  ) : q.type === 'put-answer-in-order' ? (
                                      // ===== PUT ANSWERS IN ORDER =====
                                      <>
                                        <h3
                                          className="font-bold text-gray-800 text-lg mb-2"
                                          dangerouslySetInnerHTML={{ __html: q.question.replace(/\\n/g, '<br/>') }}
                                        />

                                        {/* Show the scrambled options */}
                                        <div className="flex flex-wrap">
                                          {(['A', 'B', 'C', 'D', 'E', 'F'] as const).map(letter => {
                                            const optionValue = q[`option${letter}` as keyof Question];
                                            if (!optionValue) return null;
                                            return (
                                              <div
                                                key={letter}
                                                className="px-3 py-2 border-2 border-blue-300 rounded bg-white shadow-sm"
                                              >
                                                <span
                                                  className="text-lg"
                                                  style={{ fontFamily: q.fontFamily || 'inherit' }}
                                                  dangerouslySetInnerHTML={{ __html: optionValue }}
                                                />
                                              </div>
                                            );
                                          })}
                                        </div>

                                        {/* Input field for user to type the words in order */}
                                        <div className="">
                                          <input
                                            type="text"
                                            value={userAnswers[q.id] || ''}
                                            onChange={e => !isExample && handleAnswerChange(q.id, e.target.value)}
                                            disabled={isExample}
                                            placeholder="Nhập các từ theo thứ tự đúng"
                                            style={{ fontFamily: q.fontFamily || 'inherit' }}
                                            className={`w-full p-3 border-2 rounded text-lg ${
                                              isExample ? 'bg-gray-100 cursor-not-allowed' : ''
                                            }`}
                                          />
                                        </div>
                                      </>
                                    ) : q.type === 'fill-in-sentence' ? (
                                      // ===== FILL IN SENTENCE =====
                                      <>
                                        <h3
                                          className="font-bold text-gray-800 text-lg mb-3"
                                          dangerouslySetInnerHTML={{ __html: q.question.replace(/\\n/g, '<br/>') }}
                                        />

                                        {/* Show options if provided */}
                                        {(q.optionA || q.optionB || q.optionC || q.optionD || q.optionE || q.optionF) && (
                                          <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-blue-50 rounded border">
                                            {(['A', 'B', 'C', 'D', 'E', 'F'] as const).map(letter => {
                                              const optionValue = q[`option${letter}` as keyof Question];
                                              if (!optionValue) return null;
                                              return (
                                                <div key={letter} className="flex items-center space-x-2">
                                                  <span className="font-bold">{letter}.</span>
                                                  <span
                                                    style={{ fontFamily: q.fontFamily || 'inherit' }}
                                                    dangerouslySetInnerHTML={{ __html: optionValue }}
                                                  />
                                                </div>
                                              );
                                            })}
                                          </div>
                                        )}

                                        {/* Sentence with blanks */}
                                        {q.passage && (
                                        <div className="text-lg p-4 mb-3 bg-gray-50 rounded border">
                                          {q.passage.split('__').map((part, idx, arr) => {
                                            const currentAnswer = (userAnswers[q.id] || '');
                                            return (
                                              <span key={idx}>
                                                <span
                                                  style={{ fontFamily: q.fontFamily || 'inherit' }}
                                                  dangerouslySetInnerHTML={{ __html: part }}
                                                />
                                                {idx < arr.length - 1 && (
                                                  <ruby>
                                                    <input
                                                      type="text"
                                                      value={currentAnswer}
                                                      onChange={e => {
                                                        if (!String(q.id).startsWith('例子')) {
                                                          handleAnswerChange(q.id, e.target.value);
                                                        }
                                                        const input = e.target as HTMLInputElement
                                                        input.style.width = `${Math.max(20, input.scrollWidth + 4)}px`;
                                                      }}
                                                      disabled={String(q.id).startsWith('例子')}
                                                      style={{
                                                        width: `${Math.max(20, currentAnswer.length * 12 + 50)}px`,
                                                        minWidth: '30px'
                                                      }}
                                                      className={`py-1 text-center m-2 border-b-1${
                                                        String(q.id).startsWith('例子')
                                                          ? 'cursor-not-allowed border-b-1'
                                                          : ''
                                                      }`}
                                                      placeholder="___"
                                                    />
                                                    <rt className="text-xs text-gray-800 font-sans">{q.pinyin || ''}</rt>
                                                  </ruby>
                                                )}
                                              </span>
                                            );
                                          })}
                                        </div>
                                        )}
                                      </>
                                    ) : null}
                                </div>
                              );
                            })
                          )}
                        </div>

                        {/* Right column: image (if any) */}
                        {group.image && !group.isSharedFillIn && (
                          <div className="flex justify-center">
                            <img
                              src={`${baseUrl}/photos/image-${level}/${group.image}?v=${testId}`}
                              alt={`Visual for ${group.prompt}`}
                              className="max-w-full max-h-[400px] w-auto h-auto object-contain border rounded"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
          </div>
        ) : (
          <div className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto bg-white p-6 rounded-lg">
            <div className="flex flex-row justify-between items-center mb-4">
              <span className="text-xl font-bold">Kết quả kiểm tra</span>
              <span>
                Số Điểm: <strong>{score}/{questions.filter(q => !String(q.id).startsWith('例子')).length}</strong>
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Số câu hỏi</th>
                    <th className="p-2 border">Câu trả lời của bạn</th>
                    <th className="p-2 border">Câu trả lời đúng</th>
                    <th className="p-2 border">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {questions
                    .filter(q => !String(q.id).startsWith('例子'))
                    .map(q => {
                      const userAns = (userAnswers[q.id] || '—').trim();
                      
                      // Normalize function - only collapse spaces
                      const normalize = (s: string) => {
                        return s.replace(/\s+/g, ' ').trim();
                      };
                      
                      const correctAns = q.correctAnswer.trim();
                      
                      let isCorrect = false;
                      
                      if (correctAns.includes('/')) {
                        const correctOptions = correctAns.split('/').map(opt => normalize(opt.trim()));
                        isCorrect = correctOptions.some(opt => opt === normalize(userAns));
                      } else {
                        isCorrect = normalize(userAns) === normalize(correctAns);
                      }

                      return (
                        <tr key={q.id} className={isCorrect ? 'bg-green-50' : 'bg-red-50'}>
                          <td className="p-2 border">{q.id}</td>
                          <td className="p-2 border">{userAns}</td>
                          <td className="p-2 border">{q.correctAnswer}</td>
                          <td className="p-2 border">
                            {isCorrect ? (
                              <span className="text-green-600">✅ Câu đúng</span>
                            ) : (
                              <span className="text-red-600">❌ Câu sai</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <button
              onClick={() => {
                window.location.reload()
                }}
              className="mt-6 px-4 py-2 bg-amber-800 text-yellow-200 rounded hover:bg-amber-950 block mx-auto"
            >
              Thử lại
            </button>
          </div>
        )}
          {!submitted && (
            <div className="fixed bottom-0 left-0 right-0 bg-amber-950 p-3 z-1">
              <div className="flex flex-wrap justify-center gap-1 w-[75vw] lg:w-[95vw] mx-auto space-0 lg:space-x-5">
                {realQuestions.map(q => {
                  const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== '';
                  return (
                    <div
                      key={q.id}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold
                        ${isAnswered 
                          ? 'bg-green-500 text-black/80 border-black border-2' 
                          : 'bg-gray-200 text-gray-500'}
                        border-2 border-gray-500`}
                    >{q.id}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
      </div>
    </div>
  );

}

