import React from 'react';
import './buttons.css';

const DeleteButton = () => {
  return (
    <button id="delete_bike" className="btn btn-danger">Delete</button>
  );
}

const EditButton = () => {
  return (
    <button id="edit_bike" className="btn btn-secondary">Edit</button>
  );
}

const ServiceButton = () => {
  return (
    <button id="service_bike" className="btn btn-dark service_bike">Request Service</button>
  )
}

export {DeleteButton, EditButton, ServiceButton};
