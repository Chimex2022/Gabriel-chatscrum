import React, { Component } from "react";

export class AddTask extends Component {
  state = {
    content: "",
  };
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
      content: e.target.value,
    });
  };
  // handle submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false,
    });
    this.props.addTask(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <div className="add-task">
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
                  value={this.state.content}
                />
                <button type="submit">CONFIRM</button>
              </form>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="add_button"
          onClick={() => this.openModal()}
        >
          ADD TASK
        </button>
      </div>
    );
  }
}

export default AddTask;
