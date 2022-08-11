import mongoose from "mongoose";




const connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-qly4fvu-shard-00-00.5qqx87q.mongodb.net:27017,ac-qly4fvu-shard-00-01.5qqx87q.mongodb.net:27017,ac-qly4fvu-shard-00-02.5qqx87q.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-ebi95z-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, 
            { 
                useUnifiedTopology: true, 
                useNewUrlParser: true, 
            });
        console.log("db Connected");
    }catch(err){
        console.log(err);
    }
}

export default connection;