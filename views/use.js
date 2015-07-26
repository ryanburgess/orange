var React = require('react');

var Use = React.createClass({
  render: function() {
    var api = this.props.api;
    
    return (
      <div className='use row'>
        <h2>Use API</h2>
        <table>
          <tr>
            <th>Get</th>
            <th>Example</th>
            <th>Link</th>
          </tr>
          {api.map(function(api, i) {
            return (
              <tr>
                <td>{api.get}</td>
                <td>{api.example}</td>
                <td><a href={api.exampleLink}>{api.link}</a></td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
});

module.exports = Use;