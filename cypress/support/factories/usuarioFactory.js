import { faker } from '@faker-js/faker';

export function criarUsuarioAleatorio() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const countries = ['United States', 'Canada', 'Australia', 'India', 'New Zealand', 'Singapore', 'Israel'];

  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Date.now()}@gmail.com`,
    password: 'senha123',
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode('#####-###'),
    mobile: faker.phone.number('+###########'),
    days: faker.number.int({ min: 1, max: 31 }).toString(),
    months: faker.helpers.arrayElement(months),
    years: faker.number.int({ min: 1950, max: 2005 }).toString(),
    country: faker.helpers.arrayElement(countries),
    gender: faker.helpers.arrayElement(['id_gender1', 'id_gender2']),
  };
}
