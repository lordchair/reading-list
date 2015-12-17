var React = require('react');
require('./Library.less');

var Library = React.createClass({
  render: function () {
    return (
      <div className='Library'>
        Library component
      </div>
    )
  }
})

module.exports = Library