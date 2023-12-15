import {
  generateFullName as randomFullName,
  generateRandomFirstName as randomFirstName,
  generateRandomLastName as randomLastName,
} from "./generateRandomName";
import { generateRandomNumber as randomNumber } from "./generateRandomNumber";
import { generateRandomDate as randomDate } from "./generateRandomDate";
import { generateUUID as UUID } from "./generateUUID";
import { generateLoremIpsum as LoremIpsum } from "./generateLoremIpsum";
import { generateRandomPhoto as randomPhoto } from "./generateRandomPhoto";

export const useGenerate = {
  randomFullName,
  randomFirstName,
  randomLastName,
  randomNumber,
  randomDate,
  UUID,
  LoremIpsum,
  randomPhoto,
};
