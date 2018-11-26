var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

const EventCard = (props) => {
  return (
    <div className='eventCard'>
      <h3>{props.date}</h3>
      <h4>{props.title}</h4>
      <p>{props.eventDesc}</p>
      <a href={props.link}>{props.linkText}</a>
    </div>
  )
}

class Calendar extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }
  
  render() {
    return (
      <div>
        <h2>Upcoming Events</h2>
        <div className='eventCardBox'>
          <EventCard date="June 2nd" title="Annual AL460 Ball" eventDesc="Join us at the annual AL460 Ball as we celebrate another sucessful year." link="store/ball19" linkText="Purchase Tickets"/>
          <EventCard date="July 4th" title="4th of July Bash" eventDesc="Enjoy the fireworks and cookout with AL460 members at the Liberty State Park pier." link="events/fourthjuly19" linkText="More Info"/>
        </div>
      </div>
    )
  }
}

module.exports = Calendar;