import { useEffect, useRef } from 'react';

function VideoPlayer() {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if ( cloudinaryRef.current ) return;
        cloudinaryRef.current = <window className="cloudinary"></window>
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'shukriprojects-examples'
        })
    }, []);

  return (
    <video
         ref={videoRef}
         data-cld-public-id="https://www.canva.com/design/DAGB2DcVmKA/eantTBclxXfhFQcZuLoS4g/watch?utm_content=DAGB2DcVmKA&utm_campaign=designshare&utm_medium=link&utm_source=editorl"
    />
  )
}

export default VideoPlayer