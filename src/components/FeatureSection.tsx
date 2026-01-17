import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownToVideo() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleStart = () => {
    setLoading(true);
    setVideoUrl(null);

    // Simulate 5s processing
    setTimeout(() => {
      setLoading(false);
      // Replace with your actual vertical video
      setVideoUrl("./prev.mp4");
    }, 5000);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Markdown to Video (9:16)</h2>

      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Paste your Markdown here..."
        className="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 mb-4 resize-none"
      />

      <button
        onClick={handleStart}
        disabled={loading || !markdown.trim()}
        className={`w-full px-6 py-2 rounded-lg font-semibold text-white transition ${
          loading || !markdown.trim()
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Processing..." : "Generate Video"}
      </button>

      {videoUrl && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2 text-center">Generated Video:</h3>
          <div className="relative w-full pt-[177.78%] rounded-lg overflow-hidden border">
            <video
              controls
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}