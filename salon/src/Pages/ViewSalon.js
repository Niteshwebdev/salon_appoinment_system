import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewSalon() {
  axios.defaults.withCredentials = true;
  const [datas, setDatas] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:5000/viewSalonOwner")
      .then((response) => response)
      .then((data) => setDatas(data.data))
      .then(() => setIsLoaded(true));
  }, []);

  console.log(datas);

  var formattedData = [];
  if (datas.length === 0) {
  } else {
    formattedData = datas.data?.map((data) => ({
      "Salon ID": data._id,
      "Owner ID": data.ownerId,
      Name: data.salonName,
      Email: data.salonEmail,
      Phone: data.salonPhone,
      Address: data.salonAddress,
      Image: (
        <img
          src={require(`../../../backend/images/salonPics/${data.salonPic}`)}
          alt="Sensor"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      Actions: (
        <>
          <Link to={`/addServices`} state={data}>
            <button className="btn btn-primary"> Add Services </button>
          </Link>
          &nbsp;
          <Link to={`/editSalon`} state={data}>
            <button className="btn btn-primary"> Edit </button>
          </Link>
        </>
      ),
    }));
  }
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>View Details</h4>
            </div>
          </div>
          <div className="card-body">
            <div className="card table-responsive">
              {isLoaded ? (
                <CDBDataTable
                  className="CDBDataTable"
                  striped
                  bordered
                  hover
                  entriesOptions={[5, 20, 25]}
                  entries={5}
                  pagesAmount={4}
                  data={{
                    columns: Object.keys(formattedData[0] || {}).map((key) => ({
                      label: key,
                      field: key,
                    })),
                    rows: formattedData,
                  }}
                />
              ) : (
                <h3>Please Wait...</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewSalon;
