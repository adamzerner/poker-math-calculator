import './CalculationResults.css';
import CalculationResult from './CalculationResult.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CalculationResults({
  betSizePercentage,
  equityRequiredPercentage,
  mdfPercentage,
  odds,
  outs,
  alphaPercentage
}) {
  return (
    <section>
      <Row>
        <Col>
          <CalculationResult
            header="Bet Size"
            body={betSizePercentage.toPrecision(4) + "%"}
            progressBarValue={betSizePercentage}
            variant="info"
          />
        </Col>
        <Col>
          <CalculationResult
            header="Equity Required"
            body={equityRequiredPercentage.toPrecision(4) + "%"}
            progressBarValue={equityRequiredPercentage}
            variant="success"
          />
        </Col>
        <Col>
          <CalculationResult
            header="Min Defense Frequency"
            body={mdfPercentage.toPrecision(4) + "%"}
            progressBarValue={mdfPercentage}
            variant="warning"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <CalculationResult
            header="Odds"
            body={odds + ":1"}
          />
        </Col>
        <Col>
          <CalculationResult
            header="Outs (Turn to River PLO)"
            body={outs + "13.2"}
          />
        </Col>
        <Col>
          <CalculationResult
            header="Alpha (auto profit)"
            body={alphaPercentage.toPrecision(4) + "%"}
            progressBarValue={alphaPercentage}
            variant="danger"
          />
        </Col>
      </Row>
    </section>
  )
}

export default CalculationResults;
