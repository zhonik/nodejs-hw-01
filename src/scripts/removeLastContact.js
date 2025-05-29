import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();

    if (!currentContacts) return;

    currentContacts.pop();

    await writeContacts(JSON.stringify(currentContacts));
  } catch (error) {
    console.error('Помилка видалення контакту', error);
  }
};

removeLastContact();
