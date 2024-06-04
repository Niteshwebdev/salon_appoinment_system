import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Complaint() {
  const [datas, setDatas] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/viewComplaint")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .then(() => setIsLoaded(true));
  }, []);

  var formattedData = [];
  if (datas.length === 0) {
  } else {
    formattedData = datas.data?.map((data) => ({
      "Complaint ID": data._id,
      "User ID": data.userId,
      "Salon Id": data.salonId,
      "Service Id": data.serviceId,
      Details: data.complainDetails,
      "Date & Time": new Date(data.timestamp).toLocaleString("en-IN"),
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

export default Complaint;
