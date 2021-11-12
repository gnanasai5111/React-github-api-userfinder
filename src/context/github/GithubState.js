import React,{useReducer,useEffect} from "react";
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer"
import {
    USERS_START,
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';




const GithubState=props =>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false

    }
    const [state,dispatch]=useReducer(GithubReducer,initialState);
    // initial users
    useEffect(()=>{
        const usersStart=async () =>{
            setLoading(true);
            const res = await axios.get(
              `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHIB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            );
            dispatch({
            type:USERS_START,
            payload:res.data})
          
          }
          usersStart();

    },[]);
    
    // search users
    const searchUsers = async (text) => {
        setLoading(true);
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHIB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );

       dispatch({
           type:SEARCH_USERS,
           payload:res.data.items
       })
 
      };

    // get user
    const getUser = async (username) => {
        setLoading(true);
        const res = await axios.get(
          `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHIB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        console.log(res.data);
        dispatch({
            type:GET_USER,
            payload:res.data
        });
      };

    // get repos
      
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHIB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
        type:GET_REPOS,
        payload:res.data
    });
  };

    // clear users
    const clearUsers = () => {
        dispatch({type:CLEAR_USERS});
  
      };

    // set loading
    const setLoading=()=>{
        dispatch({type:SET_LOADING});
    }

    return <GithubContext.Provider value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        // usersStart,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;