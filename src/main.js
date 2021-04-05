const leapYearA = 2020
const leapYearB = 2021

console.log(leapYearA);
console.log(leapYearB);

if ((year % 4 == 0 && year % 100 != 0) || year % 400 === 0){
  console.log("うるう年です");
} else {
  console.log("うるう年ではありません");
}
    