import React from 'react';
import Navigation from '../Navigation';
import SignIn from '../Signin';
import RegisterForm from '../RegisterForm';
import Logo from '../Logo';
import ImageLinkForm from '../ImageLinkForm';
import Rank from '../Rank';
import Particles from 'react-particles-js';
import FaceRecognition from '../FaceRecognition';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'c8a8a225e5944af99293fcbcd04b3ece'
});

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

class App extends React.Component {
  state = {
    input: '',
    imageUrl: '',
    box: [],
    // этот стейт показывает, где мы изначально на странице. мы начинаем с формы регистрации
    route: 'signin',
    isSignedIn: false,
  }

  calculateFaceLocation = (data) => {
    const image =  document.getElementById('inputImage');
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
    this.setState({input: event.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: this.state.input});
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
          .then(response => {
            this.displayFaceBox(this.calculateFaceLocation(response))
          })
          .catch(error => console.log(error, 'boo'));      
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({ route })
  };

  render() {
    const { imageUrl, box, route, isSignedIn } = this.state;
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
              <Rank />
              <ImageLinkForm change={this.onInputChange} submit={this.onSubmit}/>
              <FaceRecognition imageUrl={imageUrl} box={box}/>
        </React.Fragment> 
        : (
          route === 'signin' 
          ? <SignIn onRouteChange={this.onRouteChange}/> 
          : <RegisterForm onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
