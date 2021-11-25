export type Article = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

export type ArticlesData = {
  data: Article;
};

export type ApiError = {
  error: string;
};
