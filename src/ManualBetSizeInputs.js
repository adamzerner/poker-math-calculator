import './ManualBetSizeInputs.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ManualBetSizeInputs({ setBetSizePercentage }) {
  const [betSize, setBetSize] = useState(50);
  const [potSize, setPotSize] = useState(100);

  function handleBetSizeChange(newBetSize) {
    const newBetSizePercentage = (newBetSize / potSize) * 100;

    setBetSize(newBetSize);
    setBetSizePercentage(newBetSizePercentage);
  }

  function handlePotSizeChange(newPotSize) {
    const newBetSizePercentage = (betSize / newPotSize) * 100;

    setPotSize(newPotSize);
    setBetSizePercentage(newBetSizePercentage);
  }

  return (
    <section className="manual-bet-size-inputs">
      <Form.Control
        onChange={(e) => handleBetSizeChange(Number(e.target.value))}
        value={betSize}
        type="number"
        min="1"
        step="10"
      />
      <Form.Control
        onChange={(e) => handlePotSizeChange(Number(e.target.value))}
        value={potSize}
        type="number"
        min="1"
        step="10"
      />
    </section>
  )
}

export default ManualBetSizeInputs;
