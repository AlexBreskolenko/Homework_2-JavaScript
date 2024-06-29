//*********Task 1************ */
// const numOne = Number(prompt("Введите первое число :"));
// const numTwo = Number(prompt("Введите второе число :"));

// if (numOne <= 1 && numTwo >= 3) {
//   console.log(
//     "Первое число меньше или равно 1, второе число больше или равно 3"
//   );
// } else {
//   console.log("Условие не выполнено.");
// }
//*********Task 2************ */
// let test = true;
// test === true ? console.log("+++") : console.log("---");

//*********Task 3************ */
// const day = 21;

// if (day === 1 || day <= 10) {
//   console.log("Первая декада.");
// } else if (day >= 11 && day <= 20) {
//   console.log("Вторая декада.");
// } else {
//   console.log("Третья декада.");
// }
//*********Task 4************ */
const number = Number(prompt("Введите число:"));

if (number === 0 || number < 0) {
  console.log("Число равно 0 или число отрицательное.");
} else {
  let hundred = (number / 100) % 10;
  let dozent = (number / 10) % 10;
  let unit = number % 10;
  console.log(
    `В числе ${number} количество\nсотен - ${Math.round(
      hundred
    )}\nдесятков - ${Math.round(dozent)}\nединиц - ${unit}`
  );
}
