import React, { Component } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Profile from "./components/Profile";
import Repositorio from "./components/Repositorio";
import "./CSS/Navbar.css";
import "./CSS/Profile.css";
import "./CSS/Repositorio.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "Iv1.158a83b01376cdac",
        cliente_secret: "355310ec847e61a11cfc2ffe06e8284d0a300a39",
        count: 7,
        sort: "created: asc",
      },
      user: [],
      repos: [],
    };
  }

  getUser = (e) => {
    var input = document.querySelector("#search");
    const user = input.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;
    axios
      //para os usuarios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));

    //Para os repositorios
    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&
        client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  };

  renderProfile = () => {
    const { user, repos } = this.state;

    return (
      <div>
        <div>
          <Profile user={user} />
        </div>
        <div className="repositorio">
          {repos.map((repos) => (
            <Repositorio key={repos.name} repos={repos} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="navbarI">
          <Navbar />
          <div className="container">
            <div className="navCard card card-body">
              <h1>Pesquisar Usuários do GitHub</h1>
              <p className="lead">
                Digite um nome para encontrar usuários e repositórios
              </p>
              <div className="row">
                <div className="col-md-12">
                  <input
                    id="search"
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
                <div className="buttonSearch col-md-6">
                  <a onClick={this.getUser} href="#" className="btn btn-block">
                    Pesquisar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Profile">
          {this.state.user.length !== 0 ? this.renderProfile() : null}
        </div>
      </div>
    );
  }
}

export default App;
