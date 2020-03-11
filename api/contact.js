
const http = require('http')

// Create Node server
const server = http.createServer( (req, res) => {

  // Only accept POST
  if (req.method === 'POST') {


    // Read POST body (form data)
    let body = ''
    req.on('data', data => { body += data })

    // Handle POST received
    req.on('end', () => {

      console.log(body)

      // Respond
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('success')
    })
  }
})

// LIsten for contact form submissions
server.listen(2222)
