// JobMap.js
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { useSearchResults } from '../SearchEngine/SearchRequest';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import './JobMap.css'; // Import a CSS file for styling

import { ReactComponent as JobIcon } from '../Icons/assets/sun.svg';
const JobMap = ({ jobs, onClose }) => {
  const [query, setQuery] = useState('');
  const theme = useTheme();
  const [mapFilter, setMapFilter] = useState('none');
// theme.palette.mode === 'dark' ? : 'none',
// theme.palette.mode == 'dark' ? setMapFilter('invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)') : setMapFilter('none')
//  useEffect(() => {
//    setMapFilter(
//    theme.palette.mode === 'dark' 
//        ? 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)'
//        : 'none'
//    );
//  }, [theme.palette.mode]);
//
// useEffect(() => {
//   setMapFilter(
//     theme.palette.mode !== 'dark'
//       ? 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)'
//       : 'none'
//   );
// 	// console.log(theme.palette.mode)
// }, [theme.palette.mode]);
// 
useEffect(() => {
  const mapContainer = document.getElementById('leaflet-container'); // replace with your actual ID
  if (mapContainer) {
    mapContainer.style.filter = theme.palette.mode === 'dark'
      ?  'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)'
      // ? 'brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7)'// 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)'
      : 'none';
  }
}, [theme.palette.mode]);


  const cachedSearchResults = useSearchResults(query);
// the actual coordinates for centering the map are given below:
  return (
    <div className="job-map-overlay">
      <div className="job-map-container">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <MapContainer id='leaflet-container'
          center={[14.7175936, -17.3618599]}
          zoom={11}
          style={{
  height: '500px',
  width: '100%',
  // filter: theme.palette.mode === 'dark' ? 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'none',
			  // does not re_render
  filter: mapFilter,
}}
	  scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {jobs.map((job) => (
            <Marker  key={job.id} position={[job.latitude, job.longitude]}>
              <Popup>
                <strong>{job.title}</strong> <br />
                {job.company_name}, {job.location} <br />
                {job.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default JobMap;
