import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import CalculationResults from './CalculationResults';
import BetSizeButtons from './BetSizeButtons';
import ManualBetSizeInputs from './ManualBetSizeInputs';
import { useState } from 'react';

function getEquityRequiredPercentage(betSizePercentage) {
  return 10;
}

function getMdfPercentage(betSizePercentage) {
  return 10;
}

function getOdds(betSizePercentage) {
  return 2.2;
}

function getOuts(betSizePercentage) {
  return 11;
}

function getAlphaPercentage(betSizePercentage) {
  return 60;
}

function App() {
  const [betSizePercentage, setBetSizePercentage] = useState(50);

  return (
    <Container>
      <CalculationResults
        betSizePercentage={betSizePercentage}
        equityRequiredPercentage={getEquityRequiredPercentage(betSizePercentage)}
        mdfPercentage={getMdfPercentage(betSizePercentage)}
        odds={getOdds(betSizePercentage)}
        outs={getOuts(betSizePercentage)}
        alphaPercentage={getAlphaPercentage(betSizePercentage)}
      />
      <Form.Range />
      <BetSizeButtons />
      <ManualBetSizeInputs />
    </Container>
  );
}

export default App;
