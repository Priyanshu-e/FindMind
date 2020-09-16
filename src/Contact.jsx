import React from 'react';
import { useState } from 'react';

import web from "../src/image/img3.jpeg"
import Common from './Common';


const Contact = () =>{

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
            `My name is ${data.fullname}.my  email is ${data.email} and password is ${data.password}, here i want to say ${data.msg}`
        );

    }
 

 return (
 <>

<Common name="Welcome to Sign up page "  imgsrc={web} visit="/login" btname="Log In"/>

 
 <div className="my-5">
     <h1 className="text-center">Sign up</h1>
     </div>
     <div className="container contact_div">
         <div className="row">
             <div className="col-md-6 col-10 mx-auto">
             <form onSubmit={formSubmit}>
             <div className="form-group">
    <label for="exampleFormControlInput1">Username</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter your full name" />
  </div>



  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="Password" class="form-control" id="exampleFormControlInput1" name="password" value={data.password} onChange={InputEvent} placeholder="password" />
  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} ></textarea>
  </div>
  <br />
  <button class="btn btn-outline-primary" type="submit">Sign up</button>

</form>
                 </div>
             </div>
         </div>
</>
 )
};

export default Contact;
