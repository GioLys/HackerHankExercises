"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function timeConversion(s) {
  let hourconvert = "";
  let hour = s.substring(0, 2) * 1;
  let hourformat = s.substring(2, 8);

  //se a hora for meia noite
  if (hour === 12 && s.indexOf("AM") !== -1) {
    return (hourconvert = "00" + hourformat);
  }

  //se a hora for meio dia
  if (hour === 12 && s.indexOf("PM") !== -1) {
    return (hourconvert = hour.toString() + hourformat);
  }

  //se a hora estiver entre 1pm e 11pm
  if (hour < 12 && s.indexOf("PM") !== -1) {
    return (hourconvert = (hour + 12).toString() + hourformat);
  }

  //se a hora estiver entre 1am e 11am
  if (hour < 10 && s.indexOf("AM") !== -1) {
    return (hourconvert = "0" + hour.toString() + hourformat);
  } else {
    return (hourconvert = hour.toString() + hourformat);
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
