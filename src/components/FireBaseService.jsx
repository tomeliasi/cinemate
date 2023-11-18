import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


  const firebaseConfig = {
    apiKey: "8f64af1a",
    authDomain: "movie-app-data-264cc.firebaseapp.com",
    projectId: "movie-app-data-264cc",
    storageBucket: "movie-app-data-264cc.appspot.com",
    messagingSenderId: "22371123025",
    appId: "1:22371123025:web:73dc05ae1a7e0dbc77dd70",
    measurementId: "G-QYEVDLY77R"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  firebase.initializeApp(firebaseConfig);

  const movieData = [
    {
      description: "Check",
      image: require("../images/the-avengers.jpg"),
      movieTitle: "Avengers",
    },
    {
      description: "Check2",
      image: require("../images/the-butterfly-effect.jpg"),
      movieTitle: "The Butterfly Effect",
    },
    {
      description: "Check3",
      image: require("../images/22-jump-street.jpg"),
      movieTitle: "22 Jump Street",
    },
  ];

  const saveMovieDataToFirebase = (movieData) => {
    const database = firebase.database();
    const moviesRef = database.ref("Movies");
  
    movieData.forEach((movie) => {
      moviesRef.push(movie, (error) => {
        if (error) {
          console.error("Error saving movie data: ", error);
        } else {
          console.log("Movie data saved successfully!");
        }
      });
    });
  };

  saveMovieDataToFirebase(movieData);
  const FirebaseService = () => {
   saveMovieDataToFirebase(movieData);
  };
  
  export default FirebaseService;
