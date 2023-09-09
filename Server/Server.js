const {PORT,app,mongoose,DATA} = require('./App');


// run database....
const batabaseConnect = async()=>{
    try {
        await mongoose.connect(DATA);
        console.log('Data base connect done.');
    } catch (err) {
        console.log(err.message);
    }
};

// runing server.....
app.listen(PORT,async()=>{
    try {
        console.log(`Sever Run Successfully http://localhost:${PORT}`);
        await batabaseConnect()
    } catch (error) {
        console.log(error.message);
    }
});
