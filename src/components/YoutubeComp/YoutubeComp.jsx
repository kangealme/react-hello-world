import React from 'react';
import './YoutubeComp.css';

const YouTubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://picsum.photos/300/200" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time : '00:00',
    title : 'Tidak ada Judul',
    desc : 'Tidak ada Keterangan'
}
export default YouTubeComp;