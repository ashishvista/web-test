import { faker } from '@faker-js/faker';

export const randomData = {
    name: faker.internet.userName(),
    length: faker.number.int(19),
    width: faker.number.int(19),
    height: faker.number.int(19),
};