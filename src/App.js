import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import CalculationResults from './CalculationResults';
import BetSizeButtons from './BetSizeButtons';
import ManualBetSizeInputs from './ManualBetSizeInputs';

function App() {
  return (
    <Container>
      <CalculationResults />
      <Form.Range />
      <BetSizeButtons />
      <ManualBetSizeInputs />
    </Container>
  );
}

export default App;
