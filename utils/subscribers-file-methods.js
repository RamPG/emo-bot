const path = require('path');
const fs = require('fs');

const file = path.resolve(__dirname, '../data/subscribers.json');

module.exports.readSub = function () {
  return JSON.parse(fs.readFileSync(file, 'utf8')).subs;
};
module.exports.writeSub = function (subList) {
  fs.writeFileSync(file, JSON.stringify({ subs: subList }));
};
