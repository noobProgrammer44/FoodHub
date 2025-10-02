import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:'dummy',
                login:'dummyLog',
            }

        }
        // console.log(`${this.props.name} child constructor rendered` );
    }
    async componentDidMount(){ 


        const data =await fetch("https://api.github.com/users/noobProgrammer44")
        const json =await data.json()
        // console.log(json);

        this.setState(
            {
                userInfo:json
            }
        )


        // console.log(` ${this.props.name} child componentDidMount rendered`);
      }

    //   componentDidMount(){
    //     console.log('Did mount Rendered');
    //   }

    //   componentWillUnmount(){
    //     console.log('Component unmounted')
    //   }

    render(){
        
        // console.log(`${this.props.name} child render rendered`);
        const {name,login}=this.state.userInfo
        return(
        <div className="user-card user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h2>Name: {name}</h2>
            <h3>Username:{login}</h3>
            <h4>Contact:kamaan551@gmail.com</h4>
        </div>
        )

    }
}

export default UserClass