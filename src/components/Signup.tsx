import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const resp = await axios.post(`${baseUrl}/signup`, formData);
    console.log(resp.data);
    navigate("/login");
  }

  console.log(formData);
  return (
    <div className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-8 text-center mt-8">Sign Up</h2>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="field mb-5">
            <label className="label block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Username
            </label>
            <div className="control">
              <input
                className="input shadow-sm bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="username"
                type="text"
                name={"username"}
                onChange={handleChange}
                value={formData.username}
              />
            </div>
          </div>
          <div className="field mb-5">
            <label className="label block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Email
            </label>
            <div className="control">
              <input
                className="input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@name.com"
                type="text"
                name={"email"}
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="field mb-5">
            <label className="label block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Password
            </label>
            <div className="control">
              <input
                className="input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="password"
                type="password"
                name={"password"}
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>
          <div className="field mb-5">
            <label className="label block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Confirm password
            </label>
            <div className="control">
              <input
                className="input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="confirm password"
                type="password"
                name={"passwordConfirmation"}
                onChange={handleChange}
                value={formData.passwordConfirmation}
              />
            </div>
          </div>
          <button className="button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
