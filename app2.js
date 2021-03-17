const http = require('http') //Pull in a useful node package

const hostname = process.env.hostname || '127.0.0.1' //get our ip address from the environment
const port = process.env.port || 3001 //and the port

const server =
  http.createServer( //Creates the response loop
    (req, res) => { //Anonymous function to handle the request
      res.statusCode = 200 //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table> <tr> <td> <th>Location</th> </td> <td> <th>Number of hours</th> </td> <td> <th>Amount of Money</th> </td> </tr> \n')
      res.write('<tr> <td>&nbsp;</td> <td>Guntur</td> <td>&nbsp;</td> <td>2Hrs</td> <td>&nbsp;</td> <td>100$</td> </tr> \n')
      res.write('<tr> <td>&nbsp;</td> <td>Hyderabad</td> <td>&nbsp;</td> <td>4Hrs</td> <td>&nbsp;</td> <td>200$</td> </tr> \n')
      res.write('<tr> <td>&nbsp;</td> <td>Delhi</td> <td>&nbsp;</td> <td>6Hrs</td> <td>&nbsp;</td> <td>300$</td> </tr>\n')
      res.write('<tr> <td>&nbsp;</td> <td>Mumbai</td> <td>&nbsp;</td> <td>8Hrs</td> <td>&nbsp;</td> <td>400$</td> </tr>\n')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }
  )

server.listen(port, hostname, () => { //Start the server
  console.log(`Server running at http://${hostname}:${port}/`) //Log the request
})