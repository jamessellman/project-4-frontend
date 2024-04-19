import { SyntheticEvent, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "" 
  })

  function handleChange(e: any) {
    const fieldName = e.target.name
    // set the data in my formData to be what the user typed for this field.
    const newFormData = structuredClone(formData)
    // ! Use this square bracket syntax to dynamically get the key for the field we're updating
    // ! e.g. username, email, password, etc.
    newFormData[fieldName as keyof typeof formData] = e.target.value
    setFormData(newFormData)
  }

  // ! post the signup to the API.
  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault() // prevent the page from refreshing

    // ! We're going to use axios to post instead of fetch, just because its a bit nicer.
    const resp = await axios.post(`${baseUrl}/signup`, formData)
    console.log(resp.data) // ! resp.data always contains the data in an axios request.
    navigate("/login");
  }

  console.log(formData)
  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'username'}
              onChange={handleChange}
              value={formData.username}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'email'}
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'password'}
              onChange={handleChange}
              value={formData.password}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'passwordConfirmation'}
              onChange={handleChange}
              value={formData.passwordConfirmation}
            />
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}