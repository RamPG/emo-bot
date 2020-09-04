const { HearManager } = require('@vk-io/hear');
const { readSub, writeSub } = require('../utils/subscribers-file-methods');

const hearManager = new HearManager();
hearManager.hear('Подписаться', async (context) => {
  const userId = context.senderId;
  const subList = readSub();
  const indexId = subList.findIndex((element) => element === userId);
  if (indexId === -1) {
    await context.send('Вы подписались!');
    subList.push(context.senderId);
    writeSub(subList);
  }
  else {
    await context.send('Вы уже подписаны!');
  }
});

module.exports = hearManager;
