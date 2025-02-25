// use middleware
const logger = (request, response, next) => {
  console.log(`Request URL: ${request.url}`);
  console.log(`Request Method: ${request.method}`);
  console.log(`Request Headers: ${request.headers}`);
  console.log(`Request Query: ${request.query}`);
  console.log(`Request Params: ${request.params}`);
  console.log(`Request Body: ${request.body}`);
  console.log(`Request Cookies: ${request.cookies}`);
  console.log(`-------------------`);

  next();
};


module.exports = logger;