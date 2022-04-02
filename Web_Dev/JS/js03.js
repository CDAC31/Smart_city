let Friends = ["rish", "akki", "bedre", "dj"];
// Friends.forEach(function f(ele) {
//     console.log("hello " + ele);
// })

for (ele of Friends) {
    console.log("hi " + ele)
}

let emp = {
    name: "doj",
    sal: 10,
    empid: 101234,
}

for (key in emp) {
    console.log(` ${key}:  ${emp[key]}`);
}