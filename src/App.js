import React from "react";
import "./App.css";
import Name from "./composant/Name";
import Price from "./composant/Price";
import Description from "./composant/Description";
import Image from "./composant/Image";
import product from "./composant/produit";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const firstName = "Fares"; 

  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Image image={product.image} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      
    </div>
  );
}

export default App;
