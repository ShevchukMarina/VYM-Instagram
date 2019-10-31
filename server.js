const express = require('express');
const mongoose = require('mongoose');
const {uri, db}= require('./src/db/config');

const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors");

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

mongoose.Promise = global.Promise;

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected");
    }).catch(err => {
    console.log("no connection", err);
    process.exit();
    });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

require('./src/backend/user/routes')(app);

// function formatUser(user) {
//     return {
//         _id : user._id,
//         nickName : user.nickName,
//         firstName : user.firstName,
//         lastName : user.lastName,
//         thumbnailPath : user.thumbnailPath,
//         postsId : user.postsId, // [id.post1, id.post2 .....]
//         peopleSubscribed : user.peopleSubscribed, // [id.user1, id.user2 .....]
//         peopleToSubscribe : user.peopleToSubscribe, // [id.user1, id.user2 .....]
//     }
// }
const user1 = {
    _id : "123669",
    nickName : "Marinet",
    firstName : "Marina",
    lastName : "Shevchuk",
    thumbnailPath : "C://path",
    postsId : [654321,645631], // [id.post1, id.post2 .....]
    peopleSubscribed : ["id.user1", "id.user2"], // [id.user1, id.user2 .....]
    peopleToSubscribe : ["id.user3", "id.user24"] // [id.user1, id.user2 .....]
};
const post1 = {
    _id : 121212,
    date : new Date(),
    nickName : "Marinet",
    likes : [{likeDate1 : "nickNameUserLike1"}, {likeDate2 : "nickNameUserLike2"}],  // [{likeDate1 : nickNameUserLike1}, {likeDate2 : nickNameUserLike2}, ... ]
    comments : [{date1:"commentText1", nickNameAuthorComment1 : "thumbnailPath1"}]  // [{date1:commentText1, nickNameAuthorComment1 : thumbnailPath1}, {date2:commentText2, nickNameAuthorComment2 : thumbnailPath2}, .......]
};


// db.addUser(user1);
// db.addPost(post1);
const port = process.env.PORT || 8626;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
console.log('all is good');
