import React, { Component } from 'react';



class Profile extends Component{
  constructor() {
    super();
    this.state={
      profile: [],
    }
  }

  componentwilldMount() {
    fetch('https://demo1443058.mockable.io/codeproject_tutorial/api/contacts')
        .then(res => res.json())
        .then(data => this.setState({profile:data}));
  }

render(){
    const profileItems =this.state.profile.map(profiles => (
        <div key={profiles.id}>
        <p>{profiles.contacts[1].name}</p>
        </div>
    ));
    return(
        <div>
        {profileItems}
        </div>
    );

    }
}


export default Profile;
