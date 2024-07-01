const fs = require('fs');
fs.mkdir('dirtobedeleted', (err) => {
    if(err) {console.log(err);}
    console.log("done");
})
fs.rmdir( 'dirtobedeleted', (err) => {
    if(err) {console.log(err);}
    console.log("done");
});
const newName='filee.txt'
fs.renameSync('file.txt', newName, (err) => {
    if(err) { console.log(err);} 
    console.log("done");
})