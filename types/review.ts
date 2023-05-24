export type Review = {
  destination: string;
  review: number;
  numberOfReviews: number;
  comments: Comment[];
};

export type Comment = {
  name: string;
  comment: string;
};
