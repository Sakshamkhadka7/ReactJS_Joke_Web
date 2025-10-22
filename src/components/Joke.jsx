import React, { useState } from "react";
import Button from "./Button";
import "./Joke.css";

const Joke = () => {
  const [comedy, setComedy] = useState([]);

  const jokeApi = () => {
    fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
      .then((res) => res.json())
      .then((data) => setComedy(data));
      
  };

  return (
    <>
     <Button fetchApi={jokeApi} />
    <div className="container">
     
      {comedy.map((com, index) => (

        <div key={index} className="jok-div">
                 <p >SetUp: {com.setup}</p>
                 <p>PunchLine: {com.punchline}</p>
                 <hr/>
        </div>
   
        
      ))}
    </div>
    </>
    
  );
};

export default Joke;
