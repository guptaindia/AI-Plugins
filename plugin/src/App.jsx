import React, { useState } from 'react'
import * as tf from '@tensorflow/tfjs';

// const model = await tf.loadGraphModel('model.json');

// const predictions = await model.predict(input);
// console.log(predictions);


const App = () => {
  const [predictions, setPredictions] = useState([]);

  const loadModel = async () => {
    const model = await tf.loadGraphModel('model.json');
    setPredictions(model.predict(input));
  };
  return (
    <div>
      <h1>TensorFlow.js in React</h1>
      <button onClick={loadModel}>Load Model</button>
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction}>{prediction}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;