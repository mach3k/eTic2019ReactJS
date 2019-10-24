import React, { Component } from 'react';

class Photo extends Component {

  render() {
    return (
        <div className="Photo">
            <div className="Profile">
                <div className="Profile-photo">
                    <canvas className="Profile-photo-canvas" />
                    <span className="Profile-photo-container">
                        <img src={this.props.user.profile_image} />
                    </span>
                </div>
                <div className="Profile-name">
                    <a href={this.props.user.link} target="_blank">
                    {this.props.user.name}
                    </a>
                </div>
            </div>
            <div className="Picture">
                <div className="Picture-Container">
                    <img src={this.props.src} />
                </div>
            </div>
        </div>
    );
  }
}
export default Photo;