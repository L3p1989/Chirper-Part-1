import React, { Component } from "react";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container align-content-center mt-5">
          <div className="row">
            <div className="col-md-12">
              <form className="border border-dark">
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
                    placeholder="What's on your mind?"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
