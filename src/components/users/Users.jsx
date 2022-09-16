import React, { Component } from "react";
import axios from "axios";
import "./users.css";

export class Users extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      loading: true,
      isOpen: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://liveapi.chatscrum.com/scrum/api/scrumusers/")
      // .then((res) => console.log(res.data))
      .then((res) => {
        this.setState({ users: res.data, loading: false });
      });
  }

  toggleModal = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    console.log("users>>>",this.state.users);
    return (
      <div className="users">
        <h4 onClick={() => this.toggleModal()}>Connected users</h4>
        <div className={`users-list ${this.state.isOpen ? "show" : "hidden"}`}>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            this.state.users.map(({ nickname, id }) => (
              <div className="user" key={id}>
                <span className="fas fa-user"></span>
                <span>{nickname}</span>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Users;
