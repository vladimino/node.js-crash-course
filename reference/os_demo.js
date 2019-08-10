const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Memory info
console.log(os.freemem(), '/', os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
