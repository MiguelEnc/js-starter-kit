let BASE_URL = "http://localhost:3000 ";

if (process.env.NODE_ENV === "development") {
  BASE_URL = "";
}

if (process.env.NODE_ENV === "producction") {
  BASE_URL = "";
}

export default BASE_URL;
