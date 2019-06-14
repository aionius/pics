import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6b15d56f7b10dffb223e05db14678211690341933850aefefceff54b35257fc3"
  }
});
