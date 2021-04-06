import { useState, useEffect } from 'react';

function SearchShifts({ setFilteredData, data, filteredData }) {
  const [search, setSearch] = useState("");
  const [searchHour, setSearchHour] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearch("");
  }
  useEffect(() => {
    const results = data.filter(data =>
      data.branch.toLowerCase().includes(search)
    );
    setFilteredData(results);
  }, [search]);

  // const setFilter = (value) => {
  //   const result = filteredData.filter(data => data.shiftType == value);
  //   setFilteredData(result);
  // }
  return (
    <>

      <div className="container">

        <form onSubmit={handleSubmit}>

          <input type="text"
            className="form-control col-4 my-2 mt-4"
            placeholder="Branch..."
            value={search} onChange={(e) => { setSearch(e.target.value) }} />
          <input className="my-2 btn btn-info" type="submit" value="Search" />
          {/* <div>
          <input type="checkbox" id="morning" value="morning" checked onChange={(e) => { setFilter(e.target.value) }} />
          <label htmlFor="morning">Morning</label>
          <input type="checkbox" id="evening" value="evening" checked onChange={(e) => { setFilter(e.target.value) }} />
          <label htmlFor="evening">Evening</label>
          </div> */}
        </form>
       
      </div>    

    </>
  );
}

export default SearchShifts;