// // import { useRouter } from "next/router";
// // import { useEffect, useState } from "react";

// // export default function Results() {
// //   const router = useRouter();
// //   const { query } = router.query;
// //   const [results, setResults] = useState([]);

// //   useEffect(() => {
// //     console.log("in result file", query);
// //     if (query) {
// //       fetch(`/api/users?search=${query}`)
// //         .then((res) => res.json())
// //         .then((data) => setResults(data));
// //     }
// //   }, [query]);

// //   return (
// //     <div>
// //       {results.length > 0 ? (
// //         <>
// //           <h1>Results for: {query}</h1>
// //           {results.map((user, index) => (
// //             <div key={index}>
// //               <p>
// //                 {user.first_name} {user.last_name}
// //               </p>
// //               <p>{user.city}</p>
// //               <p>{user.contact_number}</p>
// //             </div>
// //           ))}
// //         </>
// //       ) : (
// //         <>
// //           <img src="/assets/noresult.png" />
// //           <p>No results found.</p>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function Results() {
//   const router = useRouter();
//   const { query } = router.query;
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     console.log("in result file", query);
//     if (query) {
//       fetch(`/api/users?search=${query}`)
//         .then((res) => res.json())
//         .then((data) => setResults(data));
//     }
//   }, [query]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-blue-200 flex justify-center items-start pt-10">
//       <div className="w-full md:w-[800px] m-10">
//         {results.length > 0 ? (
//           <>
//             <h1 className="text-3xl font-semibold mb-6">
//               Results for: {query}
//             </h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {results.map((user, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
//                 >
//                   <h2 className="text-xl font-bold mb-2">
//                     {user.first_name} {user.last_name}
//                   </h2>
//                   <p className="text-gray-600">City: {user.city}</p>
//                   <p className="text-gray-600">
//                     Contact: {user.contact_number}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col items-center justify-center text-center">
//             <img src="/assets/noresult.png" alt="No Results" className="mb-4" />
//             <p className="text-lg font-semibold">No results found.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
