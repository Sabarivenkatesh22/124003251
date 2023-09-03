const express = require('express');
const axios = require('axios');
const app = express();
const  validationerror = require("./validationError.js");

app.use(express.json());

// Define the API endpoint for token acquisition
// const tokenUrl = 'http://20.244.56.144/train/auth'; // Replace with the actual URL

// // Define the request body
// const requestBody = {
//   companyName: 'Train Central',
//   clientID: 'ffc2ab05-751c-4a77-96f8-402b1c79eae2',
//   clientSecret: 'EeTEgaLUDpuPiWIp',
//   ownerName: 'Sabari',
//   ownerEmail: '124003251@sastra.ac.in',
//   rollNo: '124003251',
// };

// var bearerToken;
// // Make a POST request to obtain the bearer token
// axios.post(tokenUrl, requestBody)
//   .then((response) => {
//     // Handle the token response here
//     bearerToken = response.data.access_token.trim();
//     console.log('Bearer Token:', bearerToken);
//   })
//   .catch((error) => {
//     // Handle errors here
//     console.error('Error:', error.message);
//   });

// Define your Bearer token
bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MjI1MzksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiZmZjMmFiMDUtNzUxYy00YTc3LTk2ZjgtNDAyYjFjNzllYWUyIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjEyNDAwMzI1MSJ9.gxHY2seUr4th0xjM42sikEkaBxBmbnkK98dDH-gvuqg';

// Define the API endpoint URL
const apiUrl = 'http://20.244.56.144/train/trains';

// Create headers with Bearer token
const headers = {
  'Authorization': `Bearer ${bearerToken}`,
};

var trainData;

function makeDelayedGetRequest(){
// Make a GET request with Axios
axios.get(apiUrl, { headers })
  .then(response => {
    trainData = response.data;
    console.log(trainData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}



setTimeout(makeDelayedGetRequest, 1000);






// Sample train data do axios
// const trainData = 
//     [
//         {
//             "trainName": "Sikkim Exp",
//             "trainNumber": "2345",
//             "departureTime": {
//                 "Hours": 11,
//                 "Minutes": 23,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 4,
//                 "AC": 4
//             },
//             "price": {
//                 "sleeper": 6,
//                 "AC": 2
//             },
//             "delayedBy": 5
//         },
//         {
//             "trainName": "Bokaro Exp",
//             "trainNumber": "2347",
//             "departureTime": {
//                 "Hours": 13,
//                 "Minutes": 32,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 55,
//                 "AC": 0
//             },
//             "price": {
//                 "sleeper": 13,
//                 "AC": 8
//             },
//             "delayedBy": 7
//         },
//         {
//             "trainName": "Panjim Exp",
//             "trainNumber": "2349",
//             "departureTime": {
//                 "Hours": 13,
//                 "Minutes": 32,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 2,
//                 "AC": 1
//             },
//             "price": {
//                 "sleeper": 1,
//                 "AC": 2
//             },
//             "delayedBy": 9
//         },
//         {
//             "trainName": "Srinagar Exp",
//             "trainNumber": "2349",
//             "departureTime": {
//                 "Hours": 14,
//                 "Minutes": 55,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 1,
//                 "AC": 0
//             },
//             "price": {
//                 "sleeper": 6387,
//                 "AC": 6474
//             },
//             "delayedBy": 10
//         },
//         {
//             "trainName": "Amritsar Exp",
//             "trainNumber": "2346",
//             "departureTime": {
//                 "Hours": 19,
//                 "Minutes": 0,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 15,
//                 "AC": 10
//             },
//             "price": {
//                 "sleeper": 15,
//                 "AC": 5
//             },
//             "delayedBy": 13
//         },
//         {
//             "trainName": "Kolkata Exp",
//             "trainNumber": "2345",
//             "departureTime": {
//                 "Hours": 20,
//                 "Minutes": 15,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 16,
//                 "AC": 70
//             },
//             "price": {
//                 "sleeper": 5840,
//                 "AC": 5940
//             },
//             "delayedBy": 14
//         },
//         {
//             "trainName": "Hyderabad Exp",
//             "trainNumber": "2341",
//             "departureTime": {
//                 "Hours": 23,
//                 "Minutes": 55,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 6,
//                 "AC": 7
//             },
//             "price": {
//                 "sleeper": 554,
//                 "AC": 1854
//             },
//             "delayedBy": 5
//         },
//         {
//             "trainName": "Gandhinagar Exp",
//             "trainNumber": "2341",
//             "departureTime": {
//                 "Hours": 7,
//                 "Minutes": 15,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 15,
//                 "AC": 5
//             },
//             "price": {
//                 "sleeper": 7,
//                 "AC": 15
//             },
//             "delayedBy": 1
//         },
//         {
//             "trainName": "Cuttack Exp",
//             "trainNumber": "2346",
//             "departureTime": {
//                 "Hours": 12,
//                 "Minutes": 3,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 10,
//                 "AC": 1
//             },
//             "price": {
//                 "sleeper": 4680,
//                 "AC": 5883
//             },
//             "delayedBy": 6
//         },
//         {
//             "trainName": "Mumbai Exp",
//             "trainNumber": "2343",
//             "departureTime": {
//                 "Hours": 22,
//                 "Minutes": 37,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 8,
//                 "AC": 15
//             },
//             "price": {
//                 "sleeper": 5810,
//                 "AC": 5910
//             },
//             "delayedBy": 16
//         },
//         {
//             "trainName": "Pune Exp",
//             "trainNumber": "2342",
//             "departureTime": {
//                 "Hours": 23,
//                 "Minutes": 0,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 6,
//                 "AC": 7
//             },
//             "price": {
//                 "sleeper": 14,
//                 "AC": 9
//             },
//             "delayedBy": 17
//         },
//         {
//             "trainName": "Patna Exp",
//             "trainNumber": "2340",
//             "departureTime": {
//                 "Hours": 6,
//                 "Minutes": 10,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 10,
//                 "AC": 1
//             },
//             "price": {
//                 "sleeper": 4688,
//                 "AC": 5893
//             },
//             "delayedBy": 0
//         },
//         {
//             "trainName": "Jodhpur Exp",
//             "trainNumber": "2344",
//             "departureTime": {
//                 "Hours": 11,
//                 "Minutes": 0,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 33,
//                 "AC": 13
//             },
//             "price": {
//                 "sleeper": 6163,
//                 "AC": 6274
//             },
//             "delayedBy": 4
//         },
//         {
//             "trainName": "Aizawl Exp",
//             "trainNumber": "2342",
//             "departureTime": {
//                 "Hours": 8,
//                 "Minutes": 30,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 18,
//                 "AC": 7
//             },
//             "price": {
//                 "sleeper": 6382,
//                 "AC": 7013
//             },
//             "delayedBy": 2
//         },
//         {
//             "trainName": "Delhi Exp",
//             "trainNumber": "2343",
//             "departureTime": {
//                 "Hours": 9,
//                 "Minutes": 45,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 32,
//                 "AC": 1
//             },
//             "price": {
//                 "sleeper": 1,
//                 "AC": 3
//             },
//             "delayedBy": 3
//         },
//         {
//             "trainName": "Mysore Exp",
//             "trainNumber": "2347",
//             "departureTime": {
//                 "Hours": 13,
//                 "Minutes": 32,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 2,
//                 "AC": 2
//             },
//             "price": {
//                 "sleeper": 6130,
//                 "AC": 6263
//             },
//             "delayedBy": 8
//         },
//         {
//             "trainName": "Cochin Exp",
//             "trainNumber": "2348",
//             "departureTime": {
//                 "Hours": 15,
//                 "Minutes": 55,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 1,
//                 "AC": 0
//             },
//             "price": {
//                 "sleeper": 2,
//                 "AC": 4
//             },
//             "delayedBy": 11
//         },
//         {
//             "trainName": "Lucknow Exp",
//             "trainNumber": "2347",
//             "departureTime": {
//                 "Hours": 17,
//                 "Minutes": 33,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 5,
//                 "AC": 1
//             },
//             "price": {
//                 "sleeper": 4702,
//                 "AC": 5933
//             },
//             "delayedBy": 12
//         },
//         {
//             "trainName": "Chennai Exp",
//             "trainNumber": "2344",
//             "departureTime": {
//                 "Hours": 21,
//                 "Minutes": 35,
//                 "Seconds": 0
//             },
//             "seatsAvailable": {
//                 "sleeper": 3,
//                 "AC": 1
//             },
//             "price": {
//                 "sleeper": 2,
//                 "AC": 5
//             },
//             "delayedBy": 15
//         }
//     ]
;

// Function to calculate time difference in minutes, considering delays
function calculateTimeDifferenceInMinutes(currentTime, departureTime, delayedBy) {
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
//   console.log(departureTime.Hours);
  const departureHours = departureTime.Hours + Math.floor(delayedBy / 60);
  const departureMinutes = departureTime.Minutes + (delayedBy % 60);

  const currentTotalMinutes = currentHours * 60 + currentMinutes;
  const departureTotalMinutes = departureHours * 60 + departureMinutes;

  return departureTotalMinutes - currentTotalMinutes;
}

app.get('/trains', (req, res) => {
  // Get the current time
  const currentTime = new Date();

  // Define the end time (12 hours from the current time)
  const endTime = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);

  // Filter and sort trains departing in the next 12 hours (excluding next 30 minutes)
  const trainsInNext12Hours = trainData.filter(train => {
    // Check if departureTime exists and has Hours and Minutes properties
    console.log(train.departureTime);
    if (train.departureTime && train.departureTime.Hours !== undefined && train.departureTime.Minutes !== undefined) {
        const timeDifference = calculateTimeDifferenceInMinutes(currentTime, train.departureTime, train.delayedBy);
        return timeDifference > 30 && timeDifference <= 12 * 60; // Exclude trains departing in the next 30 minutes
      }
      return false; 
  }).sort((a, b) => {
    // Sort by price (ascending)
    const priceA = a.price.sleeper + a.price.AC;
    const priceB = b.price.sleeper + b.price.AC;
    if (priceA !== priceB) {
      return priceA - priceB;
    }

    // Sort by available tickets (descending)
    const ticketsA = a.seatsAvailable.sleeper + a.seatsAvailable.AC;
    const ticketsB = b.seatsAvailable.sleeper + b.seatsAvailable.AC;
    if (ticketsA !== ticketsB) {
      return ticketsB - ticketsA;
    }

    // Sort by departure time (descending)
    const timeDifferenceA = calculateTimeDifferenceInMinutes(currentTime, a.departureTime, a.delayedBy);
    const timeDifferenceB = calculateTimeDifferenceInMinutes(currentTime, b.departureTime, b.delayedBy);
    return timeDifferenceB - timeDifferenceA;
  });

  // Prepare a JSON response
  const response = {
    trains: trainsInNext12Hours
  };

  res.json(response);
});



// ERROR DETECTOR
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    console.log(err.message);
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});