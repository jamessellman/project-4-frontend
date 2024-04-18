// This componeont will be when a user clicks on a card and displays extra information

import React, { SyntheticEvent } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IComment } from "../interfaces/commentinterface";

// type Comments = null | IComment;

function ShowIndividualPlayer() {
  const { id } = useParams();
  const [player, setplayer] = React.useState<any>(null);
  const [comment, setComment] = React.useState<any>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPlayer() {
      const resp = await fetch(`http://127.0.0.1:4000/api/players/${id}`);
      const playerData = await resp.json();
      setplayer(playerData);
      console.log(playerData);
    }
    async function fetchComments() {
      const resp = await fetch(`http://127.0.0.1:4000/api/comments/${id}`);
      const commentData = await resp.json();
      setComment(commentData);
      console.log(commentData);
    }
    fetchPlayer();
    fetchComments();
  }, [id]);

  if (!player) {
    return <p>Character Loading...</p>;
  }

  async function deleteProduct(e: SyntheticEvent) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://127.0.0.1:4000/api/players/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/players");
    } catch (e: any) {
      // console.log(e.response.data);
    }
  }

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={player.image}
        alt={player.name}></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {player.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Team: {player.team}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Position: {player.position}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Nationality: {player.nationality}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Career Appearances: {player.career_appearances}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Career Goals: {player.career_goals}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Foot: {player.foot}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Shirt Number: {player.shirt_number}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Bio: {player.bio}
        </p>
        <Link to={`/edit/${id}`}>
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Edit
          </button>
        </Link>
        <button
          onClick={deleteProduct}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Delete
        </button>
      </div>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
              <p>(comment.user_id)</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowIndividualPlayer;
