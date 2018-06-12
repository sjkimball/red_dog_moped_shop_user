import React from 'react';
import './buttons.css';

export const DeleteButton = () => {
  return (
    <button className="btn btn-danger">
      <a href="#" className="delete_bike">Delete</a>
    </button>
  );
}

export const EditButton = () => {
  return (
    <button className="btn btn-secondary">
      <a href="#" className="edit_bike">Edit</a>
    </button>
  );
}
