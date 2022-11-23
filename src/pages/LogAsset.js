import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Header from './../components/Header.js'
import "./LogAsset.css"
import {collection, addDoc} from "firebase/firestore"
import {db} from "./../firebase.js"


//You can now upload data to firebase
//Find out how to retrieve data from firebase and display to admin page



export const LogAsset = () => {


    //initialise form inputs
    const[user, setUser] = useState("");
    const[serial, setSerial] = useState("");
    const[box, setBox] = useState("");
    var btnstate = false;

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        //create new asset log
        addDoc(collection(db, "asset_log"),{
            user:user,
            serial:serial,
            box:box,
            returned:btnstate,
            time:new Date(),
        });
        
    };

    //True or False depending on if device returned or borrowed
    const returnOrBorrow = (option) => {
        btnstate = option
    }

    return (

        <div className="logasset">
        <Header />

        {/* <div className="log-recent-container">
                <div className="log-recent-header">
                    <h3>NAME</h3>
                </div>

                <div className="log-recent-header">
                     <h3>ACTION</h3>
                </div>

                <div className="log-recent-header">
                       <h3>TIME</h3>
                </div>
        </div> */}


        {/*Display the loan form */}
        <div className="main-element-container">
        <div className="log-form-content-container">
            <div className="log-form-main-container">
                    <div className="log-form-main-container-br"></div>
                    <div className="log-form-main-container-content">
                        
                        <form className="form-container" onSubmit = {handleSubmit}>

                        <label className="form-title" htmlFor="user">User ID: </label>
                        <input type="text" id="user" autoComplete="off" name="user" autoFocus placeholder="Scan user card" value={user} 
                        onChange={(e) => setUser(e.target.value)}/>

                        <label className="form-title" htmlFor="serial">Device ID: </label>
                        <input type="text" id="serial" autoComplete="off" name="serial" placeholder="Scan device barcode" value={serial} 
                        onChange={(e) => setSerial(e.target.value)}/>
                        
                        <label className="form-title" htmlFor="box">Box Number: </label>
                        <input type="text" id="box" autoComplete="off" name="box" placeholder="Scan box barcode" value={box} 
                        onChange={(e) => setBox(e.target.value)}/>
                            <div className="submit-btn">
                            
                            <input onClick={() => returnOrBorrow(true)} className="return-btn" type="submit" value="Returning" />
                            <input onClick={() => returnOrBorrow(false)} className="borrow-btn" type="submit" value="Borrowing" />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>

            {/*Display the recent user info*/}
            <div className="log-recent-container">
                <table className="log-recent-table">

                <tr>
                    <th className="log-recent-header">NAME</th>
                    <th className="log-recent-header">ACTION</th>
                    <th className="log-recent-header">TIME</th>
                </tr>
                <tr>
                    <td className="log-recent-value">Riyad</td>
                    <td className="log-recent-value">Returned</td>
                    <td className="log-recent-value">12:58pm</td>
                </tr>
                <tr>
                    <td className="log-recent-value">test2</td>
                    <td className="log-recent-value">Borrowed</td>
                    <td className="log-recent-value">12:58pm</td>
                </tr>


                </table>
            </div>
        </div>
       
    </div>
  )
}
