const MongoClient = require('mongodb').MongoClient;
const {uri,db}= require('./config');

const testConnection = async () => {
    // console.log(process.env.URL);
    const client = new MongoClient(process.env.URL, { useNewUrlParser: true });
    await client.connect();
    console.log('connected');
    client.close();
};
const addUser = async user => {
    const client = new MongoClient(process.env.URL, { useNewUrlParser: true });
    await client.connect();
    const usersCollection = await client.db(db).collection("Users");
    await usersCollection.insertOne(user);
    console.log("1 document inserted");
    client.close();
};

const getUsers  = async () => {
    const client = new MongoClient(process.env.URL, { useNewUrlParser: true });
    await client.connect();
    console.log(db);
    const usersCollection = await client.db(db).collection("Users");
    const usersCollections = await client.db(db).collections();
    console.log(usersCollections);
    const data = await usersCollection.find({}).toArray();
    console.log(data);
    client.close();
    return data;
};
const deleteUser = async user => {
    const client = new MongoClient(process.env.URL, { useNewUrlParser: true });
    await client.connect();
    const notesCollection = await client.db(db).collection("Users");
    await notesCollection.deleteOne(user);
    console.log('deleted one user');
    client.close();
};
const addPost = async post => {
    const client = new MongoClient(process.env.URL, { useNewUrlParser: true });
    await client.connect();
    const postsCollection = await client.db(db).collection("Posts");
    await postsCollection.insertOne(post);
    console.log("1 document inserted");
    client.close();
};

const getPosts  = async () => {
    const client = new MongoClient(process.env.URL, { useNewUrlParser: true });
    await client.connect();
    const postsCollection = await client.db(db).collection("Posts");
    const data = await postsCollection.find({}).toArray();
    client.close();
    return data;
};
const deletePost = async post => {
    const client = new MongoClient(process.env.URL, { useNewUrlParser: true });
    await client.connect();
    const notesCollection = await client.db(db).collection("Posts");
    await notesCollection.deleteOne(post);
    console.log('deleted one user');
    client.close();
};
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
// function formatPost(post) {
//     return {
//         _id : post._id,
//         date : post.date,
//         nickName : post.nickName,
//         likes : post.likes,  // [{likeDate1 : nickNameUserLike1}, {likeDate2 : nickNameUserLike2}, ... ]
//         comments : post.comments  // [{date1:commentText1, nickNameAuthorComment1 : thumbnailPath1}, {date2:commentText2, nickNameAuthorComment2 : thumbnailPath2}, .......]
//     }
// }
module.exports = {
    testConnection,
    addUser,
    getUsers,
    deleteUser,
    addPost,
    getPosts
};

