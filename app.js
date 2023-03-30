const NodeRSA = require('node-rsa');
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer)
    })
  })
}

const main = async () => {
  const text = await question('Enter text: ');
  const lengthKey = await question("Enter encrypt's length (must be a multiple of 8): ");

  const key = new NodeRSA({b: lengthKey});

  const encrypted = key.encrypt(text, 'base64');
  const decrypted = key.decrypt(encrypted, 'utf8');

  console.log('decrypted: ', decrypted);
  console.log('encrypted: ', encrypted);
  rl.close()
}
main();