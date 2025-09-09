import { useState } from "react";

export default function Resume() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
    <h2 className="text-[21px] font-bold mb-4">RESUME</h2>
    <div className="mt-6 ">
      {/* View Resume Button */}
      <button
        onClick={() => setShowResume(true)}
        className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 font-semibold transition"
      >
        View My Resume
      </button>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div
            className="w-full max-w-5xl bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col"
            style={{ height: "90vh" }}
          >
            {/* Top bar with Close & Download */}
            <div className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800">
              <button
                onClick={() => setShowResume(false)}
                className="text-black dark:text-white text-xl font-bold hover:text-purple-500 transition"
              >
                ×
              </button>
              <a
                href="/Resume.pdf"
                download
                className="bg-purple-700 text-white px-4 py-1 rounded-lg font-semibold hover:bg-purple-800 transition"
              >
                Download
              </a>
            </div>

            {/* Iframe */}
            <iframe
              src="/Resume.pdf"
              className="flex-1 w-full"
              title="Resume"
              />
          </div>
        </div>
      )}
    </div>
   </>
  );
}
