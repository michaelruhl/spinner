process.stdout.write('hello from spinner2.js... \rheyyy\n');
let time = 200;
let humps = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-'];
for (let lumps of humps)  {
setTimeout(() => {
  process.stdout.write(lumps);}
, time);
time+= 200;
}

  