import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import CalculationResults from './CalculationResults';
import BetSizeButtons from './BetSizeButtons';
import ManualBetSizeInputs from './ManualBetSizeInputs';

function App() {
  return (
    <Container>
      <CalculationResults
        betSizePercentage={10}
        equityRequiredPercentage={20}
        mdfPercentage={30}
        odds={2.2}
        outs={12}
        alphaPercentage={60}
      />
      <Form.Range />
      <BetSizeButtons />
      <ManualBetSizeInputs />
    </Container>
  );
}

export default App;
