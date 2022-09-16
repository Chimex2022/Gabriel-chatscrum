import React, { Component } from "react";
import axios from "axios";
import Data from "../../static/data";
import Tasks from "../tasks/Tasks";
import Users from "../users/Users";
import AddTask from "./AddTask";
import "./scrumboard.css";

export class Scrumboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      isOpen: false,
      tasks: [],
    };
  }
  // add task
  addTask = (task) => {
    task.id = Math.random().toString(36).slice(2, 9);
    let tasks = [...this.state.tasks, task];
    this.setState({ tasks });
  };

  // delete task
  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  componentDidMount() {
    axios
      .get("http://liveapi.chatscrum.com/scrum/api/scrumgoals/")
      .then((res) => {
        this.setState({ tasks: res.data });
        console.log(res);
      });
  }

  render() {
    return (
      <>
        <AddTask addTask={this.addTask} />
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
            <Tasks data={this.state.tasks} deleteTask={this.deleteTask} />

            <Users />
          </div>
        </section>
      </>
    );
  }
}

export default Scrumboard;
