import React from 'react';
import { Card } from 'flowbite-react';

const DeveloperCard = ({ gitHubUrl, avatarUrl, username }) => {
  return (
    <Card className="w-full max-w-md mx-auto mb-4 border-none ">
      <div className="flex flex-col items-center pb-10">
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="text-center">
          <img
            src={avatarUrl}
            alt={`GitHub Profile of ${username}`}
            className="mb-3 rounded-full shadow-lg"
            style={{ width: '128px', height: '128px' }} // Ensuring the image is centered
          />
          <p className="text-gray-700">{username}</p>
        </a>
      </div>
    </Card>
  );
};

export default DeveloperCard;
