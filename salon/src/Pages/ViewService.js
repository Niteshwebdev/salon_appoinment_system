import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewServices() {
  axios.defaults.withCredentials = true;
  const [datas, setDatas] = useState([]);
  const [selectedSalonId, setSelectedSalonId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:5000/viewServices")
      .then((response) => response.data)
      .then((data) => {
        setDatas(data.data);
        setSelectedSalonId(data.data[0]?.salonId); // Select the first salon by default
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
      });
  }, []);

  console.log(datas);

  const handleChangeSalon = (e) => {
    setSelectedSalonId(e.target.value);
  };

  var formattedData = [];
  if (datas.length === 0) {
  } else {
    const selectedSalon = datas.find(
      (salon) => salon.salonId === selectedSalonId
    );
    if (selectedSalon) {
      formattedData = selectedSalon.services.map((service) => ({
        "Service ID": service._id,
        "Salon ID": service.salonId,
        Name: service.serviceName,
        Price: service.servicePrice,
        Details: service.serviceDetails,
        Image: (
          <img
            src={require(`../../../backend/images/servicePics/${service.servicePic}`)}
            alt="Sensor"
            style={{ width: "50px", height: "50px" }}
          />
        ),
        Actions: (
          <>
            <Link to={`/editServices`} state={service}>
              <button className="btn btn-primary"> Edit </button>
            </Link>
          </>
        ),
      }));
    }
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
            <div className="row mb-3">
              <div className="col-auto">
                <label htmlFor="salonSelect" className="form-label">
                  Select Salon:
                </label>
              </div>
              <div className="col-auto">
                <select
                  id="salonSelect"
                  className="form-select"
                  value={selectedSalonId}
                  onChange={handleChangeSalon}
                >
                  {datas.map((salon) => (
                    <option key={salon.salonId} value={salon.salonId}>
                      {salon.salonName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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

export default ViewServices;
