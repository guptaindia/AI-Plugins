import React, { useEffect, useState } from 'react'
// import * as toxicity from '@tensorflow-models/toxicity';


const ToxicityPlugin = ({content, children}) => {

  // const [model, setModel] = useState(null);
  let model;
  // const [text, setText] = useState('');
  const [predictions, setPredictions] = useState(null)
  const [result, setResult] = useState('');

  useEffect(() => {
    if(content){
      const script =  content.split('\n').slice(2, -2).join('\n');
      eval(script);
    }
  }, [])

  useEffect(() => {
    let buttonElement = document.getElementById('trigger');
    buttonElement.disabled = true;
    buttonElement.addEventListener('click', () => predict());
    async function loadModel() {
      model = await window.toxicity.load();
      buttonElement.disabled = false;
      console.log('model loaded');
      // setModel(temp);
    }
    loadModel();
  }, []);

  useEffect(() => {
    console.log(document.a);
  }, [])

  function isToxic(toxicityResults) {
    // Iterate through the results and check for any toxic labels with a match of True
    for (const result of toxicityResults) {
      if (result.results[0].match === true) {
        return true;
      }
    }
    return false;
  }

  async function predict() {
    let inputElement = document.getElementById('text-input');
    console.log('predicting...');
    console.log(inputElement.value);
    const predictions = await model.classify(inputElement.value);
    console.log(predictions);
    setPredictions(predictions);
    callBack(predictions);
    let outputElement = document.getElementById('output');
    // console.log(JSON.stringify(predictions));
    setResult(isToxic(predictions) ? 'Content is Toxic' : 'Content is Safe')
  }

  const displayPredictions = () => {
    if (predictions !== null) {
      return predictions.map((prediction) => (
        <div key={prediction.label}>{prediction.label}: {prediction.results[0].match ? 'Yes' : 'No'}</div>
      ));

    }
  }


  return (
    <div>
      {children}
      {result}
      {/* {displayPredictions()} */}

      {/* <div className='card'>
        <div className="card-body">
          <button onClick={() => predict()}>Predict</button>
          <div>
            {predictions !== null && predictions.map((prediction) => (
              <div key={prediction.label}>{prediction.label}: {prediction.results[0].match ? 'Yes' : 'No'}</div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ToxicityPlugin