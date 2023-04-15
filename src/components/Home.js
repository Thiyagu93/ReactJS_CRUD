import React, { Fragment } from "react";
import Employe from "./Employee.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    var index = Employe.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employe.splice(index, 1);

    history("/");
  };
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <h1>ReactJS CRUD</h1>

        <Table m bordered hover size="sm">
          <thead>
            <tr class="table-danger">
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody class="table-group-divider">
            {Employe && Employe.length > 0
              ? Employe.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            onClick={() =>
                              handleEdit(item.id, item.Name, item.Age)
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data"}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
