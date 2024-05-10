import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import CardPackages from '../components/Card.jsx';

export default function SearchPackage({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const searchValue = event.target.value.toLowerCase();
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(searchValue) ||
      item.description.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div>
      <div className="flex justify-end px-8 ">
        <button onClick={toggleSearchVisibility} className="text-3xl">
          <FiSearch />
        </button>
        {isSearchVisible && (
          <input className="ml-2 py-1 px-2 border border-gray-300 rounded-md shadow-sm border-0 focus:ring-0"
            type="text"
            placeholder="Search packages"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        )}
      </div>
      <div className='px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {filteredData.map((item, index) => (
          <CardPackages key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

