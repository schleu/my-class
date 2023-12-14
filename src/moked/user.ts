import { iUser } from "../context/User";

export const UserMoked: iUser = {
  id: "c42291cb-0af2-4167-bc85-37c4198b643f",
  fullName: "John Doe",
  firstName: "John",
  lastName: "Doe",
  email: "jonhdoe@myclass.com",
  phone: "(71) 99999-9999",
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

export const certificatesMoked = {};
