import {useState} from 'react';
function SearchShifts() {
    const [search, setSearch] = useState("");

   const handleSubmit = (e) =>{
    e.preventDefault();

    setSearch("");
   }
    return (
      <>
     
      <div className="container">

      <form onSubmit={handleSubmit}>
      
     <input type="text"
     className="form-control col-4" 
     placeholder="introduce el restaurante donde buscar turnos" 
     value={search} onChange ={ (e) => {setSearch(e.target.value)}} />
    </form>
      </div>
     
      </>
    );
  }
  
  export default SearchShifts;