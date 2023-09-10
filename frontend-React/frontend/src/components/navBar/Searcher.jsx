import { useState } from "react";
function Searcher({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      onSearch(value);
    };
  
    return (
      <div className="searcher">
        <input
          type="text"
          placeholder="Buscar por ubicación..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    );
  }
  
  export default Searcher;
  