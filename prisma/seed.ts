import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
   // Delete any Membership records from previous seeds
   await prisma.membership.deleteMany({});

   // Create new Membership records
   const basicMembership = await prisma.membership.create({
     data: {
       level: "Basic",
       description: "1 martial art - 2 sessions per week. Monthly fee.",
       price: "£25.00",
     },
   });
   const intermediateMembership = await prisma.membership.create({
    data: {
      level: "Intermediate",
      description: "1 martial art - 3 sessions per week). Monthly fee",
      price: "£35.00",
    },
  });
  await prisma.membership.create({
    data: {
      level: "Advanced",
      description: "Any 2 martial arts - 5 sessions per week). Monthly fee",
      price: "£45.00",
    },
  });
  await prisma.membership.create({
    data: {
      level: "Elite",
      description: "Unlimited classes. Monthly fee",
      price: "£60.00",
    },
  });
  await prisma.membership.create({
    data: {
      level: "Junior",
      description: "Can attend all-kids martial arts sessions. Monthly fee",
      price: "£25.00",
    },
  });
 
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      membershipId: basicMembership.id,
    },
  });
  const intermediateMemberEmail = "intermediateMember@email.com";

  // cleanup the existing database
  await prisma.user
    .delete({ where: { email: intermediateMemberEmail } })
    .catch(() => {
      // no worries if it doesn't exist yet
    });
  
  await prisma.user.create({
    data: {
      email: intermediateMemberEmail,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      membershipId: intermediateMembership.id,
    },
  });
  
  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
