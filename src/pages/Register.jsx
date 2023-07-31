import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [sammary, setSummary] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
   
    try {
      const res = await axios.post("/register", {
        name,sammary,email,password
      })
      if(res.status === 200){
        navigate("/login")
        console.log(res)
      }else{
        console.log("err: 24")
      }
    } catch (error) {
      console.log("catch frontend",error)
    }

  };

  return (
    <div className="m-5 ">

      <form onSubmit={handleSubmit}>
      <div className="flex border flex-col p-1">
        <input
          type="text"
          required
          className="border"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          className="border"
          placeholder="summary"
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          type="text"
          required
          className="border"
          placeholder="emai"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          className="border"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" name="submit" id="" className="border "/>
      </div>

      </form>
    </div>
  );
};

export default Register;
