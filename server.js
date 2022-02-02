const dotenv = require('dotenv'); //requires the dotenv library
const app = require('./app'); //requires the information in the app file

const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log(`Listening to PORT: ${PORT}` )
})
