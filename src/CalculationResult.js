import './CalculationResult.css';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function CalculationResult() {
  return (
    <Card>
      <Card.Header>Bet Size</Card.Header>
      <Card.Body>
        <Card.Text>
          18%
        </Card.Text>
        <ProgressBar now={60} />
      </Card.Body>
    </Card>
  )
}

export default CalculationResult;
