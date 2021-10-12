//forEach
const letters = ["a", "b", "c", "d"];
letters.forEach((e) => console.log("bucle forEach : ", e));

//vs

//for
for (let i = 0; i < letters.length; i++) {
  const e = letters[i];
  console.log("bucle for : ", e);
}