import './ManualBetSizeInputs.css'
import Form from 'react-bootstrap/Form';

function ManualBetSizeInputs() {
  return (
    <section class="manual-bet-size-inputs">
      <Form.Control placeholder="Bet size" />
      <Form.Control placeholder="Pot size" />
    </section>
  )
}

export default ManualBetSizeInputs;
