const { vkGroup } = require('./utils/connect-vk-io');
const sendPhoto = require('./events/send-photo');
const translateMessage = require('./events/translate-message');
const subscribeWall = require('./events/subscribe-wall');
const unsubscribeWall = require('./events/unsubscribe-wall');
const mailingWall = require('./events/mailing-wall');

vkGroup.updates.on('message_new', sendPhoto.middleware);
// vkGroup.updates.on('message_new', translateMessage.middleware);
vkGroup.updates.on('message_new', subscribeWall.middleware);
vkGroup.updates.on('message_new', unsubscribeWall.middleware);
vkGroup.updates.on('wall_post_new', mailingWall);

vkGroup.updates.start().catch(console.error);
