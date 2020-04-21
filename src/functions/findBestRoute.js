import fetch from "node-fetch"
import get from "lodash/get"
import isEmpty from "lodash/isEmpty"

export default async (origin = '', destination = '') => {
  const url = 'https://maps.googleapis.com/maps/api/directions/json?'
  const params = new URLSearchParams({ origin, destination, key: process.env.GOOGLE_API_KEY })

  try {
    const response = await fetch(url + params);
    const json = await response.json();
    return json.routes
  } catch (error) {
    console.log(error);
  }
}