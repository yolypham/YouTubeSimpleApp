import React from 'react'

const VideoListItem = (props) => {
    const video = props.video;
    const onClickedVideo = props.onClickedVideo;

    const imgUrl = video.thumbnails.default.url;

    return (
        <li onClick={() => onClickedVideo(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading" >{video.title}</div>
                </div>
            </div>
        </li>);
}
export default VideoListItem;