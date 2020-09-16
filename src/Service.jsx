import React from 'react';

import { useState } from 'react';

import ToDoList from './ToDoList'

import { NavLink } from 'react-router-dom';
import ser from '../src/image/28.jpg';

const Service = () =>{
    const[name, setName]= useState();
    const[Items, setItems]= useState([]);
    

    const itemEvent = (event) =>{
    
        setName(event.target.value);
    };
    const listOfItems = () => {
         setItems( (oldItems) =>{
              return[...oldItems, name];
         });
         setName("");
    };
    
    const deleteItems =(id) =>{
        console.log("deleted");

        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !==id;
            })
        })
     }
 

 return (
 <>

<section id="header" className=" d-flex align-items-center">
<div className="container-fluid  ">
     <div className="row">
         <div className="col-11 mx-auto">
             <div className="row">
             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                 <h1>  Grow your any service with < strong className="brand-name">FindMind Analytics Private Limited</strong></h1>
                 <h2 className="my-3">we are here to create Tasksboard!!!</h2>
                 <div className="mt-3">
                     
                     </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img ">
                <img src ={ser} className="img-fluid animated" alt="common img" />
                </div>
                </div>

             </div>
         
         </div>

     </div>
	 
	 
	 
    </section>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>Tasksboard</h1>
            <br />
            <input type="text" placeholder="Add the task" value={name} onChange={itemEvent}/>
            <button onClick={listOfItems}>+</button>

            <ol>


           { Items.map( (itemval, index) => {
              return <ToDoList
               key={index} 
               id={index}
               text={itemval} 
               onSelect={deleteItems}/>;

            })}
                </ol>
            </div>
        </div>
    
 
 
    
     
     

</>
 )
};

export default Service;
