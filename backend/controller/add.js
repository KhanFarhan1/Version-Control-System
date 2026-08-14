const fs = require("fs").promises;
const path = require("path");

async function addRepo(filePath) {
  const repoPath = path.resolve(process.cwd(), ".dummy_git");
  const staging_area = path.join(repoPath, "staging");
  try {
    await fs.mkdir(staging_area, { recursive: true });
    const fileName = path.basename(filePath);
    await fs.copyFile(filePath, path.join(staging_area, fileName));
    console.log(`File ${fileName} added to staging area`);
  } catch (error) {
    console.error(`Something went wrong ${error}`);
  }
}

module.exports = { addRepo };
