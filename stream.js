const fs = require('fs');

const readStream = fs.createReadStream('./docs/dumy3.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/dumy4.txt');

// readStream.on('data',(chuck)=>{
// 	console.log('----NEW CHUNK----');
// 	// console.log(chuck.toString());
// 	console.log(chuck);
// 	writeStream.write('\nNEW CHUCK\n');
// 	writeStream.write(chuck);
// });

// piping
readStream.pipe(writeStream);