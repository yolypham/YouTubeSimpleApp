import React from 'react';
import VideoListItems from './video_list_items';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItems
                onClickedVideo={props.onClickedVideo}
                key={video.id}
                video={video} />
        )
    });

    return (
        <div>
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>

        </div>
    )
}

export default VideoList;



