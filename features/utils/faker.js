import { faker } from '@faker-js/faker';

export const randomData = {
    name: faker.internet.userName(),
    length: faker.number.int({ min: 1, max: 19 }),
    width: faker.number.int({ min: 1, max: 19 }),
    height: faker.number.int({ min: 1, max: 19 }),
};