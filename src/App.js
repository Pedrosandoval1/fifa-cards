import React from "react";
import Buttons from "./componets/buttons";
import s from "./style.module.css";
import dataPrueba from "./data/PruebaData";
import Article from "./componets/article";
import Filtro from "./componets/filtros";
import { useState } from "react";

function App() {
  const data = ["All", ...new Set(dataPrueba.map((art) => art.nation))];
  const [articles, setArticles] = useState(dataPrueba);
  const filterNations = (category) => {
    if (category === "All") {
      setArticles(dataPrueba);
      return;
    }
    const filterCategory = dataPrueba.filter(
      (article) => article.nation === category
    );
    setArticles(filterCategory);
  };
  return (
    <>
      <Filtro >
        <Buttons   nations={data} filterNations={filterNations}  />
      </Filtro>

      <div className={s.container}>
        <Article articles={articles} />
      </div>
    </>
  );
}

export default App;
