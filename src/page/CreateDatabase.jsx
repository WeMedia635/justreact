import React, { useState } from "react";

const DynamicFirestoreForm = () => {
  const [fields, setFields] = useState([{ key: "", value: "" }]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFieldChange = (index, keyOrValue, newValue) => {
    const updatedFields = [...fields];
    updatedFields[index][keyOrValue] = newValue;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { key: "", value: "" }]);
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validFields = fields.filter(f => f.key && f.value);
    if (validFields.length === 0) {
      setMessage("Please add at least one valid field.");
      return;
    }

    const firestoreData = {
      fields: {}
    };

    validFields.forEach(({ key, value }) => {
      // Detect value type (string or number)
      const isNumber = !isNaN(value);
      firestoreData.fields[key] = isNumber
        ? { integerValue: value }
        : { stringValue: value };
    });

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/my-app-37986/databases/(default)/documents/User",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(firestoreData)
        }
      );

      if (response.ok) {
        setMessage("Document added successfully!");
        setFields([{ key: "", value: "" }]);
      } else {
        const error = await response.json();
        setMessage("Error: " + (error.error?.message || "Failed to add document"));
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Dynamic Firestore Document Creator</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Field Name"
              value={field.key}
              onChange={(e) => handleFieldChange(index, "key", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Field Value"
              value={field.value}
              onChange={(e) => handleFieldChange(index, "value", e.target.value)}
              required
            />
            {fields.length > 1 && (
              <button type="button" onClick={() => removeField(index)}>Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={addField}>Add Field</button>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DynamicFirestoreForm;
