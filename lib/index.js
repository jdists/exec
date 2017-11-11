"use strict";
const child_process_1 = require("child_process");
module.exports = (function (content) {
    if (!content) {
        return content;
    }
    return String(child_process_1.execSync(content, {
        encoding: 'utf-8',
    }));
});
