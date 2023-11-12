import chalk from "chalk";
import yargs from "yargs";

import notes from "./notes.js";

//  Személyre szabni a yargs verzióját
yargs.version("1.1.0");

//  Csinálni egy hozzáadás parancsot
yargs.command({
  command: "add",
  describe: "Új jegyzet hozzáadása",
  builder: {
    title: {
      describe: "Jegyzet cím",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "A jegyzet tartalma",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv)  
    {notes.addNote(argv.title, argv.body)}
  
});

//  Törlés parancs
yargs.command({
  command: "remove",
  describe: "Törölni egy jegyzetet",
  builder: {
    title: {
      describe: "A jegyzet címe",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//  Lista parancs létrehozása
yargs.command({
  command: "list",
  describe: "Jegyzetlista",
  handler() {
    notes.listNotes();
  },
});

//  Olvasni(Read) parancs létrehozása
yargs.command({
  command: "read",
  describe: "Adatok olvasása",
  builder: {
    title: {
      describe: "Cím",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();

// const command = process.argv[2]

// if(command === "add") {
//     console.log("Jegyzet hozzáadása")
// } else if(command ==="remove") {
//     console.log("Jegyzet eltávolítása")
// }

//  fs.writeFileSync("notes.txt", "A nevem István")

//  fs.appendFileSync("notes.txt", " Hello")

// const fs = require("fs")

//  import validator from "validator"

//  const notes = require("./notes.js")

// const validator = require("validator")
