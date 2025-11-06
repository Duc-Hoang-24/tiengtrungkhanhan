'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { parseCSV } from '@/utils/csvParser';

type TestInfo = {
  id: string;
  hasListening: boolean;
  hasReading: boolean;
  hasWriting: boolean;
  listeningRange?: string;
  readingRange?: string;
  writingRange?: string;
};

const levelToTestIds: Record<string, string[]> = {
  hsk1: ['h10901', 'h10902', 'h10903', 'h10904', 'h10905'],
  hsk2: ['h20901', 'h20902', 'h20903', 'h20904', 'h20905', 'h20906'],
  hsk3: ['h30901', 'h30902' ,'h30903', 'h30904', 'h30905', 'h30906', 'h30907', 'h30908', 'h30909', 'h309010'],
  hsk4: ['h40901', 'h40902', 'h40903', 'h40904', 'h40905', 'h40906', 'h40907', 'h40908', 'h40909', 'h409010', 'h409011', 'h409012'],
  hsk5: ['h50901', 'h50902', 'h50903', 'h50904', 'h50905', 'h50906', 'h50907', 'h50908', 'h50909', 'h509010'],
  hsk6: [],
};

const levels = Object.keys(levelToTestIds);
const baseUrl = process.env.NEXT_PUBLIC_ASSET_TEST_URL;

export default function KhodethiPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [tests, setTests] = useState<TestInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [levelTestCounts, setLevelTestCounts] = useState<Record<string, number | null>>({});

  useEffect(() => {
    // Initialize all levels as "checking" (null)
    const initial: Record<string, number | null> = {};
    levels.forEach((level) => {
      initial[level] = null;
    });
    setLevelTestCounts(initial);

    const checkLevel = async (level: string) => {
      const testIds = levelToTestIds[level];
      let validTestCount = 0;

      for (const testId of testIds) {
        let hasListening = false;
        let hasReading = false;
        let hasWriting = false;

        // Check listening
        try {
          const resListening = await fetch(`${baseUrl}/data/${level}/${testId}-listening.csv`);
          if (resListening.ok) {
            const csvText = await resListening.text();
            const parsed = parseCSV(csvText);
            const actualQuestions = parsed.filter(
              (row) => row.id && row.id.trim() !== '' && !String(row.id).startsWith('例子')
            );
            if (actualQuestions.length > 0) hasListening = true;
          }
        } catch (e) {
          // silent
        }

        // Check reading
        try {
          const resReading = await fetch(`${baseUrl}/data/${level}/${testId}-reading.csv`);
          if (resReading.ok) {
            const csvText = await resReading.text();
            const parsed = parseCSV(csvText);
            const actualQuestions = parsed.filter(
              (row) => row.id && row.id.trim() !== '' && !String(row.id).startsWith('例子')
            );
            if (actualQuestions.length > 0) hasReading = true;
          }
        } catch (e) {
          // silent
        }

        // Check writing
        try {
          const resWriting = await fetch(`${baseUrl}/data/${level}/${testId}-writing.csv`);
          if (resWriting.ok) {
            const csvText = await resWriting.text();
            const parsed = parseCSV(csvText);
            const actualQuestions = parsed.filter(
              (row) => row.id && row.id.trim() !== '' && !String(row.id).startsWith('例子')
            );
            if (actualQuestions.length > 0) hasWriting = true;
          }
        } catch (e) {
          // silent
        }

        if (hasListening || hasReading || hasWriting) {
          validTestCount++;
        }
      }

      // ✅ Update this level immediately
      setLevelTestCounts((prev) => ({
        ...prev,
        [level]: validTestCount,
      }));
    };

    // Start all checks in parallel
    levels.forEach((level) => checkLevel(level));
  }, []);

  // 📂 Load detailed test info when a level is selected
  useEffect(() => {
    if (!selectedLevel) return;

    const loadTests = async () => {
      setLoading(true);
      try {
        const testIds = levelToTestIds[selectedLevel];
        const testList: TestInfo[] = [];

        for (const testId of testIds) {
          let hasListening = false;
          let hasReading = false;
          let hasWriting = false;
          let listeningRange = '';
          let readingRange = '';
          let writingRange = '';

          // Check listening
          try {
            const resListening = await fetch(`${baseUrl}/data/${selectedLevel}/${testId}-listening.csv`);
            if (resListening.ok) {
              const csvText = await resListening.text();
              const parsed = parseCSV(csvText);
              const actualQuestions = parsed.filter(
                (row) => row.id && row.id.trim() !== '' && !String(row.id).startsWith('例子')
              );
              if (actualQuestions.length > 0) {
                hasListening = true;
                const firstId = actualQuestions[0].id;
                const lastId = actualQuestions[actualQuestions.length - 1].id;
                listeningRange = `Câu hỏi ${firstId} - ${lastId}`;
              }
            }
          } catch (e) {
            console.log('Không có bài nghe nào được tìm thấy');
          }

          // Check reading
          try {
            const resReading = await fetch(`${baseUrl}/data/${selectedLevel}/${testId}-reading.csv`);
            if (resReading.ok) {
              const csvText = await resReading.text();
              const parsed = parseCSV(csvText);
              const actualQuestions = parsed.filter(
                (row) => row.id && row.id.trim() !== '' && !String(row.id).startsWith('例子')
              );
              if (actualQuestions.length > 0) {
                hasReading = true;
                const firstId = actualQuestions[0].id;
                const lastId = actualQuestions[actualQuestions.length - 1].id;
                readingRange = `Câu hỏi ${firstId} - ${lastId}`;
              }
            }
          } catch (e) {
            console.log('Không có bài đọc nào được tìm thấy');
          }

          // Check writing
          try {
            const resWriting = await fetch(`${baseUrl}/data/${selectedLevel}/${testId}-writing.csv`);
            if (resWriting.ok) {
              const csvText = await resWriting.text();
              const parsed = parseCSV(csvText);
              const actualQuestions = parsed.filter(
                (row) => row.id && row.id.trim() !== '' && !String(row.id).startsWith('例子')
              );
              if (actualQuestions.length > 0) {
                hasWriting = true;
                const firstId = actualQuestions[0].id;
                const lastId = actualQuestions[actualQuestions.length - 1].id;
                writingRange = `Câu hỏi ${firstId} - ${lastId}`;
              }
            }
          } catch (e) {
            console.log('Không có bài viết nào được tìm thấy');
          }

          if (hasListening || hasReading || hasWriting) {
            testList.push({
              id: testId,
              hasListening,
              hasReading,
              hasWriting,
              listeningRange,
              readingRange,
              writingRange,
            });
          }
        }

        setTests(testList);
      } catch (error) {
        console.error('Lỗi tải bài kiểm tra', error);
      } finally {
        setLoading(false);
      }
    };

    loadTests();
  }, [selectedLevel]);

  // 🖼️ Render test list if a level is selected
  if (selectedLevel) {
    return (
      <div className="min-h-screen bg-gray-300 p-4 md:p-8 group">
        <button
          onClick={() => setSelectedLevel(null)}
          className="mb-6 flex items-center text-amber-700 font-bold hover:bg-yellow-400 bg-yellow-500 p-2 rounded-lg"
        >
          ← Quay lại
        </button>

        <h1 className="sm:text-md md:text-xl lg:text-3xl mx-auto font-bold text-yellow-400 mb-6 bg-gradient-to-br from-amber-950 to-amber-500 w-fit p-2 rounded-lg">
          {selectedLevel.toUpperCase()} Tests
        </h1>

        {loading ? (
          <div className="flex items-center justify-center space-x-2 py-8">
            <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-400"></span>
            <span className="text-xl">Đang tải bài kiểm tra...</span>
          </div>
        ) : tests.length === 0 ? (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded-lg">
            <p>Chưa có bài kiểm tra cho cấp độ này.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto">
            {tests.map((test) => (
              <div key={test.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 underline decoration-2">
                  {test.id.toUpperCase()}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {test.hasListening && (
                    <Link
                      href={`/${selectedLevel}/${test.id}-listening`}
                      className="block p-3 rounded-lg border bg-blue-600 hover:bg-blue-800 transition text-center"
                    >
                      <span className="font-medium text-white">🎧 Bài kiểm tra nghe</span>
                      <p className="text-sm text-blue-100 mt-1">{test.listeningRange}</p>
                    </Link>
                  )}
                  {test.hasReading && (
                    <Link
                      href={`/${selectedLevel}/${test.id}-reading`}
                      className="block p-3 rounded-lg border bg-green-600 hover:bg-green-800 transition text-center"
                    >
                      <span className="font-medium text-white">📖 Bài kiểm tra đọc</span>
                      <p className="text-sm text-green-100 mt-2">{test.readingRange}</p>
                    </Link>
                  )}
                  {test.hasWriting && (
                    <Link
                      href={`/${selectedLevel}/${test.id}-writing`}
                      className="block p-3 rounded-lg border bg-cyan-600 hover:bg-cyan-800 transition text-center"
                    >
                      <span className="font-medium text-white">📖 Bài kiểm tra viết</span>
                      <p className="text-sm text-green-100 mt-2">{test.writingRange}</p>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 🏠 Render level selection screen
  return (
    <div className="min-h-screen bg-gray-300 p-4 md:p-8">
      <h1 className="sm:text-md md:text-xl lg:text-3xl font-bold text-yellow-400 mb-6 bg-gradient-to-br from-amber-950 to-amber-500 w-fit p-2 rounded-lg">
        Chọn Cấp Độ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 gap-y-7 bg-amber-100 rounded-lg p-4 sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className="relative p-10 bg-amber-100 rounded-xl shadow-sm border-4 border-amber-700 text-left hover:shadow-[5px_5px_10px_rgb(30,20,0)] hover:-translate-y-1 transition"
          >
            <h2 className="absolute -top-4 bg-amber-100 text-xl px-1 font-semibold text-gray-800">
              {level.toUpperCase()}
            </h2>
            {levelTestCounts[level] === null ? (
              <div className="flex items-center gap-2 mt-2">
                <span className="animate-spin h-4 w-4 border-2 border-amber-800 rounded-full border-t-transparent"></span>
                <span className="text-amber-950 font-bold">Đang kiểm tra...</span>
              </div>
            ) : levelTestCounts[level]! > 0 ? (
              <p className="text-md font-bold text-green-700 mt-2">
                <b className='text-lg font-mono'>{levelTestCounts[level]}</b> bài thi có sẵn 
              </p>
            ) : (
              <p className="text-md text-amber-950 mt-2 font-bold">Đang cập nhật bài thi...</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}