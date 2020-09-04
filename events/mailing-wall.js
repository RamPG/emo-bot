const { vkGroup } = require('../utils/connect-vk-io');
const { readSub } = require('../utils/subscribers-file-methods');

module.exports = async function (context) {
  const subList = readSub().slice(1);
  const { text } = context.wall;
  const mailText = `${text.slice(0, Math.floor(text.length / 2))}... Продолжение в источнике!!!`;
  subList.forEach((id) => {
    try {
      vkGroup.api.messages.send({
        peer_id: id,
        random_id: Date.now(),
        message: mailText,
      });
    } catch (e) {
      console.log(e, id);
    }
  });
};
