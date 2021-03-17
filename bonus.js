const http = require('http')    
                                
const hostname = process.env.hostname || '127.0.0.1'    
const port = process.env.port || 3001               

const server =
  http.createServer(            
    (req,res)=> {               

        var ArrayStrings = ["Pens","parker","bick","Sheefer","mountblanc","hero"];
var minimum = 0;

var maximum = Array.length;
var varHolder=Math.floor(Math.random()*( maximum-minimum)+minimum)
      res.statusCode = 200      
      res.setHeader('Content-Type', 'text/html') 
      res.write('<html> <head> <title> Bonus page </title> </head>')
      res.write('<body>')
      res.write(`<p>${ArrayStrings[varHolder]}</p>`)
      res.end('</body></html>') 
    }                           
)
server.listen(port, hostname, () => {   
  console.log(`Server running at http://${hostname}:${port}/`)  
})