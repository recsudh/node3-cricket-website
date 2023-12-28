// const { response } = require("express");

console.log("can write client side javascript");

// fetch("https://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const values = document.querySelector("form");
const search = document.querySelector("input");
const message_1 = document.querySelector("#message-one");
const message_2 = document.querySelector("#message-two");

values.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(search.value);
  message_1.textContent = "Loading...";
  message_2.textContent = ".. ";

  url = `https://api.cricapi.com/v1/series?apikey=f706f25b-3617-427e-8df2-11b686301988&offset=0&search=${search.value}`;
  console.log(url);
  fetch(url).then((response) => {
  
    response.json().then((data) => {
      console.log(`${data.data[0].name} starts from ${data.data[0].startDate} and ends in ${data.data[0].endDate}. it has ${data.data[0].odi} odi , ${data.data[0].t20} t20 and ${data.data[0].test} test matches!🏏`);
      for(let i=0;i<5;i++){
        message_1.textContent=`${data.data[i].name} starts from ${data.data[i].startDate} and ends in ${data.data[i].endDate}. it has ${data.data[i].odi} odi , ${data.data[i].t20} t20 and ${data.data[i].test} test matches!🏏`;
        message_2.textContent='';
      }
     
    });
  });
});
