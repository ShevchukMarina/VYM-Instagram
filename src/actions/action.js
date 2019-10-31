// const db = require('../db/');
//
// export const GET_USERS = 'GET_USERS';
// export const GET_POSTS = 'GET_POSTS';
//
// export const getUsers = () => {
//     return dispatch => {
//         dispatch({
//             type: GET_POSTS
//         });
//         fetch(`${db.getUsers()}`)
//             .then(usersData => {
//                 console.log(usersData);
//                 return usersData.json()})
//             .then(users => {
//                 // dispatch({
//                 //     type: HIDE_PRELOADER
//                 // })
//                 let  usersList = [];
//
//                 for(let key in users.data){
//                     let usersListItem = {
//                         id: users.data[key]._id,
//                         nickName: users.data[key].nickName,
//                         lastName: users.data[key].lastName,
//                         thumbnailPath: users.data[key].thumbnailPath,
//                         postsId: users.data[key].postsId,
//                         peopleSubscribed: users.data[key].peopleSubscribed,
//                         peopleToSubscribe: users.data[key].peopleToSubscribe
//                     };
//                     usersList.push(usersListItem);
//
//                 }
//                 console.log(usersList);
//                 // dispatch({
//                 //     type: ADD_USER,
//                 //     payload: usersList
//                 // })
//             })
//             .catch(err => console.log(err));
//     };
// };
