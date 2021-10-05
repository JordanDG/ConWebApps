import React from 'react';

// Week1 Components. //
import Title from "./components/Week1Component/Title.js";
import Tile from "./components/Week1Component/Tile.js";
import ProgressBar from './components/Week1Component/ProgressBar.js';
import HorizontalProgressBar from "./components/Week1Component/HorizontalProgressBar.js";
import GoalProgress from "./components/Week1Component/GoalProgress.js";

function App() {
  return (
    <Tile>
      <Title Text="15 Days Completed!" />
      <ProgressBar />
      <HorizontalProgressBar />
      <GoalProgress CompletionPercentage="50%" />
    </Tile>
  );
};

export default App;
