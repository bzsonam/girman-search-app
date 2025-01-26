const Card = ({ user, index, fetchDetails }) => {
  return (
    <div
      key={index}
      className=" sm:h-[250px] sm:w-[300] md:h-[300px] md:w-[380px] bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-left sd: mb-3"
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
      <div className="flex">
        <div className=" md: text-[15px]   mt-5 font-semibold flex">
          {" "}
          <img
            src={user.profile_pic || "/assets/contactlogo.png"}
            className="h-4  left mr-2 mt-1"
          />
          {user.contact_number}
        </div>

        {/* //fetch button */}
        <button
          onClick={() => fetchDetails(user)}
          className="bg-zinc-900 md:text-[16px] sd: text-[14px] sd: mb-1 text-white sd: ml-[50px] md: ml-[104px] mt-7 py-2 px-4 rounded-lg "
        >
          Fetch Details
        </button>
      </div>
      <p className="sd: text-[11px]  md:text-[13px] mt-[-20px] font-semibold text-gray-500 ">
        Available on phone
      </p>
    </div>
  );
};

export default Card;
