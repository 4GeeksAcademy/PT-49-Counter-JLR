import React from "react";

const Button = () => {
    return(
        <div className="container position-relative position-absolute">
        <div className="row position-absolute top-50 start-50">
        <button className="btn btn-secondary mt-3" onClick="history.go(0)" type="button">Reinicio</button>
        <button className="btn btn-secondary mt-3" type="button">Pausa</button>
        <button className="btn btn-secondary mt-3" type="button">Restart</button>
        </div>
      </div>
    )

};
export default Button;