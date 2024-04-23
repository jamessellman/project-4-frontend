import { SyntheticEvent, useState } from "react";
import axios from "axios";
// ! This will navigate the page when the user logs in
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

export default function Login({ fetchUser }: { fetchUser: Function }) {
  // ! navigate is a function to call to take the user to another page.
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: any) {
    setErrorMessage("");
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  console.log(formData);

  async function handleSubmit(e: SyntheticEvent) {
  try {
e.preventDefault(); 
    const resp = await axios.post(`${baseUrl}/login`, formData);
    localStorage.setItem("token", resp.data.token);
    console.log(resp.data);
     fetchUser();
    navigate("/");
  } catch (e:any) {
     console.log("there has been an error!", e.response.data.message);
      setErrorMessage(e.response.data.message);
  }
    
  }

  return (
    <div className="section ">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-8 text-center mt-8">Log In</h2>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="field mb-5">
            <label className="label mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Email
            </label>
            <div
              className="control ">
              <input
                className="input bg-transparent bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="text"
                name={"email"}
                onChange={handleChange}
                value={formData.email}
                placeholder="email"
              />
            </div>
          </div>
          <div className="field mb-5">
            <label className="label mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Password
            </label>
            <div
              className="control bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <input
                className="input bg-transparent"
                type="password"
                name={"password"}
                onChange={handleChange}
                value={formData.password}
                placeholder="password"
              />
            </div>
          </div>
          <div className="flex items-start mb-5">
            <button
              type="submit"
              className="button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </form>
      </div>
      <footer className=" fixed bottom-0 left-0 w-full bg-white shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024.{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              
            </a>
            All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
