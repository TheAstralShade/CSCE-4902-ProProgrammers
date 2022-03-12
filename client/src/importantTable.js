import React, { useState, Fragment } from "react";
import "./ImportantEntries.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./component/ReadOnlyRow";
import EditableRow from "./component/EditableRow";

const Table = () => {
  const [entries, setEntrys] = useState(data);

  const [editFormData, setEditFormData] = useState({
    entry: "",
    quantity: "",
    comment: "",
  });

  const [editEntryId, setEditEntryId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedEntry = {
      id: editEntryId,
      entry: editFormData.entry,
      quantity: editFormData.quantity,
      comment: editFormData.comment,
    };

    const newEntrys = [...entries];

    const index = entries.findIndex((impEntry) => impEntry.id === editEntryId);

    newEntrys[index] = editedEntry;

    setEntrys(newEntrys);
    setEditEntryId(null);
  };

  const handleEditClick = (event, impEntry) => {
    event.preventDefault();
    setEditEntryId(impEntry.id);

    const formValues = {
      entry: impEntry.entry,
      quantity: impEntry.quantity,
      comment: impEntry.comment,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditEntryId(null);
  };

  const handleDeleteClick = (entryId) => {
    const newEntrys = [...entries];

    const index = entries.findIndex((impEntry) => impEntry.id === entryId);

    newEntrys.splice(index, 1);

    setEntrys(newEntrys);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Entry</th>
              <th>Quantity</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((impEntry) => (
              <Fragment>
                {editEntryId === impEntry.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    impEntry={impEntry}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;