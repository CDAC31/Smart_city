const mongoose = require('mongoose');
const DB = "mongodb+srv://deepankar:Djdatadragon97@cluster0.03ab8.mongodb.net/MERNSTACK?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection Established!")).catch((Error) => console.log(Error.message));