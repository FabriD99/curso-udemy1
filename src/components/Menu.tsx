import { useState } from "react";
import TaTeTi from "./TaTeTi";
import Calculadora from "./Calculadora.tsx";

const styles = {
  menuStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    margin: "50px",
  },
  button: {
    background: "transparent",
    color: "white",
    padding: "10px",
    margin: "10px",
    fontSize: "2em",
    cursor: "pointer",
  },
};

function Menu() {
  const [showTateti, setShowTateTi] = useState(false);
  const [showCalc, setShowCalc] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.innerText === "Tateti") {
      setShowTateTi(!showTateti);
      if (showCalc) setShowCalc(false);
      return <TaTeTi />;
    } else if (target.innerText === "Calculadora") {
      setShowCalc(!showCalc);
      if (showTateti) setShowTateTi(false);
      <div>Calculadora</div>;
    }
  };

  return (
    <>
      <div style={styles.menuStyle}>
        <div>
          <button style={styles.button} onClick={handleClick}>
            Tateti
          </button>
          {showTateti ? <TaTeTi /> : null}
        </div>
        <div>
          <button style={styles.button} onClick={handleClick}>
            Calculadora
          </button>
          {showCalc ? <Calculadora /> : null}
        </div>
      </div>
    </>
  );
}

export default Menu;
