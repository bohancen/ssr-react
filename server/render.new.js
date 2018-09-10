const path = require('path')
const express = require('express')
const request = require('request')
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser')
// const csrf = require('csurf')

const config = {
  "main.css": "static/css/main.65027555.css",
  "main.css.map": "static/css/main.65027555.css.map",
  "main.js": "static/js/main.1e9188a0.js",
  "main.js.map": "static/js/main.1e9188a0.js.map"
}
const port = 8080
const server = express()
server.disable('x-powered-by')
server.use('/static',express.static(path.join(__dirname, '/static')))

server.get('/data',(req,res)=>{
  // res.json({data:'hellow'})
  res.send('<h1>--------------------<h1>')
})

const requestAsync = (options) => {
  return new Promise((resolve, reject) => {
    request['get'](options, (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
};

server.get('/*', async (req, res) => {
  let data = await requestAsync({url:'http://127.0.0.1:8080/data'})
  let html = `
    <!doctype html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <title>React App</title>
      <link href="/${config["main.css"]}" rel="stylesheet">
    </head>
    
    <body><noscript>You need to enable JavaScript to run this app.</noscript>
      <div>${data}</div>
      <div id="root">${data}</div>
      <script type="text/javascript" src="/${config["main.js"]}"></script>
    </body>
    
    </html>
  `
  res.send(html)
})
server.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})





const staticServer = (server)=>{
  server.use('/activity',express.static(path.join(__dirname, '/zt')))
}


const renderServer =(server,app)=>{
  server.get('/', (req, res) => {
    // let query = {...req.query,access_token}
    // return app.render(req, res, '/index', query)
    return app.render(req, res, '/index', req.params)
  })
  .get('/user(/:userid)?(/:tab)?', (req, res) => {
    return app.render(req, res, '/user', req.params)
  })
  .get('/people(/:userid)?(/:tab)?', (req, res) => {
    return app.render(req, res, '/people', req.params)
  })

  .get('/forum(/:forum_id)?(/:forum_tab)?', (req, res) => {
    // logger.info(req)
    return app.render(req, res, '/forum', req.params)
  })
  .get('/hottie(/:id)?(/:tab)?', (req, res) => {
    return app.render(req, res, '/hottie', req.params)
  })
  .get('/message/:tab', (req, res) => {
    return app.render(req, res, '/message', req.params)
  })
  .get('/list/:id', (req, res) => {
    return app.render(req, res, '/list', req.params)
  })
  .get('/tie/:id', (req, res) => {
    return app.render(req, res, '/tie', req.params)
  })
  .get('/post(/:post_id)?(/:page_num)?', (req, res) => {
    // const csrfToken = req.csrfToken()
    return app.render(req, res, '/post', {...req.params,host,userAgent:req.headers['user-agent']})
    // return app.render(req, res, '/post', {...req.params,host,csrfToken,userAgent:req.headers['user-agent']})
  })
  .get('/compose', (req, res) => {
    return app.render(req, res, '/compose', req.params)
  })
  .get('/search/:tab', (req, res) => {
    return app.render(req, res, '/search', req.params)
  })
  .get('/edit/:id', (req, res) => {
    return app.render(req, res, '/edit', req.params)
  })
  .get('/repair/:id', (req, res) => {
    return app.render(req, res, '/repair', req.params)
  })

  .get('*', (req, res) => {
    return handle(req, res)
  })
}








