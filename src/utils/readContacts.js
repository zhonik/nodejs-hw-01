import { PATH_DB } from '../constants/contacts.js';
import fsPromises from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fileContacts = await fsPromises.readFile(PATH_DB, 'utf8');
    return JSON.parse(fileContacts);
  } catch (error) {
    console.error('Помилка читання файлу:', error);
  }
};
