import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://vk.com/images/brand/vk-logo--fb.png'></img>
      </header>
      <nav className='nav'>
        <div>
          <a>
            Profile
          </a>
        </div>
        <div>
          <a>
            Messages
          </a>
        </div>
        <div>
          <a>
            News
          </a>
        </div>
        <div>
          <a>
            Music
          </a>
        </div>
        <div>
          <a>
            Settings
          </a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg'/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
