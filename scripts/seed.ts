const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Post-Workout Nutrition Sampling Sessions" },
        { name: "Gaining Weight with a Healthy Diet" },
        { name: "Building Healthy Habits for Long-Term Success" },
        { name: "Losing Weight with a Healthy Diet" },
        { name: "Caloric Balance and Weight Management" },
        { name: "Maintaining Weight with a Healthy Diet" },
        { name: "Sleep, Stress Management, and Weight" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();