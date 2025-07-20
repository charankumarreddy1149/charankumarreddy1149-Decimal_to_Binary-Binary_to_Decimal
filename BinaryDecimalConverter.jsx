import React, { useState } from 'react';
import './BinaryDecimalConverter.css';

export default function BinaryDecimalConverter() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('dec_to_bin');

  const handleConvert = () => {
    try {
      if (mode === 'dec_to_bin') {
        const decimalNum = parseInt(inputValue, 10);
        if (isNaN(decimalNum)) throw new Error('Invalid decimal');
        setResult(`Binary: ${decimalNum.toString(2)}`);
      } else if (mode === 'bin_to_dec') {
        if (!/^[01]+$/.test(inputValue)) throw new Error('Invalid binary');
        const decimalNum = parseInt(inputValue, 2);
        setResult(`Decimal: ${decimalNum}`);
      }
    } catch (err) {
      setResult('Invalid input.');
    }
  };

  const handleClear = () => {
    setInputValue('');
    setResult('');
  };

  return (
    <div className="container">
      <div className="converter-box">
        <h1 className="title">Binary-Decimal Converter</h1>

        <div className="mode-buttons">
          <button
            onClick={() => { setMode('dec_to_bin'); setResult(''); }}
            className={`mode-button ${mode === 'dec_to_bin' ? 'active' : ''}`}
          >
            Decimal to Binary
          </button>
          <button
            onClick={() => { setMode('bin_to_dec'); setResult(''); }}
            className={`mode-button ${mode === 'bin_to_dec' ? 'active' : ''}`}
          >
            Binary to Decimal
          </button>
        </div>

        <input
          type="text"
          placeholder={mode === 'dec_to_bin' ? 'Enter decimal number' : 'Enter binary number'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />

        <div className="action-buttons">
          <button onClick={handleConvert} className="convert-button">Convert</button>
          <button onClick={handleClear} className="clear-button">Clear</button>
        </div>

        <div className="result">{result}</div>
      </div>
    </div>
  );
}