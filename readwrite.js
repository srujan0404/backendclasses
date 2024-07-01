const fs = require('fs');
const content = 'hehe';
const append="class is going on";

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('An error occurred while reading the file:', error);
        return;
    }
    console.log('File content:', data);

    const content = 'hehe';
    fs.writeFile('file.txt', content, 'utf8', (error) => {
        if (error) {
            console.error('An error occurred while writing to the file:', error);
            return;
        }
        console.log('File content:', content);
    });
});

try {
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log('File content:', data);

    
    fs.writeFileSync('file.txt', content, 'utf8');
    console.log('File content:', content);

    fs.appendFileSync('file.txt', append, 'utf8');
    console.log(fs.readFileSync('file.txt', 'utf-8'));
} catch (error) {
    console.error('An error occurred:', error);
}
//difference between require and import