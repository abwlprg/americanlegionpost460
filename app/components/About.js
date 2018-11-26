var React = require('react');

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>Mission of the American Legion</h2>
        <p>For God and Country, we associate ourselves together for the following purposes:</p>
          <ul className='missionList'>
            <li>To uphold and defend the Constitution of the United States of America</li>
            <li>To maintain law and order</li>
            <li>To foster and perpetuate a 100-percent Americanism</li>
            <li>To preserve the memories and incidents of our associations in the great wars; to inculcate a sense of individual obligation to the community, state and nation</li>
            <li>To combat the autocracy of both the classes and the masses; to make right the master of might</li>
            <li>To promote peace and good will on earth; to safeguard and transmit to posterity the principles of justice, freedom and democracy</li>
            <li>To consecrate and sanctify our comradeship by our devotion to mutual
helpfulness</li>
          </ul>

<h3>History</h3>
<p>Sed congue sit amet urna ut feugiat. Vestibulum vel metus nunc. Cras ligula risus, ultrices quis luctus vel, interdum vel arcu. Cras tristique hendrerit dignissim. Praesent eu nunc rhoncus, dapibus ex eget, aliquet odio. Donec id mi sit amet neque sodales placerat et at nisi. Curabitur maximus, dolor nec efficitur tincidunt, lorem ex gravida lectus, a lacinia nunc purus fringilla libero. Proin luctus massa at quam commodo, posuere efficitur urna interdum. Phasellus quis fringilla risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras in auctor odio, sed tempor elit. Maecenas id enim eget dolor condimentum euismod quis eu arcu. Nunc feugiat risus massa, a consequat tellus faucibus id. Donec sed congue justo. Pellentesque maximus sit amet erat at efficitur.</p>
      </div>
    )
  }
}

module.exports = About;