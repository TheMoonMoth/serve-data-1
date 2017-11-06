const express = require("express");
const cors = require("cors");

var cohorts = [{
  id: 1,
  cohortName: "17-01-WD-DP",
  cohortCode:"g100",
  numOfStudents: 28
},{
  id: 2,
  cohortName: "17-01-DS-GT",
  cohortCode: "g105",
  numOfStudents: 24
},{
  id: 3,
  cohortName: "17-02-WD-PX",
  cohortCode: "g109",
  numOfStudents: 30
},{
  id: 4,
  cohortName: "17-03-WD-BD",
  cohortCode: "g110",
  numOfStudents: 29
}];

function findById(array, idNumb) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id == idNumb) {
      return array[i];
    }
  }
}

const app = express();
app.use(cors());

app.get("/", function (request, response) {
  response.json(cohorts);
});

app.get("/:aNumber", function (request, response) {
  var cohortInfo = findById(cohorts, request.params.aNumber);
  if (!cohortInfo) {
    response.status(404);
    response.json({error: {message:"There's no cohort with that id."}});
  }
  response.json(cohortInfo);
});

app.listen(3000);
