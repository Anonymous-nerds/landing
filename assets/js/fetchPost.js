import axios from "axios";

axios
  .get("https://blog-3-n5tb.onrender.com/articleList")
  .then((result) => {
    const fetchBlogs = result.data.map((blog) => {
      // Convert createdAt string to a Date object
      const createdAtDate = new Date(blog.createdAt);

      // Options for formatting the date
      const options = {
        weekday: "long", // Full name of the day of the week
        day: "2-digit", // Two-digit day of the month
        month: "long", // Full name of the month
        year: "numeric", // Full year
      };

      // Format the date using Intl.DateTimeFormat
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        createdAtDate
      );

      // Return the blog object with formatted createdAt
      return {
        ...blog,
        createdAt: formattedDate,
      };
    });
    // Reverse the order of blogs after formatting
    const getBlogs = fetchBlogs
      .filter((blog) => blog.userID === "665cdfb361a15916c78c09cf")
      .reverse();

    // Set the state with formatted and reversed blogs
    console.log(getBlogs);
  })
  .catch((err) => console.log(err));
