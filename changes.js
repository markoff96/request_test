const objectA = {
  a: 10,
  b: "abc",
};

const copyObjectA = { ...objectA };
copyObjectA.a = 50;
copyObjectA.c = "xyz";
console.log(objectA);
alert(objectA);
