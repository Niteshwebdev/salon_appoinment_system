import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { CDBDataTable } from "cdbreact";
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

function BookingHistory() {
  const [datas, setDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:5000/viewUserBookings")
      .then((response) => response)
      .then((data) => setDatas(data.data))
      .then(() => setIsLoaded(true))
      .catch((error) => {
        setIsLoaded(true);
      });
  }, []);

  async function cancelBooking(id) {
    try {
      await axios.post("http://localhost:5000/cancelBookingUser", {
        bookingId: id,
      });
      window.location.reload(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const generateBillPdf = (rowData) => {
    setSelectedRowData(rowData);
  };

  const generatePdfDocument = (rowData) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>Booking Details</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Salon ID: {rowData.salonId}</Text>
          <Text style={styles.label}>Salon Name: {rowData.salonName}</Text>

          <Text style={styles.label}>Service Name: {rowData.serviceName}</Text>
          <Text style={styles.label}>
            Service Charges: {rowData.serviceCharges}
          </Text>
          <Text style={styles.label}>
            Service Status: {rowData.serviceStatus}
          </Text>
          <Text style={styles.label}>Salon Name: {rowData.salonName}</Text>
          <Text style={styles.label}>
            Date & Time: {new Date(rowData.dateTime).toLocaleString("en-IN")}
          </Text>
        </View>
      </Page>
    </Document>
  );

  let count = 0;
  const formattedData = datas.data?.map((data) => {
    count++;
    return {
      "Booking ID": count,
      "Service Name": data.serviceName,
      "Salon Name": data.salonName,
      Charges: data.serviceCharges,
      "Date & Time": new Date(data.dateTime).toLocaleString("en-IN"),
      Cancel:
        data.serviceStatus === "Booked" ? (
          <Link onClick={() => cancelBooking(data._id)}>
            <button className="btn btn-primary">Cancel</button>
          </Link>
        ) : (
          <button className="btn btn-secondary" disabled>
            Cancelled
          </button>
        ),
      Feedback: (
        <Link to={`/giveFeedback`} state={data}>
          <button className="btn btn-primary">Feedback </button>
        </Link>
      ),
      Complain: (
        <Link to={`/addComplain`} state={data}>
          <button className="btn btn-primary">Complain </button>
        </Link>
      ),
      GenerateBill: (
        <button
          className="btn btn-primary"
          onClick={() => generateBillPdf(data)}
        >
          Bill
        </button>
      ),
    };
  });

  return (
    <>
      <div id="wrapper" className="dark-scheme">
        <Header />

        <div className="no-bottom no-top" id="content">
          <section id="subheader" className="jarallax">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>Booking History</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          <div className="page-wrapper">
            <div className="content">
              <div className="page-header">
                <div className="page-title"></div>
              </div>

              <div className="card-body">
                <div className="card table-responsive">
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
                          columns: [
                            { label: "Booking ID", field: "Booking ID" },
                            { label: "Service Name", field: "Service Name" },
                            { label: "Salon Name", field: "Salon Name" },
                            { label: "Charges", field: "Charges" },
                            { label: "Date & Time", field: "Date & Time" },
                            { label: "Cancel", field: "Cancel" },
                            { label: "Feedback", field: "Feedback" },
                            { label: "Complain", field: "Complain" },
                            { label: "GenerateBill", field: "GenerateBill" },
                          ],
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
        </div>
      </div>
    </>
  );
}

export default BookingHistory;
