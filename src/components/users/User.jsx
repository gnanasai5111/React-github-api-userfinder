import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({  match }) => {
  const githubContext=useContext(GithubContext);
  const {getUser,loading,user,repos,getUserRepos}=githubContext;
  useEffect(() => {
    getUser(match.params.login);
    console.log(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line;
  }, []);
 
// console.log(user);
  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div style={{ margin: "30px" }}>
        <Link to="/" className="btn">
          Back To search
        </Link>
        Hireable :{""}
        {hireable ? (
          <i className="fas fa-check" style={{ color: "green" }}></i>
        ) : (
          <i style={{ color: "red" }} className="fas fa-times-circle"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul style={{ listStyleType: "none" }}>
              <li>
                {login && (
                  <>
                    <strong>Username: </strong> {login}
                  </>
                )}
              </li>

              <li>
                {company && (
                  <>
                    <strong>Company: </strong> {company}
                  </>
                )}
              </li>

              <li>
                {blog && (
                  <>
                    <strong>Website: </strong> {blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center-btn">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </div>
    </>
  );
};

export default User;
