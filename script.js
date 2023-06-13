const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = '';
const generateKey = (a, characters) => {
  for (let i = 0; i < a; i++) {
    key += characters[Math.floor(Math.random() * characters.length)];
  }
  return key;
};

console.log(generateKey(16, characters));
