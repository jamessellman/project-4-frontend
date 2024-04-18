function PlayerCard({ name, image, team }: any) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
        <img
          className="rounded-t-lg"
          src={image}
          alt={name}
        />
      
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {team}
        </p>
      </div>
    </div>
  );
}
export default PlayerCard;
