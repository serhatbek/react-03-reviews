import './App.scss';

import ReviewCard from './components/ReviewCard/ReviewCard';

function App() {
  return (
    <main className='App'>
      <section className='container'>
        <h2>Our Reviews</h2>
        <ReviewCard />
      </section>
    </main>
  );
}

export default App;
