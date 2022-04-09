import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions"

export class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song, index) => {
            return (
              <div className="item" key={index}>
                <div className="right floated content">
                  <button onClick={() => this.props.selectSong(song)} className="ui button primary">
                    Select
                  </button>
                </div>

                <div className="content">{song.title}</div>
              </div>
            );
        })
    };

    render() {
        // this.props === { songs: state.songs }
        return (
            <div className="ui diviede list">{this.renderList()}</div>
        )
    }
};

const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong }) /*or selectSong: selectSong)*/ (SongList);

