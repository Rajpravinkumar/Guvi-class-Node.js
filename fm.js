// import fs module

const fs = require('fs');


// write 'welcome' to the file 'welcome.txt'
/* fs.writeFile('./welcome.txt', 'welcome', (err) => {
    if (err) throw err;
    console.log('The file has been saved');
}) */

// read the file 'welcome.txt'
    
/* fs.readFile('./welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.split("\n"))
})  */

    // append 'Hello World! to file 'welcome.txt'
/* fs.appendFile('./welcome.txt', '\nHello World!', (err) => {
    if (err) throw err;
    console.log('The file has been saved ')
})
     */

// delete the file 'welcome.txt

fs.unlink('./welcome.txt', (err) => {
    if (err) throw err;
    console.log('The file has been deleted')
})