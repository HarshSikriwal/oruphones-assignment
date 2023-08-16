"use client";

import UserSchema from "@/models/userModel";
import { useState } from "react";
function SignUp() {
  const [hidden, setHidden] = useState(true);
  const [userInfo, setUserInfo] = useState<UserSchema>({
    email: "",
    name: "",
    password: "",
    phone_number: undefined,
    about: "",
    skills: [],
    certifications: undefined,
    experience: undefined,
    education: [],
  });
  const {
    name,
    email,
    password,
    phone_number,
    about,
    skills,
    certifications,
    experience,
    education,
  } = userInfo;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("api/auth/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    setHidden(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  return (
    <div className="flex">
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="What can we call you?"
            value={name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Mail please!"
            value={email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />

          <button type="submit">Next</button>
        </form>
      </div>
      {!hidden && (
        <div>
          <form className="flex flex-col">
            <label htmlFor="phone_number">Mobile No.</label>
            <input
              type="number"
              id="phone_number"
              placeholder="Your Mobile No."
              value={phone_number}
              onChange={handleChange}
            />

            <label htmlFor="about">About</label>
            <input
              type="text"
              id="about"
              placeholder="Tell me about yourself!"
              value={about}
              required
              maxLength={200}
              onChange={handleChange}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp;
