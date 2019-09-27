import React, {Component} from 'react';
import {connect} from 'react-redux';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            progress: {
                width: '60%'
            }
        }
    }

    render() {
        return (
            <div className={`single-navbar ${this.props.color}`}>
                <div className="title center">
                    <p className='song-title'>{this.props.tab.title}</p>
                </div>

                <div className="toolbar center">
                    <button className="repeat" >
                    <i className="fa fa-retweet fa-lg" />
                    </button>

                    <button className="previous">
                    <i className="fa fa-step-backward fa-2x" />
                    </button>

                    <button className="play-pause">
                    <i className="fa fa-play fa-2x" />
                    </button>

                    <button className="next">
                    <i className="fa fa-step-forward fa-2x" />
                    </button>

                    <button className="volume">
                    <i className="fa fa-volume-up fa-lg" />
                    </button>
                </div>

                <div className='progress-bar'>
                    <div className={`${this.props.color} completed-progress`} style={this.state.progress}></div>
                </div>
            </div>
        )
    }
}

export default Navbar