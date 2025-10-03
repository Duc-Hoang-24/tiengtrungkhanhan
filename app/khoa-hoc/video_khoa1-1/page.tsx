'use client'
export default function AutoplayVideo() {
    const YOUTUBE_VIDEO_ID = "XIC0o0pm46c"; // Change this!
    
    const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=1&modestbranding=1&rel=0`;

    return (
        <div className="flex justify-center">
            <div className="rounded-2xl shadow-lg w-full max-w-4xl border-8 border-amber-900 overflow-hidden">
                <iframe
                    className="w-full aspect-video"
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder ="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}