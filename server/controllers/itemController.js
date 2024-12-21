const mongoose = require('mongoose');
const Item = require('../../models/item');

mongoose.connect('mongodb://127.0.0.1:27017/item-db')
    .then(() =>{
        console.log("Connection Open")
        }
    )
    .catch(err =>{
        console.log("Error");
        console.log(err);
        }
    );

    //List of All Items
    exports.items = async(req,res) => {
        const items = await Item.find({});
        res.render('index',{items});
    };

    //Add User Forms (Will Render the blank form)
    exports.addItemForm = (req,res) => { 
        res.render('new-item');
    };

    //Create Item
    exports.createItem = async(req,res) => {
        const item = new Item(req.body)
        await item.save();
        res.redirect('/items');
    };

    //View Item
    exports.viewItem = async(req,res) => {
        const item = await Item.findById(req.params.id);
        res.render('show-item',{item}); 
    }

    //Update Item Form
    exports.editItemForm = async (req,res) => {
        const item = await Item.findById(req.params.id);
        res.render('edit-item',{item}); 
    }

    //Update Item
    exports.updateItem = async (req,res) => {
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id,{...req.body});
        res.redirect(`/items/${id}`)
    }

    exports.deleteUser = async (req,res) => {
        const {id} = req.params
        await Item.findByIdAndDelete(id);
        res.redirect('/items');
    }
