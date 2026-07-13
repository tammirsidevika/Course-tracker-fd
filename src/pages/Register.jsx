import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {

  const navigate = useNavigate();

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    navigate("/");
  }

  return(

<div className="register-container">

<div className="register-box">

<h1>Course Tracker</h1>

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Full Name"
value={user.name}
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email"
value={user.email}
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
value={user.password}
onChange={handleChange}
/>

<input
type="password"
name="confirmPassword"
placeholder="Confirm Password"
value={user.confirmPassword}
onChange={handleChange}
/>

<button>
Register
</button>

</form>

<p>
Already have an account?
<Link to="/"> Login</Link>
</p>

</div>

</div>

  )

}

export default Register;