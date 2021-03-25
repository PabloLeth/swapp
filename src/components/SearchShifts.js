import {useState, useEffect} from 'react';

function SearchShifts({ setFilteredData , data }) {
    const [search, setSearch] = useState("");

   const handleSubmit = (e) =>{
    e.preventDefault();

    setSearch("");
   }
   useEffect(() => {
    const results = data.filter(data =>
      data.branch.toLowerCase().includes(search)
    );
    setFilteredData(results);
  }, [search]);
    return (
      <>
     
      <div className="container">

      <form onSubmit={handleSubmit}>
      
     <input type="text"
     className="form-control col-4" 
     placeholder="introduce el restaurante donde buscar turnos" 
     value={search} onChange ={ (e) => {setSearch(e.target.value)}} />
     <input type="submit" value="busca"/>
    </form>
      </div>
     
      </>
    );
  }
  
  export default SearchShifts;