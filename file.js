const fs = require('fs');

//reading files

// fs.readFile('./dumy.txt',(error,data)=>{
// 	if(error)
// 	{
// 		console.log(error);
// 	}
// 	console.log(data.toString());
// });


//write files

// if file do not exist will create the file
// fs.writeFile('./dumy2.txt','hello nab',()=>{
// 	console.log('file was written');
// });

// // directories
// if(!fs.existsSync('./assets')){
// 	fs.mkdir('./assets', (error)=>{
// 		if(error){
// 			console.log(error);
// 		}
// 		console.log('folder created');
// 	});
// }else{
// 	fs.rmdir('./assets',(error)=>{
// 		if(error){
// 			console.log(error);
// 		}
// 		console.log('folder deleted');
// 	});
// }


//deleting files

if(fs.existsSync('./docs/delete_me.txt')){
	fs.unlink('./docs/delete_me.txt',(error)=>{
		if(error){
			console.log(error);
		}
		console.log('file deleted');
	});
}