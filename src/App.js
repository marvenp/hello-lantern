import logo from './lanternLogo.svg';
import bgImage from './parallax.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      
        <div class="w3-top">
          <div class="w3-bar" id="myNavbar">
            <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
              <i class="fa fa-bars"></i>
            </a>
            <a href="#home" class="w3-bar-item w3-button">HOME</a>
            <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
            <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTFOLIO</a>
            <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
            <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
              <i class="fa fa-search"></i>
            </a>
          </div>

         
          <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
            <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
            <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
            <a href="#" class="w3-bar-item w3-button">SEARCH</a>
          </div>
        </div>

        <div class="bgimg-1 w3-display-container w3-opacity-min" style= {{backgroundImage:`url(${bgImage})`}} id="home">
          <div class="w3-display-middle" >
            <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MY <span class="w3-hide-small">WEBSITE</span> LOGO</span>
          </div>
        </div>

        
        <div class="w3-content w3-container w3-padding-64" id="about">
          <h3 class="w3-center">ABOUT ME</h3>
          <p class="w3-center"><em>I love photography</em></p>
          <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="w3-row">
            <div class="w3-col m6 w3-center w3-padding-large">
              <p><b><i class="fa fa-user w3-margin-right"></i>My Name</b></p><br />
              <img src={logo} class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333" />
            </div>

            <div class="w3-col m6 w3-hide-small w3-padding-large">
              <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <p class="w3-large w3-center w3-padding-16">Im really good at:</p>
          <p class="w3-wide"><i class="fa fa-camera"></i>Photography</p>
          <div class="w3-light-grey">
            <div class="w3-container w3-padding-small w3-dark-grey w3-center" >90%</div>
          </div>
          <p class="w3-wide"><i class="fa fa-laptop"></i>Web Design</p>
          <div class="w3-light-grey">
            <div class="w3-container w3-padding-small w3-dark-grey w3-center" >85%</div>
          </div>
          <p class="w3-wide"><i class="fa fa-photo"></i>Photoshop</p>
          <div class="w3-light-grey">
            <div class="w3-container w3-padding-small w3-dark-grey w3-center" >75%</div>
          </div>
        </div>
    </div>
    
  );
}

export default App;
