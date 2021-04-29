import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";

function App() {
  const [data, setdata] = useState("");
  const [name, setname] = useState("kota");
  const [error, seterror] = useState("");

  useEffect(() => {
   
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d542f0b36c5f179c7f1f1c6a3a56c20f`
      )
      .then((res) => {
        if (res.status === 200) {
          setdata(res.data);
          seterror("");
          
        }
      })
      .catch((err) => {
        seterror("Please Enter Correct....");
      });
  }, [name]);
  


  return (
    <div className="App">
      <Main error={error} data={data} setname={setname} />
    </div>
  );
}

export default App;
