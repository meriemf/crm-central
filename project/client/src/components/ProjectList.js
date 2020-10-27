import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectItem from './ProjectItem';



const ProjectList = () => {

  //set default value of client to array
    
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/projects'),
      ]).then((all) => {
      setProjects(all[0].data);
    });
  }, []);

  const projects_list = projects.map((project) =>

    <ProjectItem
    key = {project.id}
    name = {project.name}
    number = {project.number}
    start_date = {project.start_date}
    end_date = {project.end_date}
    assigned_to = {project.assigned_to}
    type = {project.type}
    client_id = {project.client_id}
    payment_received = {project.payment_received}
    payment_date = {project.payment_date}
    />
  )


  return (
    <table className="table table-striped">

      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Project Name</th>
          <th scope="col">Number</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Assigned</th>
          <th scope="col">Type</th>
          <th scope="col">Client</th>
          <th scope="col">Payment Recevied</th>
          <th scope="col">Payment Date</th>
        </tr>
      </thead>
      
      <tbody>
        {projects_list}
      </tbody>
    </table>
  );

}


export default ProjectList;