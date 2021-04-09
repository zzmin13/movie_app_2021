import React from "react";

function Food({favorite}){
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>hello!!</h1>
      <Food favorite="Kimchi" />
      <Food favorite="Ramyeon" />
      <Food favorite="Tteokbokki" />
      <Food favorite="Chukumi" />
    </div>
  );
}

export default App;

