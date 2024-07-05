function updateTime() {

let cityOneElement = document.querySelector("#city-one");
let cityOneDateElement = cityOneElement.querySelector(".date");
let cityOneTimeElement = cityOneElement.querySelector(".time");
let cityOneTime = moment().tz("America/Baton_Rouge");

cityOneDateElement.innerHTML = cityOneTime.format("MMMM Do YYYY");
cityOneTimeElement.innerHTML = cityOneTime.format("h:mm:ss [<small>]A[</small>]");


let cityTwoElement = document.querySelector("#city-two");
let cityTwoDateElement = cityTwoElement.querySelector(".date");
let cityTwoTimeElement = cityTwoElement.querySelector(".time");
let cityTwoTime = moment().tz("Europe/Paris");

cityTwoDateElement.innerHTML = cityTwoTime.format("MMMM Do YYYY");
cityTwoTimeElement.innerHTML = cityTwoTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}

updateTime();
setInterval(updateTime, 1000);