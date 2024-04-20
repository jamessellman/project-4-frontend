<div className="flex flex-col items-center">
  <div className="w-4/5 md:max-w-2xl bg-white border border-gray-200 rounded-lg shadow md:flex md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img
      className="object-cover w-1/3 rounded-t-lg h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg"
      src={player.image}
      alt={player.name}
    />
    <div className="flex flex-col justify-between p-4 w-full md:w-2/3 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {player.name}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Team: {player.club}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Bio: {player.bio}
      </p>
      {/* Add other player details here */}

      <div className="flex mt-auto">
        <Link to={`/edit/${id}`}>
          <button className="flex-auto focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Edit
          </button>
        </Link>
        <button
          onClick={deleteProduct}
          className="flex-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Delete
        </button>
      </div>
    </div>
  </div>
  <div className="w-4/5 max-w-2xl p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Comment Section:
    </h5>
    <div>
      {comment?.map((comment: any, id: any) => (
        <div
          key={id}
          className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <p>{comment.content}</p>
          <p>{comment.created_at}</p>
          <p>{comment.user_id}</p>
          {comment?.user_id && 
          <p>{comment.user_comments.username}</p>
          }
        </div>
      ))}
    </div>
  </div>
</div>