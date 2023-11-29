import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import CreateUser from "./components/Users/CreateUser";
import EditUser from "./components/Users/EditUser";
import UserList from "./components/Users/UserList";
function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
