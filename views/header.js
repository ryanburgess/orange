var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div className='background'>
          <h1>{this.props.title}</h1>
          <img className='orange-image' src={this.props.image} alt={this.props.title} />
        </div>
        <div className='github-button'>
          <a href={this.props.github}><iframe src='https://ghbtns.com/github-btn.html?user=ryanburgess&repo=orange&type=star&count=true&size=large' frameBorder='0' scrolling='0' width='100%' height='30px'></iframe></a>
        </div>
      </header>
    );
  }
});

module.exports = Header;