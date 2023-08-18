const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017', {dbName: 'Authentication'})
    .then(() => {
    console.log('Monogdb connected..')
})
.catch((err) => console.log(err.message))
