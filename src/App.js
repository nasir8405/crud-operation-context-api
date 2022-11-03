import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/User/Header";
import { ViewUser } from "./Components/User/ViewUser";
import StudentsPage from "./Pages/Users";
import { StudentsProvider } from "./Pages/Users/UsersProvider";

function App() {
  return (
    <div className="app">
      <StudentsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/user/:id" element={<ViewUser />} />
        </Routes>
      </StudentsProvider>
    </div>
  );
}

export default App;
