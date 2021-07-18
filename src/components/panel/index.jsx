import "./styles.css";
import Button from "../button";

const Panel = () => {
    const onClick = () => {
        console.log('Clicou!')
      }
  return (
    <div className="panel">
        <h2>Floside Pop Hotel</h2>
        <h3>Arrival</h3>
        <p>Fev 4th, 2019 at 7:30pm</p>
        <h3>Departure</h3>
        <p>Fev 6th, 2019 at 10:30pm</p>
        <h3>Home</h3>
        <p>Bussines Suite</p>
      <Button 
      text="Confirm Reservation" 
      onClick={onClick} />
    </div>
  );
};

export default Panel;
