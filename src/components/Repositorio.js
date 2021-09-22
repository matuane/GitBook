import React from "react";

const repositorio = ({ repos }) => (
  <div className="cardRepositorio card card-body mb-2">
    <div className="row">
      <div className="col-md-6">
        <a href={repos.html_url} target="_blank">
          {repos.name}
        </a>
      </div>
      <div className="repositorio">
        <span className="bagde bagde-primary">
          Stars: {repos.stargazers_count}
        </span>
        <span className="bagde bagde-secundary">
          watch: {repos.watchers_count}
        </span>
        <span className="bagde bagde-success">Forks: {repos.forks_count}</span>
      </div>
    </div>
  </div>
);
export default repositorio;
