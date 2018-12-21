const generator = require('generate-password');

const password = generator.generate({
  length: 20,
});

console.log(password);

