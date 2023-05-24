import { Review, Comment } from "@/types/review";

type Props = {
  review: Review;
};

const ReviewItem = ({ review }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-1">
        <div className="pb-5 text-5xl font-bold">
          {review.review % 1 === 0 ? `${review.review}.0` : review.review}
          <span className="text-xl text-gray-400">/5.0</span>
        </div>
        {review.review && (
          <div className="relative top-0 flex items-center">
            {Array.from(Array(5).keys()).map((index) => {
              const starValue = index + 1;
              let fill = "text-white";

              if (starValue <= Math.floor(review.review)) {
                // Full star
                return <Star key={index} fill={fill} />;
              } else if (starValue === Math.ceil(review.review)) {
                // Half star
                return <HalfStar fill={fill} key={index} />;
              }

              return <EmptyStar key={index} />;
            })}

            <div className="ml-1 text-base font-semibold text-gray-400 hover:cursor-pointer hover:underline">
              {
                // Format the number so that it has a comma every 3 digits
                review.numberOfReviews.toLocaleString() + " "
              }
              Reviews
            </div>
          </div>
        )}
      </div>
      <div className="mb-3 text-3xl font-bold">Top Reviews</div>
      <div className="flex flex-col gap-y-4">
        {review.comments.map((comment: Comment, index: number) => {
          return (
            <div
              className="flex flex-col gap-y-2 rounded-lg bg-[hsl(228,_6%,_14%)] px-6 py-5 transition-colors hover:cursor-pointer hover:bg-[hsl(228,_6%,_12%)]"
              key={index}
            >
              <span className="text-lg font-semibold text-gray-400">
                @{comment.name}
              </span>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Star = ({ fill }: { fill: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 ${fill}`}
    >
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const HalfStar = ({ fill }: { fill: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 ${fill}`}
    >
      <path
        fillRule="evenodd"
        d="M10 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591V2.884z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const EmptyStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};
export default ReviewItem;
