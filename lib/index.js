"use strict";
const child_process_1 = require("child_process");
module.exports = (function (content) {
    if (!content) {
        return content;
    }
    return new Promise((resovle, reject) => {
        child_process_1.exec(content, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resovle(stdout);
        });
    });
});
