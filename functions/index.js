const { response } = require("express");
const functions = require("firebase-functions");
const admin = require('firebase-admin')

admin.initializeApp();

const express = require('express');
const app = express();

//app function
app.get('/asset_log', (request,response) => {
      admin
      .firestore()
      .collection('asset_log')
      .get()
      .then((data) => {
        //store all assets in an array
            let asset_log = [];
            data.forEach((doc) => {
              //push all data pulled from firebase into the array
              asset_log.push(doc.data());
            });
            return response.json(asset_log);
        })
        .catch((err) => console.error(err));
      })

      //creates an asset log
exports.createAssetLog = functions.https.onRequest((request, response) => {
        if(request.method != 'POST'){
          return response.status(400).json({error: 'Method not allowed'});
        }

        //stores new values of asset information
      const newAssetLog = {
        actionTime: admin.firestore.Timestamp.fromDate(new Date()),
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

//calls the app functions through api route
exports.api = functions.https.onRequest(app);