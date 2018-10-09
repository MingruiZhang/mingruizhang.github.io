export interface ArticleType {
  id: string;
  content: string;
  title: string;
  time: string;
}

export interface ArticleProps {
  article: ArticleType;
}

export interface MainProps {
  articleData: ArticleType[];
}
