import userData from "./data/users.json";

export default function handler(req, res) {
  const { search } = req.query;
  console.log("queryy", search); // const { query } = req.query;
  // console.log(req.query)

  const filteredUsers = userData.filter((user) => {
    const [firstName, lastName] = search.split(" ");
    if (lastName) {
      return (
        user.first_name.toLowerCase().includes(firstName.toLowerCase()) &&
        user.last_name.toLowerCase().includes(lastName.toLowerCase())
      );
    } else {
      return (
        user.first_name.toLowerCase().includes(firstName.toLowerCase()) ||
        user.last_name.toLowerCase().includes(firstName.toLowerCase())
      );
    }
  });
  res.status(200).json(filteredUsers);
}
