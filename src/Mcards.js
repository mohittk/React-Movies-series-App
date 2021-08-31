import React from "react";
import './vanilla-tilt'

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
          <img src={props.imgsrc} alt="mypic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.title} </span>
            <h3 className="card__title"> {props.sname}</h3>
            <a href={props.link} target="blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
      <script src="vanilla-tilt.js"></script>
    </>
  );
}

export default Card;
