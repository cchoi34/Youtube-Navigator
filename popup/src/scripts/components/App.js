import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import {showTabsInPopup, getWatchedTabs, getTabs, tabsToBackgroundStore} from '../reducers'

class App extends Component {
  constructor() {
    super();
    this.state = {
      sample: ['green', 'green-blue' , 'more-blue', 'blue']
    }
  }

  componentDidMount() {
    this.props.getYoutubeTabs()
  }

  render() {
    const tabs = this.props.tabs || [{id: 0}]
    return (
      <div className='navbar'>
        {
          tabs.map((tab) => {
            return (
              <Navbar key={tab.id} tab={tab} />
            )
          })
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    tabs: state.tabs
  };
};

const mapDispatch = (dispatch) => {
  return {
    getYoutubeTabs: () => dispatch(tabsToBackgroundStore())
  }
}

export default connect(mapState, mapDispatch)(App);
