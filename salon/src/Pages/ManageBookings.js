import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

// Custom styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    flex: 1,
  },
});

function ManageBookings() {
  const [datas, setDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:5000/viewSalonBookings")
      .then((response) => response)
      .then((data) => setDatas(data.data))
      .then(() => setIsLoaded(true))
      .catch((error) => {
        setIsLoaded(true);
      });
  }, []);

  async function cancleBooking(id) {
    try {
      await axios.post("http://localhost:5000/cancleBookingOwner", {
        bookingId: id,
      });
      window.location.reload(false);
    } catch (error) {
      console.log(" Error: ", error);
    }
  }

  const generateBillPdf = (rowData) => {
    setSelectedRowData(rowData);
  };

  const generatePdfDocument = (rowData) => (
    (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.heading}>Booking Details</Text>
          <View style={styles.section}>
            <Text style={styles.label}>Booking ID: {rowData._id}</Text>
            <Text style={styles.label}>
              Service Name: {rowData.serviceName}
            </Text>
            <Text style={styles.label}>USER ID: {rowData.userId}</Text>
            <Text style={styles.label}>Salon Name: {rowData.salonName}</Text>
            <Text style={styles.label}>
              Service Charges: {rowData.serviceCharges}
            </Text>
            <Text style={styles.label}>
              Service Status: {rowData.serviceStatus}
            </Text>
            <Text style={styles.label}>
              Date & Time: {new Date(rowData.dateTime).toLocaleString("en-IN")}
            </Text>
          </View>
        </Page>
      </Document>
    )
  );

  var formattedData = [];
  if (datas.length === 0) {
  } else {
    formattedData = datas.data?.map((data) => ({
      "Booking ID": data._id,
      "Service Name": data.serviceName,
      "User ID": data.userId,
      "Salon Name": data.salonName,
      "Service Charges": data.serviceCharges,
      "Service Status": data.serviceStatus,
      "Date & Time": new Date(data.dateTime).toLocaleString("en-IN"),
      Cancel:
        data.serviceStatus === "Booked" ? (
          <Link onClick={() => cancleBooking(data._id)}>
            <button className="btn btn-primary">Cancel</button>
          </Link>
        ) : (
          <button className="btn btn-secondary" disabled>
            Cancelled
          </button>
        ),
      GenerateBill: (
        <button
          className="btn btn-primary"
          onClick={() => generateBillPdf(data)}
        >
          Bill
        </button>
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
              {/* {isLoaded ? (
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
              )} */}
              {isLoaded ? (
                <>
                  {selectedRowData && (
                    <PDFDownloadLink
                      document={generatePdfDocument(selectedRowData)}
                      fileName="booking_bill.pdf"
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? (
                          "Generating PDF..."
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button className="btn btn-primary">
                              Download PDF
                            </button>
                          </div>
                        )
                      }
                    </PDFDownloadLink>
                  )}
                  <CDBDataTable
                    className="CDBDataTable"
                    striped
                    bordered
                    responsive
                    hover
                    style={{ textAlign: "center" }}
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={{
                      columns: Object.keys(formattedData[0] || {}).map(
                        (key) => ({
                          label: key,
                          field: key,
                        })
                      ),
                      rows: formattedData,
                    }}
                  />
                </>
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

export default ManageBookings;
