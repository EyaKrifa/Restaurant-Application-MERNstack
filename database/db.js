const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://restaurant-user:testing123@restaurant-application.svuue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Database connection success');
    } catch (err) {
        console.log(err);
    }
};
module.exports=connectDB;
