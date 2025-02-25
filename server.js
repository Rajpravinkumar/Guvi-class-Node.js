//import the app 

const app = require ('./app')
// listen for end point and start the server
app.listen(3000, () => {
  console.log(`Server is running @ http://127.0.0.1:3000`);
});
