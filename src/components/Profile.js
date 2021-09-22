import React from "react";

const Profile = ({ user }) => (
  <div>
    <div className="row">
      <div>
        <div className="cardProfile card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={user.avatar_url}
            alt="Foto do usuario"
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Nome:
              <span className="badge badge-success">{user.name}</span>
            </li>
            <li className="list-group-item">
              Repositorios:
              <span className="badge badge-success">{user.public_repos}</span>
            </li>
            <li className="list-group-item">
              Seguidores:
              <span className="badge badge-success">{user.followers}</span>
            </li>
            <li className="list-group-item">
              Seguindo:
              <span className="badge badge-success">{user.following}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
