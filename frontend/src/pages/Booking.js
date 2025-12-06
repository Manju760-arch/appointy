import { useState, useEffect } from "react";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/appointment/booking")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB");
  };

  const filteredUsers = users.filter((u) =>
    formatDate(u.date).includes(searchTerm)
  );

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        width: "100vw",
        paddingTop: "20px",
      }}
    >
      {/* ✅ Changed container → container-fluid */}
      <div className="container-fluid mt-4">
        <h3>All Appointments</h3>

        <input
          type="text"
          placeholder="🔍 Search by Date (DD/MM/YYYY)..."
          className="form-control mb-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* ✅ Added w-100 to make table full width */}
        <table className="table table-bordered table-striped mt-3 w-100">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>DOB</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-danger fw-bold text-center">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((u) => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{new Date(u.dob).toLocaleDateString("en-GB")}</td>
                  <td>{u.doctor}</td>
                  <td>{formatDate(u.date)}</td>
                  <td>{u.time}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
