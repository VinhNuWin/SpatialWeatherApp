export const GetDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = days[d.getDay()];

  let month = months[d.getMonth()];

  let hours = d.getHours();
  let minutes = d.getMinutes();

  return (
    <div className="date">
      <h2>{day}</h2>
      <h1>
        {hours}:{minutes}
      </h1>
    </div>
  );
};
