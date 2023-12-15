export function generateRandomDate() {
  const year = Math.floor(Math.random() * (2023 - 1970 + 1)) + 1970;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 31) + 1;

  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  const milliseconds = Math.floor(Math.random() * 1000);

  const randomDate = new Date(
    year,
    month - 1,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  );

  return randomDate;
}
