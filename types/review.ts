export type Review = {
  destination: string;
  review: number;
  comments: Comment[];
};

export type Comment = {
  name: string;
  comment: string;
};
