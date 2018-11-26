var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var About = require('./About');
var Calendar = require('./Calendar');
var Store = require('./Store')

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav/>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/store' component={Store} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;