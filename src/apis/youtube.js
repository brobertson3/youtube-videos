import axios from "axios";

const KEY = "AIzaSyB9ZBnW0UIqrE5JOsXocb_pZQFaKM8qhms";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
