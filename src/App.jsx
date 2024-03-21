import React, { useState } from "react";
import "./App.css";
import ConfirmationMessage from "./ConfirmationMessage";
import MoodSelector from "./MoodSelector";

const App = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (selectedMood) => {
    setConfirmationMessage(`Thank you for selecting ${selectedMood} mood!`);
  };

  return (
    <div className="App">
      <h1 className="text-7xl font-light text-red-800">
        Daily Mood Trackers
      </h1>
      {confirmationMessage ? (
        <ConfirmationMessage message={confirmationMessage} />
      ) : (
        <MoodSelector onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
