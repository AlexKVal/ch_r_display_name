import React from 'react';

const SomeComponent = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default SomeComponent;
