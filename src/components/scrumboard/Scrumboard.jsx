import React, { Component } from "react";
import Data from "../../static/data";
import Tasks from "../tasks/Tasks";
import "./scrumboard.css";

export class Scrumboard extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      isOpen: false,
      tasks: "",
    };
  }
  // open Modal function
  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };
  // close Modal function
  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };
  // handle change
  handleChange = (e) => {
    this.setState({
      ...this.state,
      tasks: e.target.value,
    });
  };
  // handle submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <>
        <div className={this.state.isOpen ? "show" : "hide"}>
          <div id="modal">
            <div className="modal-content">
              <div className="header">
                <h3>Add a new task</h3>
                <div id="close" onClick={() => this.closeModal()}>
                  X
                </div>
              </div>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="task"
                  onChange={this.handleChange}
                  value={this.state.tasks}
                />
                <button type="submit">CONFIRM</button>
              </form>
            </div>
          </div>
        </div>
        <section className="scrumboard relative">
          <nav>
            <h1>CHATSCRUM</h1>
            <ul className="nav-items">
              <li>
                <strong>User type:</strong> {Data.userType}
              </li>
              <li>
                <strong>Project Name:</strong> {Data.projectName}
              </li>
            </ul>
          </nav>
          <div className="content">
            <p id="info">Hello {Data.fullname}</p>
            <Tasks />

            <button type="submit" onClick={() => this.openModal()}>
              ADD TASK
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default Scrumboard;
