import chalk from "chalk";
import fs from "fs";

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellowBright("A jegyzeteid:"))
return  notes.forEach((note) => 
    console.log(note.title)
  )
} 

const addNote = (title, body) => {
  const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => {
    //  annyiszor fut le ez a funkció ahány object van összesen a tömbben
    //  return note.title === title;
    //  });
  const duplicateNote = notes.find((note) => note.title === title)

  // debugger  ->  Node debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.greenBright.inverse.bgWhiteBright("Új jegyzet hozzáadva"));
  } else {
    console.log(chalk.redBright.inverse.bgWhiteBright("A jegyzet címe foglalt!"));
  }
};

const saveNotes =(notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title)
  if(note){
  console.log(chalk.inverse.bold(note.title) + ": " + note.body)
  } else {console.log(chalk.redBright.bold("Nem találtam meg a keresett jegyzetet."))}
}

const removeNote = (title) => {
   const adatok = loadNotes();
   const notesToKeep = adatok.filter((note) =>   //  a filter metódus a false értékű objecteket nem rakja bele a tömbbe, csak a true értékű objecteket, így megkapjuk a megváltozott új tömbünket az objectetekkel, amik belekerülnek.
    note.title !== title
   )
   if(notesToKeep.length === adatok.length){
    console.log(chalk.bgRedBright.bold("Nem találtam ilyen jegyzetet."))
   } else{
    saveNotes(notesToKeep);
    console.log(chalk.bgGreenBright.bold("Jegyzet sikeresen törölve"));
   }
   
}

export default {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
};

//  module.exports = getNotes
