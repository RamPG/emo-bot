const fs = require('fs');
const path = require('path');
const { VK } = require('vk-io');

const tokens = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/token.json'), 'utf8'));
module.exports = {
  vkGroup: new VK({
    token: tokens.tokenGroup,
  }),
  vkUser: new VK({
    token: tokens.tokenUser,
  }),
};
