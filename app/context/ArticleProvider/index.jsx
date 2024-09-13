"use client";

import { createContext, useState } from "react";
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articleData, setArticleData] = useState();
  const [listArticles, setListArticles] = useState();

  return (
    <ArticleContext.Provider
      value={{ setArticleData, setListArticles, listArticles }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleProvider };
export default ArticleContext;
