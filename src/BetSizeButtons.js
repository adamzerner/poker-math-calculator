import './BetSizeButtons.css'
import Button from 'react-bootstrap/Button';

function BetSizeButtons({ setBetSizePercentage }) {
  const betSizes = [20, 25, 33, 50, 67, 75, 100];

  return (
    <section className="bet-size-buttons">
      {betSizes.map((betSize, i) => (
        <Button
          key={i}
          variant="outline-secondary"
          onClick={() => setBetSizePercentage(betSize)}
        >{betSize}%</Button>
      ))}
    </section>
  )
}

export default BetSizeButtons;
