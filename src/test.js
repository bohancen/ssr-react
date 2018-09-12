// replace all 原理
// withThis = withThis.replace(/\$/g,"$$$$");
// return inThis.replace(new RegExp(replaceThis.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g,"\\$&"),"g"), withThis);
// };

// if (typeof (exports) !== "undefined") {
// if (typeof (module) !== "undefined" && module.exports) {
//     exports = module.exports = replaceall;
// }
// exports.replaceall = replaceall;
// }

// replace 正则
let key = '[haha]'
let word = '[haha],safasfasfd[haha]'

let reg = new RegExp(key.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g,"\\$&"),'g')
let result = word.replace(reg,'img')
console.log(result)