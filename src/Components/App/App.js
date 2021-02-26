import React from 'react';
import Navigation from '../Navigation';
import SignIn from '../Signin';
import RegisterForm from '../RegisterForm';
import Logo from '../Logo';
import ImageLinkForm from '../ImageLinkForm';
import Rank from '../Rank';
import FaceRecognition from '../FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      }
    },
    move: {
      enable: true,
      speed: 3.2,
      direction: "top",
    }
  },
};

const initialState = {
  input: '',
  imageUrl: '',
  box: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};
class App extends React.Component {

  state = initialState;

  loadUser = (userData) => {
    this.setState({
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        entries: userData.entries,
        joined: userData.joined,
      }
    })
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const boxData = data.outputs[0].data.regions.map((box) => box.region_info.bounding_box);
    const calculatedDimensions = boxData.map((box) => {
      return {
        leftCol: box.left_col * width,
        topRow: box.top_row * height,
        rightCol: width - (box.right_col * width),
        bottomRow: height - (box.bottom_row * height),
      }
    });
    return calculatedDimensions;
  }

  displayFaceBox = (box) => {
    this.setState({ box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
      fetch('https://stormy-cliffs-08363.herokuapp.com/imageurl', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: this.state.input,
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://stormy-cliffs-08363.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(error => console.log(error, 'boo'));
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(error => console.log(error, 'boo'));
  } 

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route })
  };

  render() {
    const { imageUrl, box, route, isSignedIn, user } = this.state;
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}
        />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        { route === 'home'
          ? <React.Fragment>
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </React.Fragment>
          : (
            route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
              : <RegisterForm onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
        }
      </div>
    );
  }
}

export default App;
