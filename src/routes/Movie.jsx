import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../components/Header';
import { movies } from '../constants/movies';

export function Movie() {
  const { id } = useParams();

  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const movie = movies.find((movie) => {
    return movie.id === id;
  });

  return (
    <main className="container max-w-3xl p-4 py-8 mx-auto">
      <Header />
      <section className="flex flex-col items-center md:flex-row md:space-x-5 space-y-2">
        <div className="w-96 h-[569px]">
          <img src={movie.image} alt="img"></img>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p>{movie.description}</p>
          <p className="mt-10">
            Rating: <span>No ratings</span>
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-10">Reviews</h2>
        <p>No reviews</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-10">Add a review</h2>
        {false ? (
          <form className="flex flex-col space-y-2 mt-5">
            <label htmlFor="rating">Rating (1-5)*:</label>
            <input
              className="bg-zinc-100 border-2 border-zinc-300 w-10"
              type="number"
              name="rating"
              min="1"
              max="5"
              step="1"
              required
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
            <label htmlFor="review">Review:</label>
            <textarea
              className="bg-zinc-100 border-2 border-zinc-300"
              name="review"
              cols="30"
              rows="10"
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            ></textarea>
            <button
              className="bg-black text-white p-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        ) : (
          <p>Please login to add a review</p>
        )}
      </section>
    </main>
  );
}
