import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sidebarShowAsync } from 'src/redux/main.redux.js'
@connect(
  state=>({main_store:state.main}),
  {sidebarShowAsync}
)

class Index extends Component {
  render() {
    return (
      <div>
        <h1>index</h1>
        {this.props.main_store.show ? '111' : '222'}
        <button onClick={this.props.sidebarShowAsync}>toggle</button>
      </div>
    );
  }
}

export default Index;
