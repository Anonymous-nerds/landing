// Fetch medthod 
fetch("https://blog-3-n5tb.onrender.com/articleList")
  .then(function (response) {
    // Convert the response to JSON
    return response.json();
  })
  .then(function (result) {
    // Map over the response data
    var fetchBlogs = result.map(function (blog) {});
    // Filter and reverse the blogs
    var getBlogs = fetchBlogs
      .filter(function (blog) {
        return blog.userID === "665cdfb361a15916c78c09cf";
      })
      .reverse();

    // Output the formatted and reversed blogs
    console.log(`Blog Data : ${getBlogs}`);
  })
  // comment here
  .catch(function (err) {
    // Handle errors
    console.log(err);
  });
