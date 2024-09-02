import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // set the state for jokes, joh humare backend se aayege fetch hoke
  const [jokes, setJokes] = useState([]);
  // jab bhi app load ho tab fetch karlo api se data, dependency array ki zarurat nahi hai.
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h1>Chai aur Full Stack</h1>
      <p>Jokes: {jokes?.length}</p>
      {/* map karo jokes par */}
      {jokes?.map((joke) => {
        return (
          <div key={joke?.id}>
            <h3>{joke?.title}</h3>
            <p>{joke?.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
