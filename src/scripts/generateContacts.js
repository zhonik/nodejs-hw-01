import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      newContacts.push(contact);
    }

    const updatedContacts = [...currentContacts, ...newContacts];

    await writeContacts(JSON.stringify(updatedContacts));
  } catch (error) {
    console.error('Помилка додавання контактів до файлу:', error);
  }
};

generateContacts(5);
