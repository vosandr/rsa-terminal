const NodeRSA = require('node-rsa');
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const text = () => {
  return new Promise((resolve) => {
    rl.question('Enter text\n', (answer) => {
      resolve()
    })
  })
}

const lengthKey = () => {
  return new Promise((resolve) => {
    rl.question("Enter key's length(must be a multiple of 8)\n", (answer) => {
      resolve()
    })
  })
}

const main = async () => {
    await text()
    await lengthKey()

    const key = new NodeRSA({b: 1024});
    const encrypted = key.encrypt(text, 'base64');
    console.log('encrypted: ', encrypted);
    const decrypted = key.decrypt(encrypted, 'utf8');
    console.log('decrypted: ', decrypted);
    rl.close()
}

main()