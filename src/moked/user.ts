import { iUser } from "../context/User";

export const UserMoked: iUser = {
  fullName: "John Doe",
  firstName: "John",
  lastName: "Doe",
  email: "",
  phone: "",
  picture: `https://randomuser.me/api/portraits/med/men/${Math.round(
    Math.random() * 99
  )}.jpg`,
  location: {
    street: {
      number: 6463,
      name: "Brockville Road",
    },
    city: "Wellington",
    state: "Nelson",
    country: "New Zealand",
    postcode: 56612,
  },
};
