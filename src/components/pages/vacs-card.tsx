import * as React from "react";
import { Link } from "react-router-dom";

export const VacCard = (props: any) => {
  return (
    <div className="" key={props.vacationID}>
      <ul className="card-body">
        <Link to={`/vacations/${props.vacationID}`}>
          <div className="card-header">{props.vacationName}</div>
        </Link>
        <li>{props.description}</li>
        <li>startDate : {props.startDate}</li>
        <li> endDate : {props.endDate}</li>
        <li> price :{props.price} $</li>
      </ul>
    </div>
  );
};
