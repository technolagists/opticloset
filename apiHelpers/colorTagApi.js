var fs = require("fs");
var request = require("request");

var options = {
  method: 'POST',
  url: 'https://apicloud-colortag.p.rapidapi.com/tag-file.json',
  headers:
  {
    'Postman-Token': 'd8c2eaa9-dd75-4807-b796-d1911e7ea8b4',
    'cache-control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'f90e2a60damsh00f3575444e4362p13c5acjsn6a6363fc5a78',
    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
  },
  formData:
  {
    image:
    {
      value: 'fs.createReadStream("C:\\Users\\Julien de la Mettrie\\Documents\\dev\\images\\fullsizeoutput_1ab2.jpeg")',
      options:
      {
        filename: 'C:\\Users\\Julien de la Mettrie\\Documents\\dev\\images\\fullsizeoutput_1ab2.jpeg',
        contentType: null
      }
    },
    size: 'original'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
