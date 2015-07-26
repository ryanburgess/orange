var React = require('react');
var Header = require('./header');
var Use = require('./use');
var DefaultLayout = require('./default');

var layout = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title} description={this.props.description}>
        <Header title={this.props.title} image={this.props.image} github={this.props.github}>
        </Header>
        <div className='main-content'>
          <Use api={this.props.api}>
          </Use>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = layout;