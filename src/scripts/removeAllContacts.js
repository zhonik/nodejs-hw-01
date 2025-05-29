import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    return await writeContacts(JSON.stringify([]));
  } catch (error) {
    console.error('Помилка при видаленні контактів', error);
  }
};

removeAllContacts();
