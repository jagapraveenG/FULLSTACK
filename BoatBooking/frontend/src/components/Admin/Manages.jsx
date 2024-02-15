// ManageTeam.js

import React from 'react';
import './ManagesTeam.css'; // Import the CSS file for styling

const ManageTeam = () => {
  // Dummy data for team members
  const teamMembers = [
    { id: 1, name: 'John Doe', position: 'Developer', entryDetails: 'Joined on Jan 1, 2023', otherDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi vel odio venenatis pulvinar.' },
    { id: 2, name: 'Jane Smith', position: 'Designer', entryDetails: 'Joined on Feb 15, 2023', otherDetails: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { id: 3, name: 'Alice Johnson', position: 'Manager', entryDetails: 'Joined on Mar 20, 2023', otherDetails: 'Integer sed ipsum vel purus placerat facilisis. Ut ultricies ex a neque vehicula, eget tempor mi pretium.' }
  ];

  return (
    <div>
      <h1>Manage Team</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" />

        <button type="submit">Add Team Member</button>
      </form>

      <h2>Current Team Members</h2>
      <div className="team-members">
        {teamMembers.map(member => (
          <div className="team-member" key={member.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">Position: {member.position}</p>
                <p className="card-text">Entry Details: {member.entryDetails}</p>
                <p className="card-text">Other Details: {member.otherDetails}</p>
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTeam;
