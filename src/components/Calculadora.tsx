const styles = {
  rowStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "fitContent",
    margin: "10px",
  },
  colStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
};

function Calculadora() {
  return (
    <div>
      <div className="row" style={styles.rowStyle}>
        <input style={{ height: "50px", width: "275px" }} />
      </div>
      <div className="row" style={styles.rowStyle}>
        <div className="col" style={styles.colStyle}>
          <button style={{ width: "200px" }}>AC</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>/</button>
        </div>
      </div>
      <div className="row" style={styles.rowStyle}>
        <div className="col" style={styles.colStyle}>
          <button>7</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>8</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>9</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>*</button>
        </div>
      </div>
      <div className="row" style={styles.rowStyle}>
        <div className="col" style={styles.colStyle}>
          <button>4</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>5</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>6</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>-</button>
        </div>
      </div>
      <div className="row" style={styles.rowStyle}>
        <div className="col" style={styles.colStyle}>
          <button>1</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>2</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>3</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>+</button>
        </div>
      </div>
      <div className="row" style={styles.rowStyle}>
        <div className="col" style={styles.colStyle}>
          <button>0</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>.</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>%</button>
        </div>
        <div className="col" style={styles.colStyle}>
          <button>=</button>
        </div>
      </div>
      Calculadora
    </div>
  );
}

export default Calculadora;
