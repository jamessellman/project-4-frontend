// this component will be for cards that render on the list page. There will be multiple cards
import { Link } from "react-router-dom";

function ShowPlayer({ id, name, image, club}: any) {
  return (
    <Link to={`/players/${id}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="h-64 overflow-hidden rounded-t-lg">
          <img className="object-cover w-full h-full" src={image} alt="" />
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {club}
          </p>
        </div>
      </div>
    </Link>
  );
}
export default ShowPlayer;
