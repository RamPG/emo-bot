const { HearManager } = require('@vk-io/hear');
const { vkUser } = require('../utils/connect-vk-io');

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

const hearManager = new HearManager()
hearManager.hear('Фото', async (context) => {
  await context.send('Отправка самой крутой эмо фотки...');
  try {
    const urlList = await vkUser.api.photos.get({
      owner_id: '-197394117',
      album_id: '273558249',
    });
    const randItem = urlList.items[randomInteger(0, urlList.items.length)].sizes;
    await context.sendPhotos(
      { value: randItem[randItem.length - 1].url },
    );
  } catch (e) {
    await context.send('Упс :)) Что-то не так!');
  }
});

module.exports = hearManager;
