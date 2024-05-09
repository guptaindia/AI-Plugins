import React, { Fragment, useState } from 'react'
import useTextToxicity from 'react-text-toxicity'

function Toxicity({ predictions }) {
  const style = { margin: 10 }

  if (!predictions) return <div style={style}>Loading predictions...</div>

  return (
    <div style={style}>
      {predictions.map(({ label, match, probability }) => (
        <div style={{ margin: 5 }} key={label}>
          {`${label} - ${probability} - ${match ? '🤢' : '🥰'}`}
        </div>
      ))}
    </div>
  )
}

export default function ToxicityDetection() {
  const [value, setValue] = useState('')

  // predictions are updated every time the value is updated
  const predictions = useTextToxicity(value)

  return (
    <div className='border-2 border-gray-600'>
      <div>
        <div>Write something</div>
        <textarea
          style={{ width:100  , height:300}}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {value && <Toxicity predictions={predictions} />}
    </div>
  )
}