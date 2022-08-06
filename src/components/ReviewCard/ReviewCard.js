import React from 'react';

const ReviewCard = ({ id, image, job, name, text, randomReview }) => {
  return (
    <div className='review-card' id={id}>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className='review-card__content'>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
        <div>prev-Next Arrows</div>
        <button onClick={randomReview}>Suprise Me</button>
      </div>
    </div>
  );
};

export default ReviewCard;
