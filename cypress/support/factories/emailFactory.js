import { faker } from '@faker-js/faker';

export function criarEmailAleatorio(domino = 'gmail.com') {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Date.now()}@${domino}`;
}
