var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var Menu = require('react-burger-menu').slide;
var menuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '30px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#212C64'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#212C64',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      color: 'white'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

function Nav () {
  return (
    <ul className='titleHeader'>
    <li>
      <img className='titleBadge' src={images['AL460.jpg']}/>
      <img className='titleBadge' src={images['AL-logo.png']}/>
      <img className='titleBadge' src={images['AL460Police.png']}/>
    </li>
    <li className='nonBurgerNav'>
            <ul className='nav'>
              <li>
                <NavLink exact activeClassName='active' to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/calendar'>Calendar</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/store'>Store</NavLink>
              </li>
            </ul>
    </li>
    <li className='burgerNav'>
      <Menu styles={menuStyles} isOpen={ false } right >
      <ul>
              <li><img width="50%" src={images['AL-logo.png']} alt=""/></li>
              <li>
                <NavLink exact activeClassName='active' to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/calendar'>Calendar</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/store'>Store</NavLink>
              </li>
            </ul>
        
      </Menu>
    </li>
    </ul>
  )
}

module.exports = Nav;