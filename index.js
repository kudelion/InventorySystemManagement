const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const itemRoutes = require('./server/routes/itemRoutes');

const app = express();


// Setting up of temaplating engine
app.set('view engine', 'ejs');
//setting up where the templates are located
app.set('views', path.join(__dirname, 'views'));

//tells express how to parse the data
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// app.get('',(req,res) => {
//         res.send("For testing purposes only.")
//     }
// )
app.use('/items', itemRoutes)

app.listen(3000,() => {
        console.log("Serving on port 3000")
    }
)