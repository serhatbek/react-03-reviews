import './App.css';

import { useState } from 'react';
import data from './data';
import Reviews from './components/Reviews/Reviews';

function App() {
  const [reviews, setReviews] = useState(data);
  return (
    <div className='App'>
      <Reviews reviews={reviews} setReviews={setReviews} />
    </div>
  );
}

export default App;
