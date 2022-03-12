import React from "react";

const Article = ({image, date, title}) => {
  return (
    <article className="article">
      <img src={image} alt="" />
      <div className="article-content">
        <p>{date}</p>
        <h2>{title}</h2>
      </div>
      <button>Read full article</button>
    </article>
  );
};

export default Article;
