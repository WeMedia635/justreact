import React, { useEffect, useState } from "react";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  // Auto-clear message after 3 seconds
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age) {
      setMessage("Both fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    const userData = {
      fields: {
        Name: { stringValue: name },
        Age: { integerValue: age },
      },
    };

    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/my-app-37986/databases/(default)/documents/User",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        setMessage("User added successfully!");
        setName("");
        setAge("");
      } else {
        const error = await response.json();
        setMessage("Error: " + (error.error?.message || "Failed to add user"));
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
   
  };
     

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddUserForm;
