const url = require('url');

const myUrl = new URL('http://web.com:5000/hello.html?id=100&status=1');
console.log(myUrl);

// Serialized Url
console.log(myUrl.href);
console.log(myUrl.toString());

// Append param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));
