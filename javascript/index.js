function updateTime() {
  let cityOneElement = document.querySelector("#city-one");
  if (cityOneElement) {
    let cityOneDateElement = cityOneElement.querySelector(".date");
    let cityOneTimeElement = cityOneElement.querySelector(".time");
    let cityOneTime = moment().tz("America/Baton_Rouge");

    cityOneDateElement.innerHTML = cityOneTime.format("MMMM Do YYYY");
    cityOneTimeElement.innerHTML = cityOneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    let cityTwoElement = document.querySelector("#city-two");
    if (cityTwoElement) {
      let cityTwoDateElement = cityTwoElement.querySelector(".date");
      let cityTwoTimeElement = cityTwoElement.querySelector(".time");
      let cityTwoTime = moment().tz("Europe/Paris");

      cityTwoDateElement.innerHTML = cityTwoTime.format("MMMM Do YYYY");
      cityTwoTimeElement.innerHTML = cityTwoTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_"," ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}<small></div>
        <a href="/"> All cities</a>`;

}


updateTime();
setInterval(updateTime, 1000);



let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);