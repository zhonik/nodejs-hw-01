import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contactsLength = await readContacts();
    return contactsLength.length;
  } catch (error) {
    console.error('Помилка підрахунку контактів', error);
  }
};

console.log(await countContacts());
