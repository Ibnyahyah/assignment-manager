import { useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar/sideBar";
import Navbar from "../components/navbar";

export function Assignments() {
  const navigate = useNavigate();
  return (
    <div className="d-flex main_container">
      <SideBar />
      <div className="main_body">
        <Navbar />
        <div className="assignment__container d-flex justify-content-center px-4">
          <div className="col-12">
            <h1 className="py-4">Assignments</h1>
            <h3 className="my-2">List</h3>
            <div className="sm-card m-auto w-100 mt-4">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Level</th>
                    <th scope="col">Contents</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                    <tr
                      onClick={() => navigate(`/assignments/${value}`)}
                      key={value}
                    >
                      <th>Concrete Mix Design</th>
                      <td>Materials and Construction</td>
                      <td>Intermediate</td>
                      <td>5 Contents</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
