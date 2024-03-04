import { useState, useEffect } from "react";
import axios from "axios";

import './App.css'

type userprofile = {id:string,email:string,verified_email:boolean,name:string,given_name:string,family_name:string,picture:string,locale:string}

function App() {
  const [me, setMe] = useState<userprofile | undefined>();
console.log(me)
  useEffect(() => {
    async function getMe() {
      await axios
        .get("http://localhost:4000/auth/me", {
          withCredentials: true,
        })
        .then((res) => setMe(res.data));
    }

    getMe();
  }, []);

  if (me) {
    return (
    <div className="profile">
      <h1 className="heading">Welcome to my profile </h1>
     <p className="id">{me.id}</p>
     <h3 className="email">{me.email}</h3>
     <h3 className="name">{me.name}</h3>
     <img src={me.picture} alt="my Image" className="image" />
      
    </div>);
  }

  return (
    <div className="App">
      <a href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fgoogle&client_id=979267129799-kmui9kgrgef2iedtcb96692l93n25qbm.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email">
        LOGIN WITH GOOGLE
      </a>
    </div>
  );
}

export default App;
