// Note: TaTeTi component
// type Props = {};

import { useState } from "react";

const styles = {
  celStyle: {
    width: "100px",
    height: "100px",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Doto",
    padding: "0px",
    fontSize: "5em",
    fontWeight: 900,
    border: "5px solid #e14848",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rowStyle: {
    padding: "10px",
  },
};

function TaTeTi() {
  const [player1, setPlayer1] = useState(true);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");

  let cartel = "";

  const handleClick1 = () => {
    if (player1) {
      setValue1("X");
    } else {
      setValue1("O");
    }
    setPlayer1(!player1);
    console.log(value1);
  };

  const handleClick2 = () => {
    if (player1) {
      setValue2("X");
    } else {
      setValue2("O");
    }
    setPlayer1(!player1);
    console.log(value2);
  };

  const handleClick3 = () => {
    if (player1) {
      setValue3("X");
    } else {
      setValue3("O");
    }
    setPlayer1(!player1);
    console.log(value3);
  };

  const handleClick4 = () => {
    if (player1) {
      setValue4("X");
    } else {
      setValue4("O");
    }

    setPlayer1(!player1);
    console.log(value4);
  };

  const handleClick5 = () => {
    if (player1) {
      setValue5("X");
    } else {
      setValue5("O");
    }
    setPlayer1(!player1);
    console.log(value5);
  };

  const handleClick6 = () => {
    if (player1) {
      setValue6("X");
    } else {
      setValue6("O");
    }
    setPlayer1(!player1);
    console.log(value6);
  };

  const handleClick7 = () => {
    if (player1) {
      setValue7("X");
    } else {
      setValue7("O");
    }
    setPlayer1(!player1);
    console.log(value7);
  };

  const handleClick8 = () => {
    if (player1) {
      setValue8("X");
    } else {
      setValue8("O");
    }
    setPlayer1(!player1);
    console.log(value8);
  };

  const handleClick9 = () => {
    if (player1) {
      setValue9("X");
    } else {
      setValue9("O");
    }
    setPlayer1(!player1);
    console.log(value9);
  };

  const clearAllValues = () => {
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");
    setValue6("");
    setValue7("");
    setValue8("");
    setValue9("");
  };

  if (
    (value1 === value2 && value2 === value3 && value1 !== "") ||
    (value4 === value5 && value5 === value6 && value4 !== "") ||
    (value7 === value8 && value8 === value9 && value7 !== "") ||
    (value1 === value4 && value4 === value7 && value1 !== "") ||
    (value2 === value5 && value5 === value8 && value2 !== "") ||
    (value3 === value6 && value6 === value9 && value3 !== "") ||
    (value1 === value5 && value5 === value9 && value1 !== "") ||
    (value3 === value5 && value5 === value7 && value3 !== "")
  ) {
    if (!player1) {
      cartel = "Gana X";
      console.log(`Gana el jugador X`);
    } else {
      cartel = "Gana O";
      console.log(`Gana el jugador O`);
    }
    setTimeout(() => {
      clearAllValues();
    }, 3000);
  } else if (
    value1 !== "" &&
    value2 !== "" &&
    value3 !== "" &&
    value4 !== "" &&
    value5 !== "" &&
    value6 !== "" &&
    value7 !== "" &&
    value8 !== "" &&
    value9 !== ""
  ) {
    console.log("No hay ganador");
    cartel = "Empate"; 
    setTimeout(() => {
      clearAllValues();
    }, 3000);
  }

  return (
    <div>
      <h1>{cartel}</h1>
      <div className="container text-center">
        <div className="row" style={styles.rowStyle}>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick1}
              style={styles.celStyle}
              type="button"
              disabled={value1 !== ""}
            >
              {value1}
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick2}
              style={styles.celStyle}
              type="button"
              disabled={value2 !== ""}
            >
              {value2}
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick3}
              style={styles.celStyle}
              type="button"
              disabled={value3 !== ""}
            >
              {value3}
            </button>
          </div>
        </div>
        <div className="row" style={styles.rowStyle}>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick4}
              style={styles.celStyle}
              type="button"
              disabled={value4 !== ""}
            >
              {value4}
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick5}
              style={styles.celStyle}
              type="button"
              disabled={value5 !== ""}
            >
              {value5}
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick6}
              style={styles.celStyle}
              type="button"
              disabled={value6 !== ""}
            >
              {value6}
            </button>
          </div>
        </div>
        <div className="row" style={styles.rowStyle}>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick7}
              style={styles.celStyle}
              type="button"
              disabled={value7 !== ""}
            >
              {value7}
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick8}
              style={styles.celStyle}
              type="button"
              disabled={value8 !== ""}
            >
              {value8}
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleClick9}
              style={styles.celStyle}
              type="button"
              disabled={value9 !== ""}
            >
              {value9}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaTeTi;
