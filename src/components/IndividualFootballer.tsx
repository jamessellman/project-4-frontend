// This componeont will be when a user clicks on a card and displays extra information

import React, { SyntheticEvent } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IComment } from "../interfaces/commentinterface";
import { baseUrl } from "../config";

function ShowIndividualPlayer({ user, setUser }:any) {
  const { id } = useParams();
  const [player, setplayer] = React.useState<any>(null);
  const [comment, setComment] = React.useState<any>(null);
  const [commentData, setCommentData] = React.useState({
    content: "",
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPlayer() {
      const resp = await fetch(`${baseUrl}/players/${id}`);
      const playerData = await resp.json();
      setplayer(playerData);
      console.log(playerData);
    }
    async function fetchComments() {
      const resp = await fetch(`${baseUrl}/comments/${id}`);
      const commentData = await resp.json();
      setComment(commentData);
      console.log("commentdata", commentData);
    }
    fetchPlayer();
    fetchComments();
  }, [id]);

  function handleCommentChange(e: any) {
    const fieldName = e.currentTarget.name;
    const newCommentData: any = structuredClone(commentData);
    if (newCommentData)
      newCommentData[fieldName as keyof typeof commentData] = e.target.value;
    setCommentData(newCommentData);
  }
  console.log(commentData);

  async function handleCommentSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const resp = await axios.post(
      `${baseUrl}/comments/${id}/comments`,
      commentData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    window.location.reload();
  }

  if (!player) {
    return <p>Player Loading...</p>;
  }

  async function deleteProduct(e: SyntheticEvent) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${baseUrl}/players/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/players");
    } catch (e: any) {
      // console.log(e.response.data);
    }
  }

  return (
    <section className="flex justify-center">
      <div className="max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div className="w-4/5 md:max-w-6xl bg-white  rounded-lg shadow md:flex md:flex-row  dark:border-gray-700 dark:bg-gray-800">
          <img
            className="object-cover w-1/3 rounded-t-lg h-96 md:h-auto md:w-2/3 md:rounded-none md:rounded-l-lg"
            src={player.image}
            alt={player.name}
          />
          <div className="flex flex-col justify-between p-4 w-2/3 md:w-2/3 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {player.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Team: {player.club}
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
              <span className="max-w-xm">Bio: {player.bio}</span>
            </p>
            <div className="flex mt-auto ">
              {user && <Link to={`/edit/${id}`}>
                <button className="focus:outline-none w-1/2 sm:w-40 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Edit
                </button>
              </Link>}
              {user && <button
                onClick={deleteProduct}
                className="focus:outline-none w-1/2 sm:w-40 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Delete
              </button>}
            </div>
          </div>
        </div>
        <div className="w-4/5 md:max-w-6xl  p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Comment Section:
          </h5>
          <div>
            <form onSubmit={handleCommentSubmit} className="max-w-sm mb-5">
              <div className="mb-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Add your comment here:
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add text here"
                  required
                  name={"content"}
                  value={commentData.content}
                  onChange={handleCommentChange}
                />
              </div>
              <div className="flex items-start mb-5"></div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
              </button>
            </form>
            {comment?.map((comment: any, id: any) => (
              <div
                key={id}
                className="mb-3 font-normal text-gray-700 dark:text-white">
                {comment?.user_id && (
                  <p style={{ display: "inline" }}>
                    {" "}
                    @{comment.user_comments.username}{" "}
                  </p>
                )}

                <p style={{ display: "inline", fontSize: "0.6em" }}>
                  {new Date(comment.created_at).toLocaleString()}:
                </p>
                <div
                  style={{
                    border: "1px solid #706461",
                    borderRadius: "5px",
                    padding: "5px",
                  }}>
                  <p>{comment.content}. </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowIndividualPlayer;
