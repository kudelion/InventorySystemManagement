const mongoose = require('mongoose');
const Item = require('../models/item');

mongoose.connect('mongodb://127.0.0.1:27017/item-db')
    .then(() =>{
        console.log("Connection Open")
        }
    )
    .catch(err =>{
        console.log("Error");
        console.log(err);
        }
    )

//seeding data
const seedDb = async() => {
    // await User.deleteMany({});
    const items = new Item({
        name:'AMD Radeon RX6600 XT',
        category:'GPU',
        quantity:'1',
        price:'12000',
        description:'This GPU is stronger',
     }
    )
    await items.save();
}

seedDb().then(() => {
        mongoose.connection.close();
    }
)


