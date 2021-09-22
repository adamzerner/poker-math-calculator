import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import CalculationResults from './CalculationResults';
import BetSizeButtons from './BetSizeButtons';
import ManualBetSizeInputs from './ManualBetSizeInputs';
import { useState } from 'react';

function getEquityRequiredPercentage(betSizePercentage) {
  return (betSizePercentage / (betSizePercentage + betSizePercentage + 100)) * 100;
}

function getMdfPercentage(betSizePercentage) {
  return 100 - getAlphaPercentage(betSizePercentage);
}

function getOdds(betSizePercentage) {
  /*

  equity required of 25%
  gives pot odds of 3:1
  (100 - 25) / 25

  */

  const equityRequiredPercentage = getEquityRequiredPercentage(betSizePercentage);

  return (100 - equityRequiredPercentage) / equityRequiredPercentage;
}

function getOuts(betSizePercentage) {
  /*

  equity required of 25%
  11 / 44 outs

  X / 44 = (equityRequiredPercentage / 100)

  */

  const equityRequiredPercentage = getEquityRequiredPercentage(betSizePercentage);

  return (equityRequiredPercentage * 44) / 100;
}

function getAlphaPercentage(betSizePercentage) {
  return (betSizePercentage / (betSizePercentage + 100)) * 100;
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
      <Form.Range onChange={(e) => setBetSizePercentage(Number(e.target.value))}/>
      <BetSizeButtons setBetSizePercentage={setBetSizePercentage} />
      <ManualBetSizeInputs setBetSizePercentage={setBetSizePercentage} />
    </Container>
  );
}

export default App;
