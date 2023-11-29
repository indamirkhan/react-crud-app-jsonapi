import { useEffect, useState } from "react";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:4000/users");
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <h1 className="">UserList</h1>
      <div className="container"></div>
      <div className="row">
        <div className="col-8 justify-center">
          <div className="card">
            <div className="card-body">
              <table className="table table-striped table-dark table-border table-hover">
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
                          <a href="" className="btn btn-primary">
                            Edit
                          </a>
                          <a href="" className="btn btn-danger ms-1">
                            Delete
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
