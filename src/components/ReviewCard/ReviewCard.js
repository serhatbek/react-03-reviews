import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import people from '../../data';

const ReviewCard = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const prevPerson = () => {
    setIndex(() => {
      return index <= 0 ? people.length - 1 : index - 1;
    });
  };
  const nextPerson = () => {
    setIndex(() => {
      return index >= people.length - 1 ? 0 : index + 1;
    });
  };
  const randomPerson = () => {
    const randomNum = Math.floor(Math.random() * people.length);
    setIndex(randomNum);
  };

  return (
    <div className='review-card' id={id}>
      <figure className='review-card__avatar'>
        <img src={image} alt={name} />
      </figure>
      <div className='review-card__content'>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
        <button className='arrow arrow-left' onClick={prevPerson}>
          <BsFillArrowLeftCircleFill className='arrow-icon' />
        </button>
        <button className='arrow arrow-right' onClick={nextPerson}>
          <BsFillArrowRightCircleFill className='arrow-icon' />
        </button>
      </div>
      <button onClick={randomPerson}>Suprise Me</button>
    </div>
  );
};

export default ReviewCard;
