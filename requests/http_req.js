const https = require('https');


const ApiReq = (ApiUrl) => {
    https.get(ApiUrl, res => {
        let data = [];

        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.statusCode);
        console.log('Date in Response header:', headerDate);
      
        res.on('data', chunk => {
          data.push(chunk);
        });
      
        res.on('end', () => {
            console.log('Response ended: ');
            const completeData =  JSON.parse(Buffer.concat(data).toString());
            return completeData;
                         
        });
      }).on('error', err => {
          console.log('Error: ', err.message);
        });

}


module.exports = ApiReq;