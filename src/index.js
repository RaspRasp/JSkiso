// const name = "Rio";
// const age = 24;
// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// const func1 = (str) => str;
// console.log(func1("funk1です"));

// const sum = (val1, val2) => {
//   return val1 + val2;
// };
// console.log(sum(1, 2));

// const myProfile = {
//   name: "Rio",
//   age: 24
// };

//分割代入
// const { name, age } = myProfile;
// const message = `My name is ${name}, ${age} years old.`;
// console.log(message);

//配列の分割代入（一つ目から順番に配列に入る）
// const myProfile2 = ["Rio", 24];
// const [name, age] = myProfile2;
// const message2 = `me llamo ${name}, ${age} anos.`;
// console.log(message2);

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   return console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 4];

// const arr6 = [...arr4];
// const arr7 = [...arr4, ...arr5];
// console.log(arr6);
// console.log(arr7);

//mapやフィルターを使った配列の処理
// const nameArr = ["田中", "山田", "Rio"];
// const nameArr2 = nameArr.map((name) => {
//   return name + "さん";
// });
// console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// const nameArr = ["Marc", "Sergio", "Riqui"];
// const newName = nameArr.map((name) => {
//   if (name === "Riqui") {
//     return name;
//   } else {
//     return name + "さん";
//   }
// });
// console.log(newName);

/**
 * 三項演算子
 *
 *ある条件 ? 条件がtrueのとき : 条件がfalseのとき
 */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// };
// console.log(checkSum(50, 32));

//論理演算子の本当の意味を知ろう
// const flag1=true
// const flag2=false

// if(flag1||flag2){
//   console.log('1か2はtrueになります')
// }
// if(flag1&&flag2){
//   console.log('1も2もtrueになります')
// }

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
