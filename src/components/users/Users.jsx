
import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

function Users() {
    const githubContext=useContext(GithubContext);
    const {loading,users}=githubContext;
    const userStyle={
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'1rem'
    }
    if(loading){
        return <Spinner />
    }
    else{

    return (
        <div style={userStyle} className="github-user-box">
            {users.map((user)=>{
                return (
                    <UserItem key={user.id} user={user} />
               
                )
            })}
        </div>
    );
        }
  
}
export default Users;
