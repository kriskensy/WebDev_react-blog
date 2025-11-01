export const dateToStr = (dateToConvert) => {
  let month = (dateToConvert.getMonth() + 1).toString().padStart(2, '0');
  let day = dateToConvert.getDate().toString().padStart(2, '0');
  let year = dateToConvert.getFullYear();

  return `${month}/${day}/${year}`;
}