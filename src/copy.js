import fs from "fs";
export  default  function copyFile(source, target, process) {
    return new Promise((resolve, reject) => {
        fs.stat(source, (err, stats) => {
            if (err) {
                return reject(err);
            }
            let read = fs.createReadStream(source);
            let write = fs.createWriteStream(target)；
            read.on('error', reject);
            write.on('error', reject);

            let copySize = 0;
            read.on('data', data => {
                copySize = data + copySize;
                process && process(copySize, stats.size); //提示信息
            });
            read.on('end', () => resolve(target));
            read.pipe(write);



        });


    })

}
