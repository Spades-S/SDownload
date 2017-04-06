var fs = require('fs');
fs.stat('./src/copy.js', (err, stats) => {
    // console.log(err);
    // console.log(JSON.stringify(stats));
    let read = fs.createReadStream('./src/copy.js');
    let write = fs.createWriteStream('./src/write.js');
    // write.on('error', function(){
    //     console.log('there is an error');
    // });

    read.on('data', data => {
        console.log(data + '\n spades');
    })
    read.pipe('write');

})
