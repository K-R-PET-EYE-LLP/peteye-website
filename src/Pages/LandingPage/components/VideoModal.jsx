import React from 'react'
import './VideoModal.css'

export default function VideoModal({ videoSrc, setVideoSrc }) {
    return (
        <>
            {
                videoSrc ?
                    <div className="VideoModal" onClick={()=>setVideoSrc(null)} >
                        <div className="video-modal-container" onClick={(e)=>e.stopPropagation()}>
                            <video controls>
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div> : null
            }
        </>
    )
}
