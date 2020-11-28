import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios"



function App() {
  
  const [search, setsearch] = useState("");
  
  
  const [recipes, setrecipes] = useState([]);

  const APP_ID = "3480d3b2";
  const APP_KEY = "91cdeb9018d20bba5a10025bb2e3cd18";

  useEffect(()=>
  {
      getrecipes();
  },[]
  );
  const getrecipes = async () => {
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setrecipes(result.data.hits);
  };
  
  const onInputChange = (e) =>{
    setsearch(e.target.value);
  };

  return (
    <div className="App">
     <Header search={search} onInputChange={onInputChange}/>
     <div className="container">
     <Recipes recipes={recipes} />
     </div>
    </div>
  );
}


export default App;
