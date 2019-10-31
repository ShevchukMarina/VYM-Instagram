import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUsers } from "../../backend/User/controller";
// import MainPage from "../../pages/MainPage/MainPage";
import MainPagePost from "./MainPagePost/MainPagePost";

class MainPagePostList  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            // user: {},
            // address: {},
            pending:true
        }

    }
    // state={
    //     data: []
    //     // pending : true
    //     // id: '',
    //     // nickName: '',
    //     // lastName: '',
    //     // thumbnailPath: '',
    //     // postsId: '',
    //     // peopleSubscribed: '',
    //     // peopleToSubscribe: '',
    // };
    async componentDidMount(){
        let that = this;

        // let users = [{
        //     _id : "123456",
        //     nickName : "Marinet",
        //     firstName : "Marina",
        //     lastName : "Shevchuk"
        // },
        //     {
        //         _id : "6321",
        //         nickName : "Marinet321",
        //         firstName : "Marina",
        //         lastName : "Shevchuk"
        //     }];
        let users = [];

        let user = await fetch("/api/users").then((res) => {
            console.log(res.json());
            console.warn(res.json());
            return res.json()
        }).then((data) => {
            console.log(data);
            return data
        }).catch(err => err);
        await users.push(user);

        that.setState({users: users});
        that.setState({pending: false});
        console.log(this.state);
        // this.setState({pending: false});
    }
    render() {
        console.log(this.props);
        console.log(this.state);


        const {users} = {...this.state};
        const arr = users.map((el) => el);
        console.log(arr);
        const usersList = arr.map(user => (
            <MainPagePost {...user} user={user} key={user._id} />
         ));
        return (
            <div>
                <p>11111111HELLLLLOOOOOO</p>
                <div>
                    {usersList};
                </div>
            </div>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         users: state.users
//
//     }
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUsers: () => dispatch(getUsers())
//     }
// };

export default MainPagePostList;