import React from "react";
import "./blog.css";
import Article from "./Article";
import {blog1, blog2, blog3, blog4, blog5} from "./exports";
const Blog = () => {
  return (
    <div className="section2">
      <h1 className="gradient-text">
        A lot is happening, We are blogging about it.
      </h1>
      <br />
      <br />
      <div className="blogs">
        <Article
          image={blog1}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          image={blog2}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          image={blog3}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          image={blog4}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          image={blog5}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  );
};

export default Blog;
