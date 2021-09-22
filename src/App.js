import './App.css';
import Container from 'react-bootstrap/Container';
import CalculationResults from './CalculationResults';
import BetSizeButtons from './BetSizeButtons';
import ManualBetSizeInputs from './ManualBetSizeInputs';

function App() {
  return (
    <Container>
      <CalculationResults />
      <p>Slider placeholder</p>
      <BetSizeButtons />
      <ManualBetSizeInputs />
    </Container>
  );
}

export default App;
