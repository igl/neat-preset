const next = require('next')
const port = parseInt(process.env.HTTP_PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

// Parameterized Routing with next-route
const routes = require('next-routes')()

routes.add('blog/entry', '/blog/:id')

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
    require('http').createServer(handler)
        .listen(port, (err) => {
            if (err) throw err
            // eslint-disable-next-line no-console
            console.log(`> Ready on http://localhost:${ port }`)
        })
})
