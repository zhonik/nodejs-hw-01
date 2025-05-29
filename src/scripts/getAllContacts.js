import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const currentContacts = await readContacts();
    return currentContacts;
  } catch (error) {
    console.error('Помилка отримання контактів', error);
  }
};

console.log(await getAllContacts());
