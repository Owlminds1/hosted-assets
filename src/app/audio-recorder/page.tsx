
"use client";
import dynamic from 'next/dynamic';
import React from 'react'
const ReactMediaRecorder = dynamic(
    () => import("react-media-recorder").then((mod) => mod.ReactMediaRecorder),
    { ssr: false }
  );
const Page = () => {
  return (
    <div className="bg-[#F8F8F8] flex justify-center p-5 items-center min-h-screen flex-col gap-4">
      <h1 className="text-3xl  text-black">Audio Recorder</h1>
    <div>
       <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="flex justify-center items-center gap-4 flex-col">
<h1>{status === "recording" ? "Recording..." : ""}</h1>

            <div className="flex gap-6">
              <button
                onClick={startRecording}
                className="bg-green-500 px-5 py-2 rounded-lg text-white"
              >
                Start Recording
              </button>

              <button
                onClick={stopRecording}
                className="bg-red-500 px-5 py-2 rounded-lg text-white"
              >
                Stop Recording
              </button>
            </div>

            {mediaBlobUrl && <audio src={mediaBlobUrl} controls></audio>}
          </div>
        )}
      />
    </div>
    </div>
  )
}

export default Page
