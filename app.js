const express = require('express');

//express app
const app = express();

//register views engine
app.set('view engine', 'ejs');//default
// app.set('views', 'my folder where i keep my views custom');//custom folder name

app.listen(3000);
let cookies_name = [];
const puppeteer = require('puppeteer');
const start = async function(a, b) {
	const browser = await puppeteer.launch({});
	const page = await browser.newPage();
	await page.goto('https://www.stackoverflow.com/', {waitUntil : 'networkidle0' });
	// networkidle2, domcontentloaded, load are the options for wai until
	// Here we can get all of the cookies
	var content = await page._client.send('Network.getAllCookies');
	
	// console.log(JSON.stringify(content, null, 4));
	content.cookies.forEach(element => {
		cookies_name.push(element.name);
			console.log(element.name);
			
	});
	// console.log(content.cookies[0].name);
}

// Call start
start();


app.get('/', function (req, res) {
  // res.send('');
	// res.sendFile('./views/index.html', {root:__dirname});
	const blogs = [
		{title: 'First name is here', snippet: "lorem ipsum"},
		{title: 'second name is here', snippet: "lorem ipsum"},
		{title: 'third name is here', snippet: "lorem ipsum"},
		{title: 'cookies name', snippet: cookies_name},
	];
	res.render('index', {title: 'Home', blogs});// render the index file
});
 
// app.get('/about', function (req, res) {
// 	// res.sendFile('./views/about.html', {root:__dirname});
// 	res.render('about', {title: 'about'});// render the about file
// });
 
// app.get('/blogs/create', function (req, res) {
// 	res.render('create', {title: 'create'});
// });

// //redirects
// // app.get('/about-us', function (req, res) {
// // 	res.redirect('/about');
// // });

// //404 need to go to bottom
// app.use((req,res)=>{
// 	// res.status(404).sendFile('./views/404.html', {root:__dirname});
// 	res.status(404).render('404', {title: 'Not found page'});
// });