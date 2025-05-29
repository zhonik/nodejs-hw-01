import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();
    const oneContact = createFakeContact();
    const updatedContacts = [...currentContacts, oneContact];
    await writeContacts(JSON.stringify(updatedContacts));
  } catch (error) {
    console.error('Помилка додавання контакту', error);
  }
};

addOneContact();
