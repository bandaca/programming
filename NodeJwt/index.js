
let jwt = require('jsonwebtoken');

let secret = "shhh";


let createTokenHMAC = (secret) => {
    return jwt.sign({ foo: 'bar', user: 'user@domain.com' }, secret);
}

let validateTokenSymmetric = (token, secret) => {
    return jwt.verify(token, secret);
}

let token = createTokenHMAC(secret);
console.log(token);

let decripted = validateTokenSymmetric(token, secret);
console.log(decripted);
