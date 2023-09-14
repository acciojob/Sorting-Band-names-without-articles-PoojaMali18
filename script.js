let regexp = /\bthe\b|\ban\b|\ba\b/gi;

let arr = ['The Virupaksha Temple', 'a Victoria Memorial', 'an Tajmahal'];
let articleless = [];
let mp = {};

for (let i = 0; i < arr.length; i++) {
  let articlelessItem = arr[i].replace(regexp, "").trim();
  articleless.push(articlelessItem);
  mp[articlelessItem] = arr[i];
}

articleless.sort();
let ans = [];
for (let i of articleless) {
  ans.push(mp[i]);
}

console.log(ans);
