import React, { useState } from 'react';

import './App.css';

export const VolumeController = ({ initialVolume }) => {

const [volume, setVolume] = useState(initialVolume);
  return (
    <div className="input-group">
      <input className="form-control m-2" value={volume} size={3} />
      <div className="input-group-append">
        <button
          className="btn btn-warning m-2"
          onClick={() => setVolume(initialVolume)}
        >
          Reset
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => setVolume(volume - 1)}
        >
          + Vol
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => setVolume(volume - 1)}
        >
          - Vol
        </button>
      </div>
    </div>
    );
     

}; 


