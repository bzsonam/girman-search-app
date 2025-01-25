// import { useState } from "react";
// import { useRouter } from "next/router";

// export default function SearchBox() {
//   const [query, setQuery] = useState("");
//   const router = useRouter();

//   const handleSearch = (e) => {
//     if (e.key === "Enter") {
//       router.push(`/results?query=${query}`);
//     }
//   };

//   return (

//     <div class="min-h-screen  flex items-start justify-center pt-16 bg-gradient-to-b from-white to-blue-200">
//       <div class="m-10 flex flex-col items-center justify-center md:w-[800px]">
//         <div class="flex items-center justify-center mb-20">
//           <img
//             src="./assets/girman_search_logo.png"
//             class=" md:w-[800px] mb=[30px]"
//             alt="Girman Search Logo"
//           />
//         </div>
//         <input
//           type="text"
//           placeholder="Search for user information..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={handleSearch}
//           class="w-full md:h-[50px] w-[800px] p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useRouter } from "next/router";
import Popup from "./Popup";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const router = useRouter();

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
            className="md:w-[800px] mb-10"
            alt="Girman Search Logo"
          />
        </div>
        <input
          type="text"
          placeholder="Search for user information..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full md:h-[50px] p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {results.length > 0 ? (
          <div className="sm:gap-[22px] grid-cols-1 lg:grid-cols-2 md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[22px] mt-40">
            {results.map((user, index) => (
              <div
                key={index}
                className="h-[300px] w-[380px] bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-left sd: mb-3"
              >
                {/* Profile Picture */}
                <div className="flex left mb-4">
                  <img
                    src={user.profile_pic || "/assets/profileimage.png"}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="w-20 h-20 rounded-full left"
                  />
                </div>
                {/* User Details */}
                <h2 className="text-4xl font-semibold mb-2 text-left">
                  {user.first_name} {user.last_name}
                </h2>
                <div className="text-[15px]  text-gray-600 flex">
                  {" "}
                  <img
                    src={user.profile_pic || "/assets/loclogo.png"}
                    className="h-4  left mr-2 mt-1"
                  />
                  {user.city}
                </div>
                <div className="text-[15px]   mt-5 font-semibold flex">
                  {" "}
                  <img
                    src={user.profile_pic || "/assets/contactlogo.png"}
                    className="h-4  left mr-2 mt-1"
                  />
                  {user.contact_number}
                </div>
                <div className="text-[13px]  font-semibold text-gray-500 ">
                  Available on phone
                </div>
                {/* //fetch button */}
                <button
                  onClick={() => handleFetchDetails(user)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  Fetch Details
                </button>
              </div>
            ))}
          </div>
        ) : results.length === 0 && query !== "" ? (
          <div className="flex flex-col items-center justify-center text-center mt-10">
            <img src="/assets/noresult.png" alt="No Results" className="mb-4" />
            <p className="text-lg font-semibold">No results found.</p>
          </div>
        ) : null}
      </div>
      {isOpen && (
        <Popup setIsOpen={setIsOpen}>
          <div className="relative bg-white p-4 pb-8 shadow-lg">
            <h1>Fetch Details </h1>
            <p>Here are the details of the following Employee Name : .</p>
            <p>{selectedUser.first_name + " " + selectedUser.last_name}</p>
            <p> Location : {selectedUser.city}</p>
            <p>Contact No :{selectedUser.contact_number}</p>
            <p>Profile Image </p>
            {
              // Making a PR for responsiveness Now
            }
            <img src="/assets/profileimage.png" />
            <button class="absolute right-2" onClick={() => setIsOpen(false)}>
              close
            </button>
          </div>
        </Popup>
      )}
    </div>
  );
}
