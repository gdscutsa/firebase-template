import { Link } from 'react-router-dom';

export function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <li className="bg-black flex flex-row items-center max-h-[300px] overflow-hidden relative transition duration-300 ease-in-out hover:scale-[1.025] hover:-translate-y-0.5">
        <img
          src={movie.image}
          alt={movie.title}
          className="object-fill w-full brightness-50"
        ></img>
        <div className="p-4 absolute w-full bottom-0 left-0 h-fit text-white shadow-xl space-y-2">
          <h2 className="font-bold text-2xl">{movie.title}</h2>
          <p>{movie.description}</p>
          <p>
            Rating: <span>No reviews</span>
          </p>
        </div>
      </li>
    </Link>
  );
}
