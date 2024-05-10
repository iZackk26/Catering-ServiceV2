import React from 'react';
import { Card } from 'flowbite-react';

const DeveloperCard = ({ gitHubUrl, avatarUrl, username }) => {
  return (
    <Card className="flex-1 max-w-xs mb-4 border-none shadow-lg rounded-lg">
      <div className="flex flex-col items-center p-5">
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="text-center">
          <img
            src={avatarUrl}
            alt={`GitHub Profile of ${username}`}
            className="mb-3 rounded-full shadow-lg"
            style={{ width: '128px', height: '128px' }}
          />
          <p className="text-gray-700">{username}</p>
        </a>
      </div>
    </Card>
  );
};

export default DeveloperCard;
