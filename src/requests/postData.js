import axios from "axios";

const postData = (fields) => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing/", fields)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postData;
