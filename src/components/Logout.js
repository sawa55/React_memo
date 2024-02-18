import React from 'react'
import { signInWithPopup, signOut} from"firebase/auth";
import {auth,provider} from "../firebase";
import { useNavigate } from 'react-router-dom';

const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();
  const logout = () =>{
    //Googleでログイン
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  };

  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>ログアウト</button>
      </div>
  )
}

export default Logout