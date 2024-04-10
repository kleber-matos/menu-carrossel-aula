/** @format */
import "./App.css";
import { useState } from "react";
import Carousel from "react-elastic-carousel";

//Documentação do carrossel: https://sag1v.github.io/react-elastic-carousel/
//npm i react-elastic-carousel --force
export default function App() {
  //Menu
  const [menu, setMenu] = useState(false);

  // const quantidade = [{ itemsToShow: 1 }];
  return (
    <div>
      <header>
        <h2>Menu Show</h2>
        <button onClick={() => setMenu(!menu)}>{menu ? "X" : "☰"}</button>
      </header>
      {/* O operador AND (&&) em JavaScript
      Eles permitem realizar operações de comparação e combinação de valores booleanos */}
      {menu && (
        <>
          <ul>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Produtos</li>
          </ul>
        </>
      )}

      {/* breakPoints={quantidade} */}
      <Carousel enableAutoPlay autoPlaySpeed={1500}>
        <div className="item1">1</div>
        <div className="item2">2</div>
        <div className="item3">3</div>
        <div className="item4">4</div>
      </Carousel>
    </div>
  );
}
