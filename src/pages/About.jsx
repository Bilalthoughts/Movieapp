import React from "react";
import { useLocation } from "react-router-dom";

const About =()=>{
    const {liked} = useLocation();
    return (
        <div className="min-h-screen text-white  py-8">
          <div className=" container px-4 mx-auto">
            <h1 className="text-3xl font-bold mb-4">Project Overview:</h1>
            <p className="mb-6">
              This project is a movie app built using React, allowing users to search for movies and view the search results.
              It provides a simple and responsive user interface with a navigation bar, a search input, and a list of movie cards.
            </p>
            <h2 className="text-2xl font-bold mb-4">Note:</h2>
            <p className="mb-6">
              Please be aware that the RapidAPI used in this project is a free service, which may lead to occasional undesired results due to server limitations.
            </p>
            <h2 className="text-2xl font-bold mb-4">Project Dependencies:</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>React: The project is built using the React library for building user interfaces.</li>
              <li>React Router: It is used for handling navigation and routing within the app.</li>
              <li>Axios: This library is used to make API requests to the RapidAPI movie database and fetch movie data based on the search input.</li>
              <li>Tailwind CSS: Used for styling and layout, providing utility classes to style components efficiently.</li>
            </ul>
          </div>
        </div>
      );
}
export default About;