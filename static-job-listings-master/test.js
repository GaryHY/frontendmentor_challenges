let obj = {
    id: 3,
    name: "Gary",
    age: 26
}

let hello = "<p>`hello ${obj.name}`</p>"
console.log(hello);

let languages = [ "HTML", "CSS", "JavaScript" ];
let res = languages.map(language => `<li>${language}</li>`);
console.log(res);

let ans = languages.filter(el => el.length == 4);
console.log(ans);


let vec1 = [1,2,3,4,5];
let vec2 = [1,2,3];
let arr = vec1.includes(vec2);
let arr2 = vec2.includes(vec1);
console.log("La valeur de array 1 : ", arr);
console.log("La valeur de array 2 : ", arr2);
