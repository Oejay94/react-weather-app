export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_CITIES_API}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
