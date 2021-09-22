import './CalculationResult.css';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarPlaceholder() {
  return <span style={{display: "block", height: 16}}></span>
}

function CalculationResult({ header, body, progressBarValue, variant }) {
  return (
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Text>
          {body}
        </Card.Text>
        {progressBarValue ?
          <ProgressBar now={progressBarValue} variant={variant} /> :
          <ProgressBarPlaceholder />
        }
      </Card.Body>
    </Card>
  )
}

export default CalculationResult;
