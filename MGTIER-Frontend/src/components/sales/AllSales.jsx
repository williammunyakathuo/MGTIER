import './Sales.css'
import { salesdata } from '../../dummy';
// import { productsData } from '../../dummy';
import { customersData } from '../../dummy';
import { useState, useEffect } from 'react';

const AllSales = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = customersData.filter((customer) =>
      customer.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredResults(filtered);
  };
  const [showModule, setShowModule] = useState(false);


  return (
    <div className="sale">
      <div className="Allsales">
        <div className="top">
          <input type="text" value={searchTerm} onChange={handleSearch} />
          {filteredResults.map((customer) => (
            <div key={customer.id}>{customer.name}</div>
          ))}
          <button onClick={() => setShowModule(true)}>Show Module</button>

        </div>
        <div className="salestable"></div>
      </div>
    </div>
  );
}

export default AllSales;