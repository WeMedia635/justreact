import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/my-app-37986/databases/(default)/documents/User"
      );
      const data = await response.json();

      const formattedUsers =
        data.documents?.map((doc) => ({
          id: doc.name.split("/").pop(),
          name: doc.fields.Name?.stringValue || "",
          age: doc.fields.Age?.integerValue || "",
        })) || [];

      setUsers(formattedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="text-center p-4 border-2 border-gray-300 rounded-md shadow-md bg-white">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Name: {user.name}, Age: {user.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
