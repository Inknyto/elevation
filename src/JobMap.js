// JobMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const JobMap = ({ jobs }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }} scrollWheelZoom={false}>
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
  );
};

export default JobMap;
