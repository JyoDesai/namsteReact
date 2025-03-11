import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count: 0,
            count2:1,
            userInfo: null,
        }
        // this.state={
        //     userInfo:{
        //         name:,
        //         location
        //     }
        // }
        console.log(this.props.name  + "child constructor")

    }

    async componentDidMount(){
        console.log(this.props.name  + "child componentDidMount")
        const data = await fetch("https://api.github.com/users/JyoDesai")
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate(){
        console.log("child componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("child componentWillUnmount")
    }

    render(){
        console.log(this.props.name  + "child render")

        const{name,location,email}= this.props;
        const{count2,userInfo }= this.state;
        return(
            <div className="user-card">
                {/* <h2>name: {this.props.name}</h2> */}
                <h1>count = {this.state.count}</h1>
                <h1>count2 = {count2}</h1>
                <button onClick={()=>
                    this.setState({
                        count: this.state.count + 1
                })
                }>Increase counter</button>
                <h2>name: {name}</h2>
                <h2>location: {location}</h2>
                <h2>name: {email}</h2>

                <h1>Now fetching api data---</h1>
                
                {userInfo ? (
                    <>
                        <h2>Github Name: {userInfo.login}</h2>
                        <h2>Github public_repos: {userInfo.public_repos}</h2>
                        <img src={userInfo.avatar_url} alt="profile picture" width={200} height={200}/>
                    </>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        )
    }
}

export default UserClass;