const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controller/init");
const { addRepo } = require("./controller/add");
const { pushRepo } = require("./controller/push");
const { pullRepo } = require("./controller/pull");
const { commitRepo } = require("./controller/commit");
const { revertRepo } = require("./controller/revert");

yargs(hideBin(process.argv))
  .command("init", "Init the respo", {}, initRepo)
  .command(
    "add <file>",
    "add the respo",
    (yargs) => {
      yargs.positional("file", {
        describe: "Adding file in Staging area",
        type: "string",
      });
    },
    addRepo,
  )
  .command("push", "push the respo", {}, pushRepo)
  .command("pull", "pull the respo", {}, pullRepo)
  .command(
    "revert <revertID>",
    "revert the respo",
    (yargs) => {
      yargs.positional("commitID", {
        describe: "Id for revert",
        type: "string",
      });
    },
    revertRepo,
  )
  .command(
    "commit <message>",
    "Commit the respo",
    (yargs) => {
      yargs.positional("message", {
        describe: "Commit Message",
        type: "string",
      });
    },
    commitRepo,
  )
  .demandCommand(1, "You need atleast one command")
  .help().argv;
