import React, { useState } from "react";

const MoodSelector = ({ onSubmit }) => {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    onSubmit(selectedMood);
    setSelectedMood("");
  };

  return (
    <div className="flex flex-col justify-around h-screen">
      <div>
        <h2 className="text-4xl font-bold text-red-800 mt-7">
          What is your mood today?:
        </h2>
      </div>
      <div className="flex justify-around">
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleMoodSelection("Happy")}
        >
          😊 Happy
        </button>
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleMoodSelection("Sad")}
        >
          😢 Sad
        </button>
        <button
          className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleMoodSelection("Angry")}
        >
          😡 Angry
        </button>
        <button
          className="bg-orange-100 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleMoodSelection("Confused")}
        >
          😕 Confused
        </button>
      </div>
      <div>
        <button
          className="bg-amber-300 w-32 h-32 rounded-full text-4xl font-bold hover:bg-red-400"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MoodSelector;
