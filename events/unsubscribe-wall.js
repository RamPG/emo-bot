const { HearManager } = require('@vk-io/hear');
const { readSub, writeSub } = require('../utils/subscribers-file-methods');

const hearManager = new HearManager();
hearManager.hear('Отписаться', async (context) => {
  const userId = context.senderId;
  const subList = readSub();
  const indexId = subList.findIndex((element) => element === userId);
  if (indexId !== -1) {
    await context.send('Вы отписались');
    subList.splice(indexId, indexId);
    writeSub(subList);
  } else {
    await context.send('Вы не были подписаны!');
  }
});

module.exports = hearManager;
