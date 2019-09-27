import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }

  render() {
    return (
      <div>
        <div>
            <div className="title center">
                <p id='song-title' className=''>Insert Song Title Here</p>
            </div>
            <div className="toolbar center">
                <button id="repeat" className="fa fa-retweet fa-lg"></button>
                <button id="previous" className="fa fa-step-backward fa-2x"></button>
                <button id="play-pause" className="fa fa-play fa-2x"></button>
                <button id="next" className="fa fa-step-forward fa-2x"></button>
                <button id="volume" className="fa fa-volume-up fa-lg"></button>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
