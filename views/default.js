var React = require('react');
var analytics = require('./analytics');
var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description}/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"/>
          <link rel="stylesheet" href="/css/style.css"/>
          <script dangerouslySetInnerHTML={{__html: analytics('UA-65623547-1')}}></script>
        </head>
        <body>
          <div className='container'>
            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;