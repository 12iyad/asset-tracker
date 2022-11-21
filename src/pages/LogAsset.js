import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import Header from './../components/Header.js'
import "./LogAsset.css"
import fireDb from "./../firebase.js"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



const initialState = {
    user: "",
    serial: "",
    box: "",
}

const btnstate = {button:1}


export const LogAsset = () => {
    const [state, setState] = useState(initialState)
    const[data, setData] = useState({});

    const {user, serial, box} = state;

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {user, value} = e.target;
        setState({state, [user]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user || !serial || !box){
            fireDb.child("asset_log").push(state, (err)=>{
                if(err){
                    toast.error(err)
                }
                else{
                    toast.success("Log created")
                }
            });
        }
        else{

            
            

        }
            
    };

    const returnOrBorrow = (option) => {
        btnstate.button = option
        console.log(btnstate.button)
    }

    return (

        <div className="logasset">
        <Header />
        <ToastContainer position="top-center"/> 
        <div className="log-main-container">
            <div className="log-main-container-content">
                 
                <form className="form-container" onSubmit = {handleSubmit}>

                   <label htmlFor="user">User ID: </label>
                   <input type="text" id="user" name="user" placeholder="Scan user card" value={user} onChange={handleInputChange}/>

                   <label htmlFor="serial">Device ID: </label>
                   <input type="text" id="serial" name="serial" placeholder="Scan device barcode" value={serial} onChange={handleInputChange}/>
                
                   <label htmlFor="box">Box Number: </label>
                   <input type="text" id="box" name="box" placeholder="Scan box barcode" value={box} onChange={handleInputChange}/>
                    <div className="submit-btn">
                    <input onClick={() => returnOrBorrow(1)} className="return-btn" type="submit" value="Returning" />
                    <input onClick={() => returnOrBorrow(2)} className="borrow-btn" type="submit" value="Borrowing" />
                    </div>
                </form>
                
            </div>
        </div>
        </div>

    
  )
}
