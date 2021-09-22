import './BetSizeButtons.css'
import Button from 'react-bootstrap/Button';

function BetSizeButtons() {
  return (
    <section class="bet-size-buttons">
      <Button variant="outline-secondary">20%</Button>
      <Button variant="outline-secondary">25%</Button>
      <Button variant="outline-secondary">33%</Button>
      <Button variant="outline-secondary">50%</Button>
      <Button variant="outline-secondary">67%</Button>
      <Button variant="outline-secondary">75%</Button>
      <Button variant="outline-secondary">100%</Button>
    </section>
  )
}

export default BetSizeButtons;
