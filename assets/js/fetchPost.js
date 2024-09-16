fetch("https://blog-3-n5tb.onrender.com/articleList")
  .then(function (response) {
    // Convert the response to JSON
    return response.json();
  })
  .then(function (result) {
    // Map over the response data
    var fetchBlogs = result.map(function (blog) {
      // Convert createdAt string to a Date object
      var createdAtDate = new Date(blog.createdAt);

      // Options for formatting the date
      var options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      };

      // Format the date using Intl.DateTimeFormat
      var formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        createdAtDate
      );

      // Return the blog object with formatted createdAt
      return Object.assign({}, blog, { createdAt: formattedDate });
    });

    // Filter and reverse the blogs
    var getBlogs = fetchBlogs
      .filter(function (blog) {
        return blog.userID === "665cdfb361a15916c78c09cf";
      })
      .reverse();

    // Output the formatted and reversed blogs
    console.log(getBlogs);
  })
  .catch(function (err) {
    // Handle errors
    console.log(err);
  });
