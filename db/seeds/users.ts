import { db } from '@/db/index';
import { users, UserSchema } from '../schema';

const dummyUsers = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    emailVerified: new Date(),
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    emailVerified: new Date(),
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
  },
  {
    name: 'Bob Wilson',
    email: 'bob.wilson@example.com',
    emailVerified: new Date(),
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
  },
  {
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    emailVerified: new Date(),
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
  },
  {
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    emailVerified: new Date(),
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
  },
] as const;

const mock = () => {
  const data: UserSchema[] = [...dummyUsers];
  return data;
};

export async function seed() {
  try {
    await db.insert(users).values(mock());
    console.log('Seeding completed');
  } catch (err) {
    console.error('Error seeding the database', err);
  } finally {
    await db.$client.end();
    console.log('Disconnected from the database');
  }
}

seed();
