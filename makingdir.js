const fs = require("fs").promises;

async function main() {
  try {
    await fs.mkdir("dirtobedeleted");
    console.log("Directory created");

    const newName = "filee.txt";
    await fs.rename("file.txt", newName);
    console.log("File renamed");

    await fs.rmdir("dirtobedeleted");
    console.log("Directory removed");
  } catch (err) {
    console.error(err);
  }
}

main();
