const fs = require("fs-extra");
const path = require("path");

const p = "/home/user/Documents/sst/webdev/node_practice/filee.txt";
const dest = "/home/user/Documents/sst/webdev/node_practice/hehe/file.txt";

const moveFile = async (src, dst) => {
  try {
    if (!(await fs.pathExists(src))) {
      console.log("Source file does not exist");
      return;
    }

    const destDir = path.dirname(dst);
    if (!(await fs.pathExists(destDir))) {
      console.log("Destination directory does not exist");
      return;
    }

    const dirname = path.dirname(src);
    const extension = path.extname(src);
    console.log(`Directory: ${dirname}`);
    console.log(`Extension: ${extension}`);

    await fs.move(src, dst);
    console.log("File moved successfully");
  } catch (err) {
    console.error("Error:", err);
  }
};

// Execute the function
moveFile(p, dest);
