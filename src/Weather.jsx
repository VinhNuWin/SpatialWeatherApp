import { useEffect, useState } from "react";
import { GetWeather } from "./GetWeather";

navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

function positionSuccess({ coords }) {
  // GetWeather(
  //   coords.latitude,
  //   coords.longitude,
  //   Intl.DateTimeFormat().resolvedOptions().timeZone
  // );
  console.log(coords).catch((e) => {
    console.error(e);
    alert("Error getting weather.");
  });
}

function positionError() {
  alert(
    "There was an error getting your location. Please allow us to use your location and refresh the page."
  );
}
