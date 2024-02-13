import React from "react";
import Topbar from "../../topbar/Topbar";
import "./manage_worker.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PageWorker() {
  return (
    <div className="topbar">
      <Topbar />
      <div className="page-worker-table container-fluid">
        <div className="content mx-auto">
          <table class="table table-bordered table-worker">
            <thead class="text-center">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
