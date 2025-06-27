"use client";
import React, { useEffect } from "react";
import moodLevels from "@/layoutMoodMeter/moodLevels.json";
import "@/layoutMoodMeter/style.css";

const LayoutMoodMeter = () => {
  useEffect(() => {
    const moodIndicator = document.getElementById("mood-indicator");
    const moodText = document.getElementById("mood-text");
    const moodMeter = document.getElementById("mood-meter");
    const moodEmoji = document.getElementById("mood-emoji");
    const sliderThumb = document.getElementById("slider-thumb");
    const body = document.body;

    let isSliding = false;

    function updateMoodFromPosition(clientY: number) {
      const moodMeterRect = moodMeter?.getBoundingClientRect();
      if (!moodMeterRect) return;

      const clickPosition = moodMeterRect.bottom - clientY;
      const percentage = Math.max(
        0,
        Math.min(1, clickPosition / moodMeterRect.height)
      );
      const moodIndex = Math.floor(percentage * (moodLevels.length - 1));

      const selectedMood = moodLevels[moodIndex];

      if (moodIndicator)
        moodIndicator.style.height = `${selectedMood.height}px`;

      if (moodText)
        moodText.textContent = selectedMood.text;

      if (moodEmoji)
        moodEmoji.innerHTML = `<img src="${selectedMood.emoji}" alt="Emoji" width="50px">`;

      body.style.backgroundColor = selectedMood.color;

      if (moodIndicator)
        moodIndicator.style.background = `linear-gradient(to top, ${selectedMood.color}, transparent)`;

      if (sliderThumb)
        sliderThumb.style.bottom = `${
          moodMeterRect.height * percentage - sliderThumb.offsetHeight / 2
        }px`;
    }

    function moveSlider(event: MouseEvent) {
      if (isSliding) {
        updateMoodFromPosition(event.clientY);
      }
    }

    function endSlider() {
      isSliding = false;
    }

    // Set initial mood
    updateMoodFromPosition(0);

    // Attach mousedown and drag listeners
    if (sliderThumb) {
      sliderThumb.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isSliding = true;
        document.addEventListener("mousemove", moveSlider);
        document.addEventListener("mouseup", endSlider);
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container">
        <h1>Mood Meter</h1>
        <div className="mood-meter-container">
          <div id="mood-meter" className="mood-meter">
            <div id="mood-indicator" className="mood-indicator"></div>
            <div id="slider-thumb" className="slider-thumb"></div>
          </div>
          <span id="mood-emoji" className="mood-emoji"></span>
        </div>
        <div className="mood-text-container">
          <span id="mood-text">Happy, Calm, Content</span>
        </div>
      </div>
    </div>
  );
};

export default LayoutMoodMeter;
