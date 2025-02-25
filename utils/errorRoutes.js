//middlewrae for handling 404 errors

const ErrorRoutes = (request, response, next) => {
  response.json({ message: "Route not found" });

  next();
};

module.exports = ErrorRoutes;