import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ManageBooking() {
  const [datas, setDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/viewBookings")
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
        formatData(data);
      })
      .then(() => setIsLoaded(true));
  }, []);

  const formatData = (data) => {
    if (data.length !== 0) {
      const formattedData = data.data?.map((dataItem) => ({
        "Booking ID": dataItem._id,
        "Service Name": dataItem.serviceName,
        "User ID": dataItem.userId,
        "Salon Name": dataItem.salonName,
        Charges: dataItem.serviceCharges,
        Status: dataItem.serviceStatus,
        "Date & Time": new Date(dataItem.dateTime).toLocaleString("en-IN"),
        rawDateTime: new Date(dataItem.dateTime), // Add rawDateTime for filtering
      }));
      setFormattedData(formattedData);
    }
  };
  console.log(formattedData);

  const handleGeneratePDF = () => {
    let filteredData = datas.data || [];
    let totalAmount = 0; // Initialize total amount

    if (fromDate || toDate) {
      filteredData = filteredData.filter((row) => {
        const rowDate = new Date(row.dateTime);
        const rowDateOnly = new Date(
          rowDate.getFullYear(),
          rowDate.getMonth(),
          rowDate.getDate()
        );

        if (fromDate && toDate) {
          const fromDateObj = new Date(fromDate);
          const toDateObj = new Date(toDate);
          const fromDateOnly = new Date(
            fromDateObj.getFullYear(),
            fromDateObj.getMonth(),
            fromDateObj.getDate()
          );
          const toDateOnly = new Date(
            toDateObj.getFullYear(),
            toDateObj.getMonth(),
            toDateObj.getDate()
          );

          return rowDateOnly >= fromDateOnly && rowDateOnly <= toDateOnly;
        } else if (fromDate) {
          const fromDateObj = new Date(fromDate);
          const fromDateOnly = new Date(
            fromDateObj.getFullYear(),
            fromDateObj.getMonth(),
            fromDateObj.getDate()
          );
          return rowDateOnly >= fromDateOnly;
        } else if (toDate) {
          const toDateObj = new Date(toDate);
          const toDateOnly = new Date(
            toDateObj.getFullYear(),
            toDateObj.getMonth(),
            toDateObj.getDate()
          );
          return rowDateOnly <= toDateOnly;
        }

        return true; // Return true if no date range is selected
      });

      // Calculate total amount from filtered data
      totalAmount = filteredData.reduce(
        (total, row) => total + parseFloat(row.serviceCharges),
        0
      );
    }

    if (filteredData.length === 0 && (fromDate || toDate)) {
      alert("No data found for the selected date range");
      return;
    }

    // PDF generation logic
    const doc = new jsPDF();
    doc.autoTable({
      head: [
        [
          "Booking ID",
          "Service Name",
          "User ID",
          "Salon Name",
          "Charges",
          "Status",
          "Date & Time",
        ],
      ],
      body: filteredData.map((row) => [
        row._id,
        row.serviceName,
        row.userId,
        row.salonName,
        row.serviceCharges,
        row.serviceStatus,
        new Date(row.dateTime).toLocaleString("en-IN"),
      ]),
    });

    // Add total amount to the PDF
    if (totalAmount > 0) {
      doc.autoTable({
        body: [["Total Amount", "", "", "", totalAmount.toFixed(2), "", ""]],
        startY: doc.lastAutoTable.finalY + 10, // Start below the last table
      });
    }

    doc.save("booking_report.pdf");
  };

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
              <div className="row col-md-12 p-3">
                <div className="col-md-6">
                  <label htmlFor="fromDate">From Date:</label>
                  <input
                    className="form-control"
                    type="date"
                    id="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    max={toDate} // Set max attribute to toDate
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="toDate">To Date:</label>
                  <input
                    className="form-control"
                    type="date"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    min={fromDate} // Set min attribute to fromDate
                  />
                </div>
                <button
                  className="btn btn-primary mt-3 col-md-3"
                  onClick={handleGeneratePDF}
                >
                  Generate PDF
                </button>
              </div>
              {isLoaded ? (
                formattedData.length > 0 ? (
                  <CDBDataTable
                    className="CDBDataTable"
                    striped
                    bordered
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={{
                      columns: [
                        { label: "Booking ID", field: "Booking ID" },
                        { label: "Service Name", field: "Service Name" },
                        { label: "User ID", field: "User ID" },
                        { label: "Salon Name", field: "Salon Name" },
                        { label: "Charges", field: "Charges" },
                        { label: "Status", field: "Status" },
                        { label: "Date & Time", field: "Date & Time" },
                      ],
                      rows: formattedData,
                    }}
                  />
                ) : (
                  <h3>No data available</h3>
                )
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

export default ManageBooking;
