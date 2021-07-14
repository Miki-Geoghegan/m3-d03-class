import { div } from 'prelude-ls';
import React from 'react'

const projects = [
    { _id: "127fae", name: "EatBCN", techStack: "Express, Node, React" },
    { _id: "985afw", name: "TravelLite", techStack: "React, Express, Redux" },
    { _id: "347eef", name: "IronClub", techStack: "Express, HBS, Mongo" },
    { _id: "90af21", name: "ChatApp", techStack: "React, Express, SocketIO" },
  ];

  function ProjectsList(){
      return(
        <div className="list">
        <h2>ProjectList</h2>
        {projects.map((project) => {
          return (
            <div key={project._id}>
              <h3>{project.name}</h3>
              <p>Tech Stack: {project.techStack}</p>
            </div> /* the div key is a JSX element. We have data from const projects (usually coming from an API) and we have to take this text and transform to jsx
            Use the .map() function to iterate through and provide a new JSX array */
          )
        })}
        </div>
      )
  }







  export default ProjectsList