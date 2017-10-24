const http = require('http');

const request = http.get('http://www.google.ca/', (response) => {
    let body = "";

    response.on('data', (chunk) => {
        body +=chunk;
    
});

response.on ('end', () => {
    if (response.statusCode === 200) {
        try {
            console.log(JSON.parse(body));
        } catch (e) {
            console.log ('Error!');
        }
    }
});
});