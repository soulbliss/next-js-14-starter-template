import { users, UserSchema } from "../schema"
import { faker } from "@faker-js/faker"
import { db } from '@/db/index'

const mock = () => {
    const data: UserSchema[] = []
    for (let i = 0; i < 10; i++) {
        data.push({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            emailVerified: new Date(),
            image: faker.image.avatar(),
        })
    }
    return data
}

export async function seed() {
    try {
        await db.insert(users).values(mock())
        console.log('Seeding completed')
    } catch (err) {
        console.error('Error seeding the database', err)
    } finally {
        await db.$client.end()
        console.log('Disconnected from the database')
    }
}

seed()