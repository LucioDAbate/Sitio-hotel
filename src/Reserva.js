import "./Reserva.css";

function Reserva() {
  return (
    <div className="reserva-container">
      <h2 className="reserva-title">Reserva tu habitación</h2>
      <form className="reserva-form">
        <div className="form-group">
          <label>Desde</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Hasta</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Adultos</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label>Niños</label>
          <select>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="form-group">
          <label>Habitaciones</label>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <button type="submit" className="btn-reservar">Reservar</button>
      </form>
    </div>
  );
}

export default Reserva;
