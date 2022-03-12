import React from "react";

const ReadOnlyRow = ({ impEntry, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{impEntry.entry}</td>
      <td>{impEntry.quantity}</td>
      <td>{impEntry.comment}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, impEntry)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(impEntry.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;