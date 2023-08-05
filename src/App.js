import React from "react";
import "./App.css";

const App = () => {
   const postData = (e) => {
      console.log("data posted");
   };

   return (
      <div>
         <div>
            <h1>Post Data</h1>
            <button onClick={() => postData}>Click it</button>
         </div>
      </div>
   );
};

export default App;
