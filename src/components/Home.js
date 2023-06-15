import React, { useState } from "react";
import "./App.css";

function Home({ loggedIn, handleLogout }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [priority, setPriority] = useState("low");
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() === "") {
      return;
    }

    let priorityColor = "";
    if (priority === "high") {
      priorityColor = "red";
    } else if (priority === "medium") {
      priorityColor = "orange";
    } else if (priority === "low") {
      priorityColor = "green";
    }

    setItems((prevItems) => [
      ...prevItems,
      { text: newItem, priority: priority, priorityColor: priorityColor }
    ]);

    setNewItem("");
    setPriority("low");
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditedText(items[index].text);
  };

  const handleSaveItem = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, text: editedText } : item
      )
    );
    setEditIndex(null);
    setEditedText("");
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditedText("");
  };

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2 className="h2">To-Do List</h2>
          <div className="add-form">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter item..."
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button className="btn btn-primary" onClick={handleAddItem}>Add</button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <ul className="item-list">
            {filteredItems.map((item, index) => (
              <li
                key={index}
                style={{ backgroundColor: item.priorityColor }}
                className={`list-item priority-${item.priority}`}
              >
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={() => handleSaveItem(index)}>Save</button>
                    <button className="btn btn-primary" onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    {item.text}
                    <div className="item-actions">
                      <button className="btn btn-primary" onClick={() => handleEditItem(index)}>
                        Edit
                      </button>
                      <button className="btn btn-primary" onClick={() => handleDeleteItem(index)}>
                        Delete
                      </button>
                    </div>
                    <span className="item-priority">
                      Priority: {item.priority}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please login or register.</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
