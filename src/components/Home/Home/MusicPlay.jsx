import  { useState, useRef } from 'react';
import { FaPause, FaPlay } from "react-icons/fa";

const MusicPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateCurrentTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const progressValue = e.target.value;
    setCurrentTime(progressValue);
    audioRef.current.currentTime = progressValue;
  };

  return (
    <div className="mx-72">
      <div className="card card-side bg-base-100 shadow-xl rounded-none">
        <figure>
          <img
            className="h-80"
            src="https://img.freepik.com/free-psd/music-festival-square-flyer-template_23-2149962690.jpg?w=740&t=st=1691061583~exp=1691062183~hmac=4215a0c3e1e4d0b6fe86d3f079fdb7461c275440324593f6128253fe54b7b7b5"
            alt="Music Cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-orange-600 ">PIANO</h2>
          <p className="text-left text-2xl text-black font-semibold font-serif ">
            Smooth Jinoshan Promi
          </p>
          <img className='h-28 w-28' src="https://img.freepik.com/free-vector/retro-vinyl-music-record-emblem_98292-4131.jpg?w=740&t=st=1691074524~exp=1691075124~hmac=18f56e8d084bc886a135076f599c31d9d33d8b184da142d66dc2412653cd43d5" alt="" />
          <div className="text-left">
            <button className='me-3' onClick={togglePlay}>{isPlaying ? <FaPause className='text-blue-800' /> : <FaPlay className='text-blue-800' />}</button>
            <input
              type="range"
              min="0"
              max={duration}
              step="0.01"
              value={currentTime}
              onChange={handleProgressChange}
            />
            <div className='text-blue-800'>Current Time: {currentTime.toFixed(2)} seconds</div>
            <audio
              ref={audioRef}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
              onTimeUpdate={updateCurrentTime}
              onLoadedData={handleLoadedData}
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlay;
