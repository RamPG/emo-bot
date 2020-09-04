const { HearManager } = require('@vk-io/hear');

const hearManager = new HearManager();
hearManager.hear('Перевод', async (context) => {
  await context.send('Перевод');
});

module.exports = hearManager;
