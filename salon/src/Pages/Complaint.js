import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Complaint() {
  const [datas, setDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:5000/viewComplaintOwner")
      .then((response) => response)
      .then((data) => setDatas(data.data))
      .then(() => setIsLoaded(true))
      .catch((error) => {
        alert("No Data Found!!");
        navigate("/");
        console.log(error);
        setIsLoaded(true);
      });
  }, []);

  const formattedData = datas.data?.map((data) => ({
    "Complaint ID": data._id,
    "Salon Name": data.salonName,
    "Service Name": data.serviceName,
    Details: data.complainDetails,
    "Date & Time": new Date(data.timestamp).toLocaleString("en-IN"),
  }));

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
                  responsive
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

export default Complaint;
