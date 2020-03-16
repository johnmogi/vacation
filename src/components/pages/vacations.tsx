import * as React from "react";
import { Component } from "react";
import { VacsModel } from "../models/vacs-model";
import { VacCard } from "./vacs-card";
import { UserModel } from "../models/user-model";

interface vacationState {
  vacs: VacsModel[];
  vacId: string;
  userLog: UserModel[];
}
export class Vacations extends Component<any, vacationState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      vacs: [],
      vacId: "",
      userLog: []
    };
  }
  componentDidMount = () => {
    const port = process.env.PORT || 3003;
    const vacationId = this.props.match.params.vacId;
    this.setState({ vacId: vacationId });
    // fetch("http://localhost:3003/api/vacations/" + vacationId)
    fetch(`http://localhost:` + `${port}` + `/api/vacations/`)
      .then(res => res.json())
      .then(vacs => this.setState({ vacs }))
      .catch(err => alert(err.message));
  };
  componentDidUpdate = () => {
    const vacationId = this.props.match.params.vacId;
    if (vacationId !== this.state.vacId) {
      this.componentDidMount();
    }
  };
  public render(): JSX.Element {
    return (
      <div className="vacations row">
        {this.state.vacs.map(v => (
          <div className="card col-5" key={v.vacationID}>
            <VacCard
              value={v.vacationID}
              vacationID={v.vacationID}
              id={v.vacationID}
              vacationName={v.vacationName}
              description={v.description}
              destination={v.destination}
              picFileName={v.picFileName}
              startDate={v.startDate}
              endDate={v.endDate}
              price={v.price}
            />
          </div>
        ))}
      </div>
    );
  }
}
