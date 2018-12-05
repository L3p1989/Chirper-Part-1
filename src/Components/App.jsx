import React, { Component } from "react";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container mt-5 w-50">
          <div className="row">
            <div className="col-md-12">
              <form className="border border-dark d-flex">
                <div className="form-group m-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group m-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    placeholder="Chirp Chirp"
                  />
                </div>
                <button className="btn btn-primary m-2 align-self-end">
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
