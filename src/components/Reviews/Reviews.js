import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = ({ reviews, setReviews }) => {
  return (
    <div className='container'>
      {reviews.map((review) => {
        const { id, image, job, name, text } = review;

        const randomReview = () => {
          console.log('object');
        };

        return (
          <ReviewCard
            key={id}
            id={id}
            image={image}
            job={job}
            name={name}
            text={text}
            randomReview={randomReview}
          />
        );
      })}
    </div>
  );
};

export default Reviews;
