import React from "react";
import "./App.css";

const App = () => {
   async function logMovies() {
      const response = await fetch("https://swapi.dev/api/people/1/");
      const movies = await response.json();
      console.log(movies);
   }

   function fetchData() {
      fetch("https://tense-bass-capris.cyclic.app/cookie", {
         // Use the correct URL
         method: "POST",
         headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
         },
         credentials: "include",
      })
         .then((res) => res.json())
         .then((res) => console.log(res))
         .catch((error) => console.error("Error:", error));
   }
   return (
      <div>
         <div>
            <h1>Post Data !!!</h1>
            <button onClick={() => console.log("lol")}>Click it</button>
            <button onClick={logMovies}>Click Movies</button>
            <button onClick={fetchData}>GET COOKIE</button>
         </div>
      </div>
   );
};

export default App;
