const { response } = require("express");
const functions = require("firebase-functions");
const admin = require('firebase-admin')
const app = require('express');

admin.initializeApp();

const config = { 
    apiKey: "AIzaSyDqKRaVFyMJeNLvz7-4KQWot3BpkceQtUk",
    authDomain: "asset-tracker-90cdc.firebaseapp.com",
    projectId: "asset-tracker-90cdc",
    storageBucket: "asset-tracker-90cdc.appspot.com",
    messagingSenderId: "481398242233",
    appId: "1:481398242233:web:d4b195503affc046015468"
}



const firebase = require('firebase');
firebase.initializeApp(config);

//app function
app.get('/asset_log', (request,response) => {
      admin
      .firestore()
      .collection('asset_log')
      .orderBy('actionTime', 'desc')
      .get()
      .then((data) => {
        //store all assets in an array
            let asset_log = [];
            data.forEach((doc) => {
              //push all data pulled from firebase into the array
              asset_log.push({
                //send data all in same order
                assetLogID: doc.id,
                actionTime: doc.data().actionTime,
                deviceNo: doc.data().deviceNo,
                deviceSerialNo: doc.data().deviceSerialNo,
                returnDevice: doc.data().returnDevice,
                userName: doc.data().userName
              });
            });
            return response.json(asset_log);
        })
        .catch((err) => console.error(err));
      })

//creates an asset log
app.post('/asset_log', (request,response) => {

      //stores new values of asset information
      const newAssetLog = {
        actionTime: new Date().toISOString(),
        deviceNo: request.body.deviceNo,
        deviceSerialNo: request.body.deviceSerialNo,
        returnDevice: request.body.returnDevice,
        userName: request.body.userName
      };
      //saves new information on firebase directory
      admin.firestore()
      .collection('asset_log')
      .add(newAssetLog)
      .then(doc => {
        response.json({message: `document ${doc.id} created successfully`})
      } )
      .catch(err => {
        response.status(500).json({error: 'something went wrong :('});
        console.error(err);
      })
})

//Signup
app.post('/signup', (req,res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    userName: req.body.userName,
  };


//TODO: Validate data

firebase
  .auth()
  .createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then((data) => {
    return res.status(201).json({message: `user ${data.user.uid} signed up successfully`});

  })
  .catch((err) => {
    console.error(err);
    return res.status(500).json({error: err.code});
  })


})

//calls the app functions through api route
exports.api = functions.https.onRequest(app);

