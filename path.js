const fs = require('fs-extra');
const path = require('path');

const p = '/home/user/Documents/sst/webdev/node_practice/filee.txt';
const dest = '/home/user/Documents/sst/webdev/node_practice/hehe/file.txt';

// Check if source file exists
if (!fs.existsSync(p)) {
    console.log("Source file does not exist");
    return;
}

// Check if destination directory exists
const destDir = path.dirname(dest);
if (!fs.existsSync(destDir)) {
    console.log("Destination directory does not exist");
    return;
}

const dirname = path.dirname(p);
const extension = path.extname(p);
console.log(dirname);
console.log(extension);

fs.move(p, dest, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("sorry darling")
});