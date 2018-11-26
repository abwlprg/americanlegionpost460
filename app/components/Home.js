var React = require('react');
var Link = require('react-router-dom').Link;
require("react-responsive-carousel/lib/styles/carousel.min.css");
var Carousel = require('react-responsive-carousel').Carousel;

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
const newsImages = importAll(require.context('../assets/news', false, /\.(png|jpe?g|svg)$/));
const newsMessageStyle = {
  display: 'flex'
}
const halfBoxStyle = {
  width: '50%'
}

const NewsCard = (props) => {
  return (
    <div className='newsCard' style={{fontSize: '3rem', backgroundImage: `url${props.imgSrc}`}}>
      <a href={props.link}>
        <img src={props.imgSrc}  alt={props.imgAlt}/>
        <h4 style={{position: 'relative'}}>{props.title}</h4>
      </a>
      
    </div>
  )
}

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <div>

        </div>
        <Carousel width="100%" height="30%" showThumbs={false} dynamicHeight autoPlay>
                <div>
                  <img src={images['4.jpg']} />   
                </div>
                <div>
                    <img src={images['1.jpg']} />
                </div>
                <div>
                  <img src={images['2.jpg']} />
                </div>
                <div>
                  <img src={images['3.jpg']} />
                    
                </div>
                
        </Carousel>
        <div style={newsMessageStyle}>
          <div style={halfBoxStyle}>
            <NewsCard title="News Title" imgSrc={newsImages['news1.jpg']} />
            <h4>American Legion News</h4>
            <ul>
              <li>
                
                <h5>News Article</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </li>
              <li>
                <h5>News Article</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </li>
              <li>
                <h5>News Article</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </li>
              
            </ul>
          </div>
          <div style={halfBoxStyle}>
            <h4>Special AL460 Announcement</h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
    )
  }
}

module.exports = Home;