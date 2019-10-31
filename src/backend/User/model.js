const mongoose = require("mongoose");
const {Schema} = mongoose;

const User = new Schema({
    _id : {type: Schema.Types.ObjectId},
    nickName : {type: String},
    firstName : {type: String},
    lastName : {type: String},
    thumbnailPath : {type: String},
    postsId : {type: []}, // [id.post1, id.post2 .....]
    peopleSubscribed : {type: [String]}, // [id.user1, id.user2 .....]
    peopleToSubscribe : {type: [String]}
});

User
    .virtual('url')
    .get(function () {
        return '/posts/user/' + this.nickName;
    });

User.set('toJSON', {getters: true, virtuals: true});

module.exports = mongoose.model('User', User);