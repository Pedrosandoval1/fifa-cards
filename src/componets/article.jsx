import s from "../style.module.css";

const Article = ({ articles }) => {
  return articles.map((articl) => (
    <div key={articl.id}>
      <div className={s.container_carts}>
        <h1>{articl.name}</h1>
        <img src={articl.img} alt={articl.name} />
        <p>{articl.nation}</p>
        <p>{articl.age}</p>
      </div>
    </div>
  ));
};

export default Article;
