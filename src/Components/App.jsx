import React, { Component } from "react";
import NavBar from "./NavBar";
import Timeline from "./Timeline";

let oldChirps = [
  { userName: "Patrick", chirp: "This makes my brain hurt!" },
  { userName: "Patrick", chirp: "This lab is aggravating me" },
  {
    userName: "Patrick",
    chirp: "It would help if I would stop being so complex"
  }
]; //3 chirps on page

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      chirp: "",
      chirpsArray: []
    };
  }

  handleClick(e) {
    e.preventDefault();
    //snapshots
    let chirps = this.state.chirpsArray;
    let chirp = {
      userName: this.state.userName,
      chirp: this.state.chirp
    };

    chirps.unshift(chirp); //push new chirp to top of Timeline

    this.setState({ userName: "", chirp: "", chirpArray: chirps });
  } //when run push values into new card

  componentWillMount() {
    this.setState({ chirpsArray: oldChirps });
  } //shows oldChirps

  render() {
    return (
      <>
        <NavBar />
        <div className="container mt-5 w-50">
          <div className="row">
            <div className="col-md-12">
              <form className="border border-dark rounded">
                <label className="m-2 text-center font-weight-bold">
                  What's on your mind?
                </label>
                <div className="form-group m-5">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Who dis is!?"
                    value={this.state.userName}
                    onChange={e => this.setState({ userName: e.target.value })}
                  />
                </div>
                <div className="form-group m-5">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Chirp Chirp"
                    value={this.state.chirp}
                    onChange={e => this.setState({ chirp: e.target.value })}
                  />
                </div>
                <button
                  onClick={e => this.handleClick(e)}
                  type="submit"
                  className="btn btn-primary m-2"
                >
                  Chirp it!
                </button>
              </form>
            </div>
          </div>
        </div>
        <Timeline chirps={this.state.chirpsArray} />
      </>
    );
  }
}

export default App;
