//request handlers

var querystring = require("querystring"),
  fs = require("fs"),
  calc = require("./calc");

function start(response){
  console.log("Request handler 'start' was called");

  var body = '<html>' +
    '<head>'+
    '<meta http-equiv-"Content-Type" content="text/html;' +
    'charset=UTF -8"/>' +
    '</head>' +
    '<body style="background-color:powderblue;">' +
    '<form action="/garble" method="post">'+
    'Say something! <textarea name = "text" rows="2" cols = "30"></textarea>' +
    '<input type="submit" value = "Enter text"/> ' +
    '</form>' +
    '</body>' +
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function garble(response, postData) {
  console.log("Request handler 'garble' was called");
  var tempString = querystring.parse(postData).text + '\r\n'

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('<body style = "background-color:powderblue;"></body>')
  response.write("You've sent: " + tempString + '<br/>');
  response.write("Attempting to gibberize and post..." + '\r\n');
  var garbledString = calc.garble(tempString);
  response.write("Successfully Garbled" + '<br/>' + garbledString);

  fs.appendFile("./tmp/test.txt", (garbledString + '\r\n'), function(err) {
    if (err) {
      throw err;
    } else{
      console.log('worked!')
    }
  });
  response.end();



}

function guestbook(response) {
  console.log("Request handler 'guestbook' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("The Garbler Guestbook" + '\r\n' + '\r\n');
  fs.createReadStream("./tmp/test.txt").pipe(response);
}

exports.start = start;
exports.garble = garble;
exports.guestbook = guestbook;
