import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function NewUser() {
  return (
    <>
      {/* <div id="global-loader">
        <div className="whirly-loader"> </div>
      </div> */}
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content">
            <div className="page-header">
              <div className="page-title">
                <h4>User Management</h4>
                <h6>Add/Update User</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-group">
                      <label>User Name</label>
                      <input type="text" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <div className="pass-group">
                        <input type="password" className=" pass-input" />
                        <span className="fas toggle-password fa-eye-slash" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Mobile</label>
                      <input type="text" />
                    </div>
                    <div className="form-group">
                      <label>Role</label>
                      <select className="select">
                        <option>Select</option>
                        <option>Role</option>
                        <option>Role1</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <div className="pass-group">
                        <input type="password" className=" pass-inputs" />
                        <span className="fas toggle-passworda fa-eye-slash" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-group">
                      <label> Profile Picture</label>
                      <div className="image-upload image-upload-new">
                        <input type="file" />
                        <div className="image-uploads">
                          <img src="assets/img/icons/upload.svg" alt="img" />
                          <h4>Drag and drop a file to upload</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <a href="/#" className="btn btn-submit me-2">
                      Submit
                    </a>
                    <a href="/#" className="btn btn-cancel">
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewUser;
