const Koa = require('koa');
const route = require('koa-route');
const path = require('path');
const serve = require('koa-static');
const fs = require('fs.promised');
const cp = require('child_process');
// const express = require('express');

const app = new Koa();
// Es6 function
const main = async ctx => {
   ctx.response.body = await fs.readFile(path.join(__dirname,'dist/index.html'), 'utf8');
};
// koa-route
app.use(route.get('/', main));

// static html
const main1 = serve(path.join(__dirname));
app.use(main1);

/*app.use(route.get('/open', ctx => {
	console.log(ctx.request.query.code)
	ctx.status = 200;
	cp.exec('python GPIO.py', (err, stdout,stderr) => {
		//console.log(222)
	})
}));*/
/*app.use(route.get('/close', ctx => {
	console.log(ctx.request.query.code)
	ctx.status = 200;
	cp.exec('python close.py', (err, stdout,stderr) => {
		//console.log(111)
	})
}));*/
var runCmd = null;
app.use(route.get('/judge', ctx => {
	ctx.status = 200;
	if(ctx.request.query.code){
		switch(ctx.request.query.code) {
			case "close":
			case "aaaa":
				if(runCmd) {
					runCmd.kill('SIGTERM');
				}
				break;
		}
		runCmd = cp.spawn('python', ['/opt/RaspBerrypi/python/GPIO.py', ctx.request.query.code])
	}else{
		console.log(111)
		// cp.exec('python /opt/RaspBerrypi/python/close.py ' + ctx.request.query.code + '', (err, stdout,stderr) => {
		// })
	}
}));
app.listen(3000);
