import React, { useState } from "react";
import useUser from "../../../Hooks/useUser";
import Loader from "../../../Components/ui/Loader";
import { Link } from "react-router-dom";

const ManageUser = () => {
  const { data: users = [], isLoading, isError } = useUser();

  // Extract the users array from the API response
  const allUsers = users?.users || [];

  // State for search, filter, and sort
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Loader />;
  }

  // Filter users by search term and role
  const filteredUsers = allUsers
    .filter((user) => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRole = roleFilter ? user.role === roleFilter : true;
      return matchesSearch && matchesRole;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.created_date) - new Date(b.created_date);
      } else {
        return new Date(b.created_date) - new Date(a.created_date);
      }
    });

  return (
    <div className="overflow-x-auto p-4">
      <h1>
        <h1 className="text-4xl font-semibold mb-4">Manage Users</h1>
      </h1>

      <div className="mb-4 bg-honey p-4 rounded-lg flex justify-between items-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered w-1/4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter by role */}
        <select
          className="select text-black ring-0 select-bordered"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="shss_admin">Admin</option>
          <option value="shss_user">User</option>
        </select>

        {/* Sort by date */}
        <button
          className="btn btn-secondary"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort by Joining Date ({sortOrder === "asc" ? "Asc" : "Desc"})
        </button>
      </div>

      <div className="mb-4">
        <span className="text-lg font-semibold">
          Total Users : {filteredUsers.length}
        </span>
      </div>

      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created Date</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render Users */}
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      {/* Placeholder for user avatar if needed */}
                    </div>
                    <div>
                      <div className="font-bold">{user.name || "N/A"}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{new Date(user.created_date).toLocaleDateString()}</td>
                <td>
                  <div className="badge badge-secondary text-black font-semibold">
                    {user.role}
                  </div>
                </td>
                <td>
                  {/* Link to user orders */}
                  <Link to={`/admin-dashboard/user-orders/${user.id}`}>
                    <button className="btn mr-3 btn-primary text-white btn-xs">
                      View Orders
                    </button>
                  </Link>
                  {/* Link to edit user */}
                  <Link to={`/admin-dashboard/user-details/${user.id}`}>
                    <button className="btn btn-error text-white btn-xs">
                      Edit User
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
