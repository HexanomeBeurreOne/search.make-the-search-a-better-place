var App = React.createClass({
  // getInitialState: function() {
  //   return {
  //     loggedIn: false
  //   };
  // },

  // componentDidMount: function() {
  //   var self = this;
  //   $.get(this.props.source, function(result) {
  //     if (self.isMounted()) {
  //       self.setState({
  //         loggedIn: true
  //       });
  //     }
  //   })
  //   .fail(function(err) {
  //     self.setState({
  //       loggedIn: false
  //     });
  //   });
  // },

  handleSubmit: function(e) {
    e.preventDefault();
    var text = React.findDOMNode(this.refs.text).value.trim();
    window.location = "https://thedesktop-home-dev-pr-527.herokuapp.com/#/storage/wizard/" + encodeURIComponent(text);
    return;
  },

  render: function(){
    return (
      <form role="form" onSubmit={this.handleSubmit}>
        <input type="text" className="search" ref="text"/>
      </form>
    );
  }
});

React.render(<App source="http://localhost:8080/users/self"/>,
  document.getElementById('search')
);
