import { PATH_DB } from '../constants/contacts.js';
import fsPromises from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const newContact = await fsPromises.writeFile(
      PATH_DB,
      updatedContacts,
      'utf8',
    );
    return newContact;
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
};
