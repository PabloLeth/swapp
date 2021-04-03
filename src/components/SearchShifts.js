import { useState, useEffect } from 'react';

function SearchShifts({ setFilteredData, data }) {
  const [search, setSearch] = useState("");
  const [searchHour, setSearchHour] = useState("");

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

  return (
    <>

      <div className="container">

        <form onSubmit={handleSubmit}>

          <input type="text"
            className="form-control col-4 my-2 mt-4"
            placeholder="Branch..."
            value={search} onChange={(e) => { setSearch(e.target.value) }} />
          <input className="my-2 btn btn-info" type="submit" value="Search" />
        </form>
      </div>

    </>
  );
}

export default SearchShifts;