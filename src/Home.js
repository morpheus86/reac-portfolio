import React, { Component } from 'react';
import { P } from './stateless/Navigation'
class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div>
            <header className="Hamadou Tidiane Diallo Portfolio">
            </header>
            <P>
              <img alt='kid-pic' src={require('./img/kid.jpg')} />
              <li className='desc'>
                Li'l Tidiane
              </li>
            </P>
            <h1 className="App-title">Welcome To Hamadou Diallo Homepage</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;