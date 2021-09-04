import axios from "axios"

export async function get(url) {
  return axios(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return await response
    })
    .catch((err) => {
      console.log("err")
    })
}
