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
      <div className="rounded flex justify-left px-6 mt-4 mb-3">
        <button onClick={toggleSearchVisibility} className="text-3xl p-1 justify-center right-px">
          <FiSearch />
        </button>
        {isSearchVisible && (
          <input className="py-2 px-4 border border-gray-300 rounded-md shadow-sm border-0 focus:ring-0"
            type="text"
            placeholder="Search packages"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        )}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 px-6'>
        {filteredData.map((item, index) => (
          <CardPackages key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

