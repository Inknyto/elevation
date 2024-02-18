// JobMap.js
import React, { useState } from 'react';
import { useSearchResults } from '../SearchEngine/SearchRequest';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import './JobMap.css'; // Import a CSS file for styling

const JobMap = ({ jobs, onClose }) => {
  const [query, setQuery] = useState('');
  const cachedSearchResults = useSearchResults(query);

  return (
    <div className="job-map-overlay">
      <div className="job-map-container">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '500px', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {jobs.map((job) => (
            <Marker key={job.id} position={[job.latitude, job.longitude]}>
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
