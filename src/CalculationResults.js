import './CalculationResults.css';
import CalculationResult from './CalculationResult.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CalculationResults() {
  return (
    <section>
      <Row>
        <Col>
          <CalculationResult />
        </Col>
        <Col>
          <CalculationResult />
        </Col>
        <Col>
          <CalculationResult />
        </Col>
      </Row>
      <Row>
        <Col>
          <CalculationResult />
        </Col>
        <Col>
          <CalculationResult />
        </Col>
        <Col>
          <CalculationResult />
        </Col>
      </Row>
    </section>
  )
}

export default CalculationResults;
