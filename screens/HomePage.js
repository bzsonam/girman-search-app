import { useState } from "react";
import Popup from "../components/Popup";
import Card from "../components/Card";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      setError(null);
      fetch(`/api/users?search=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Error fetching results");
          setLoading(false);
        });
    }
  };

  const handleFetchDetails = (user) => {
    setIsOpen(true);
    setSelectedUser(user);
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-16 bg-gradient-to-b from-white to-blue-200">
      <div className="m-10 flex flex-col items-center justify-center md:w-[800px]">
        <div className="flex items-center justify-center mb-20">
          <img
            src="./assets/girman_search_logo.png"
            className="hidden md:w-[800px] md:block mb-10"
            alt="Girman Search Logo"
          />
        </div>
        <div className=" flex md:w-[800px] h-[50px] p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white md:relative md:top-0 md:left-0 md:right-0 absolute top-[140px] left-[40px] right-[40px]">
          <img
            src="./assets/searchlogo.png"
            className="md:w-[16px] h-[16px] m-[5px]"
            alt="Girman Search Logo"
          />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="w-[100%] text-[16px] active:bg-transparent outline-none ml-2"
          />
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {results.length > 0 ? (
          <div className="sd: mt-[-40px] md:mt-[20px]  md:mt-40 lg:mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-[22px]">
            {results.map((user, index) => (
              <Card
                user={user}
                index={index}
                fetchDetails={handleFetchDetails}
              />
            ))}
          </div>
        ) : results.length === 0 && query !== "" ? (
          <div className="flex flex-col items-center justify-center text-center mt-10">
            <img src="/assets/noresult.png" alt="No Results" className="mb-4" />
            <p className="text-lg font-semibold text-gray-500">
              No results found.
            </p>
          </div>
        ) : null}
      </div>
      {isOpen && (
        <Popup setIsOpen={setIsOpen}>
          <div className="relative bg-white p-4 pb-8 md:h-[475px] md:w-[500px] ml-3 sm:max-m-5 sm:w-[370px]">
            <div className="font-semibold text-[24px]">
              <h1>Fetch Details</h1>
              <button class="  md:hidden sd: absolute right-0 top-[-5px] text-[40px]  px-4 py-2 ">
                ×
              </button>
            </div>

            <p className="text-[14px] text-gray-700 ">
              Here are the details of following Employee.
            </p>
            <div className="text-[14px] mt-3 font-semibold">
              <p>
                Name: {selectedUser.first_name + " " + selectedUser.last_name}
              </p>
              <p> Location : {selectedUser.city}</p>
              <p>Contact No :{selectedUser.contact_number}</p>

              <p className="mt-3">Profile Image:</p>
              <img
                className="mt-3 w-[207px] h-[207px]"
                src="/assets/profileimage.png"
              />
              <button class=" hidden md:block absolute right-10 text-[14px] bg-white text-black border border-gray-400 px-4 py-2 rounded-md">
                Close
              </button>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}
