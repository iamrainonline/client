import React from "react";
import "./App.css";

const App = () => {
   const postData = (e) => {
      console.log("data posted");
   };
   async function logMovies() {
      const response = await fetch("https://swapi.dev/api/people/1/");
      const movies = await response.json();
      console.log(movies);
   }

   return (
      <div>
         <div>
            <h1>Post Data</h1>
            <button onClick={() => postData}>Click it</button>
            <button onClick={logMovies}>Click Movies</button>
            <button onClick={() => logMovies}>Click Movies Callback</button>
         </div>
      </div>
   );
};

export default App;
