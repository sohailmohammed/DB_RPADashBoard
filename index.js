var http = require("http");
var express = require("express");
var app = express();
var port = 3000;
var sql = require("mssql");
 
var config = {
server:"DESKTOP-NNJRLL2\\SQLEXPRESS", 
database:"STC_Datatables",
options: {
enableArithAbort:false,
encrypt:false,
  },
pool: {
max:10,
min:0,
idleTimeoutMillis:60000,
  },
user:"Zyclyx",
password:"test123",
port:1433,
};
var dbConfig = {
driver:"msnodesqlv8",
 
connectionString:
"Driver={SQL Server Native Client 11.0};Server={DESKTOP-NNJRLL2SQLEXPRESS};Database={STC_Datatables};Trusted_Connection={yes};",
};
sql.connect(config, function (err) {
if (err) {
console.log(err);
  } else {
console.log("connected");
  }
});
 
app.listen(port, function () {
console.log("server is running" + port);
});