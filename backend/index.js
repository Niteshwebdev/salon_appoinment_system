const connectDB = require("./db/dbConnect");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const session = require("express-session");
const { SignUpApi } = require("./api/registerApi");
const { LoginApi } = require("./api/loginApi");
const Session = require("./api/session");
const Logout = require("./api/logout");
const { AddSalon } = require("./api/owner/addSalon");
const { salonPicUpload, servicePicUpload } = require("./multer/multerUpload");
const { AddBeautician } = require("./api/owner/addBeautician");
const { AddService } = require("./api/owner/addServices");
const { ManageBookings } = require("./api/user/bookSalon");
const { ViewusersData } = require("./api/admin/viewUser");
const { ViewBookings } = require("./api/admin/viewBookings");
const { AddFeedback } = require("./api/user/addFeedback");
const { AddComplaints } = require("./api/user/addComplaints");
const { ViewFeedback } = require("./api/admin/viewFeedback");
const { ViewComplaints } = require("./api/admin/viewComplaint");
const { ViewsalonBookings } = require("./api/owner/viewSalonBookings");
const { ViewSalon } = require("./api/user/viewSalon");
const { ViewPaymentsData } = require("./api/owner/viewPayments");
const { CancelBookingUser } = require("./api/user/cancleBookingUser");
const { CancelBookingOwner } = require("./api/owner/cancleBookingOwner");
const { GetCounts } = require("./api/admin/getCounts");
const { ViewComplaintsOwner } = require("./api/owner/viewComplaintOwner");
const { ViewFeedbackOwner } = require("./api/owner/viewFeedbackOwner");
const { ViewSalonOwner } = require("./api/owner/viewSalonsowner");
const { ViewServicesData } = require("./api/owner/viewServices");
const { GetCountsOwner } = require("./api/owner/getCountsOwner");
const { EditSalon } = require("./api/owner/editSalon");
const { EditService } = require("./api/owner/editService");
const { ViewServices } = require("./api/user/viewServices");
const { ViewUserBookings } = require("./api/user/bookingHistory");
const { ParlorSignupapi } = require("./api/parlorsignupapi");
const { Updatepasswordapi } = require("./api/updatepassword");


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);









app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/updatepassword", Updatepasswordapi)
app.post("/register", SignUpApi);
// app.post("/beautyparlor", ParlorSignupapi);

app.post("/login", LoginApi);
app.get("/logout", Logout);
app.post("/session", Session);

//admin
app.get("/viewUsers", ViewusersData);
app.get("/viewBookings", ViewBookings);
app.get("/viewFeedback", ViewFeedback);
app.get("/viewComplaint", ViewComplaints);
app.get("/viewCounts", GetCounts);

//owner
app.post("/addSalon", salonPicUpload.single("salonPic"), AddSalon);
app.post("/addService", servicePicUpload.single("servicePic"), AddService);
app.post("/addBeautician", AddBeautician);
app.post("/viewSalonBookings", ViewsalonBookings);
app.post("/viewPayments", ViewPaymentsData);
app.post("/cancleBookingOwner", CancelBookingOwner);
app.post("/viewComplaintOwner", ViewComplaintsOwner);
app.post("/viewFeedbackOwner", ViewFeedbackOwner);
app.post("/viewSalonOwner", ViewSalonOwner);
app.post("/viewServices", ViewServicesData);
app.get("/viewCountsOwner", GetCountsOwner);
app.post("/editSalon", salonPicUpload.single("salonPic"), EditSalon);
app.post("/editService", servicePicUpload.single("servicePic"), EditService);

//USER

app.post("/bookSalon", ManageBookings);
app.post("/addFeedback", AddFeedback);
app.post("/addComplaint", AddComplaints);
app.post("/cancleBookingUser", CancelBookingUser);
app.get("/viewSalon", ViewSalon);
app.post("/viewServicesuser", ViewServices);
app.post("/viewUserBookings", ViewUserBookings);






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
