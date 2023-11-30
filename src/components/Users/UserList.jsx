import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:4000/users");
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure")) {
      await fetch("http://localhost:4000/users/" + id, {
        method: "DELETE",
      });

      const newUsers = users.filter((user) => user.id != id);
      setUsers(newUsers);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="alert alert-primary" role="alert">
          <h1 className="">UserList</h1>
        </div>
        <div className="row">
          <div className="col-8 mx-auto ">
            <table className="table table-sm table-striped table-dark table-hover text-center">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>
                        <Link
                          to={`/user/edit/${user.id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </Link>
                        <Link
                          onClick={() => deleteUser(user.id)}
                          className="btn btn-sm btn-danger ms-1"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
