import React from 'react';
import { useState } from 'react';

import ser from '../src/image/28.jpg';

import Common from './Common';



const About = () =>{
    const[data, setData]= useState({
        fullname:"",
        password:"",
        email:"",
        msg:"",

    });

    const InputEvent=(event)=>{
        const{ name, value } = event.target;
        
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit=()=>{
    
        alert(
            `My  email address is ${data.email} and password is ${data.password}.`
        );

    }
 

 return (
 <>
<Common name="Welcome to Log In page "  imgsrc={ser} visit="/signup" btname="Sign up"/>

<div className="my-5">
     <h1 className="text-center">Log In</h1>
     </div>
     <div className="container contact_div">
         <div className="row">
             <div className="col-md-6 col-10 mx-auto">
             <form onSubmit={formSubmit}>
  



  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="Password" class="form-control" id="exampleFormControlInput1" name="password" value={data.password} onChange={InputEvent} placeholder="password" />
  </div>

  <br />
  <button class="btn btn-outline-primary" type="submit">Log In</button>

</form>
                 </div>
             </div>
         </div>
</>
 )
};

export default About;
