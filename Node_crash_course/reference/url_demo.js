const url = require('url')

const myUrl = new URL('http://mysite/hello.html?id=100&status=active');

//serialized URl
console.log (myUrl.href);
console.log (myUrl.toString());

//Host / Route domain

console.log (myUrl.host);

//does not get port
console.log (myUrl.hostname);

//pathname

console.log (myUrl.pathname);

//serialized Query

console.log (myUrl.search);

//params object

console.log (myUrl.searchParams);

//add params
myUrl.searchParams.append('abc', '123')

console.log (myUrl.searchParams);

//Loop through param
myUrl.searchParams.forEach((value, name) => console.log(`${name}`,`${value}`));