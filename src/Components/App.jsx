import React, { Component } from "react";
import NavBar from "./NavBar";

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

    this.setState({ userName: "", chirp: "" });
  }

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
      </>
    );
  }
}

export default App;
