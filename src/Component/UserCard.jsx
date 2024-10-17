import React from "react";

const UserCard = ({ user }) => {
  // Accessing properties directly from the user object
  const { FirstName, LastName, photourl, gender } = user;

  return (
    <div className="card card-compact bg-base-300 w-64 shadow-xl flex items-center m-4">
      <figure className="my-4">
        {photourl && <img src={photourl} alt="User Photo" />}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{FirstName + " " + LastName}</h2>
        {gender && <p>{gender}</p>}
        <div className="card-actions">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
