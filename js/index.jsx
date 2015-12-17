var React = require('react');
var Root = require('./components/Root.jsx');
var ReactDOM = require('react-dom');

if (typeof document !== 'undefined') {
  ReactDOM.render(<Root />, document.getElementById('react'));
}

module.exports = function render(locals, callback) {
  var html = React.renderToString(React.createElement(Root, locals));
  callback(null, '<!DOCTYPE html>' + html);
};