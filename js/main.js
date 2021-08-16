const btnCreate = $('.btn-create');
const btnRestart = $('.btn-restart');

btnCreate.addEventListener('click', createMelody);
btnRestart.addEventListener('click', () =>{restartMelody(createdMelody)} ); 

const createdMelody= [];

const Notes = [
  $('#C'),
  // $('#Cs'),
  $('#D'),
 // $('#Ds'),
  $('#E'),
  $('#F'),
 // $('#Fs'),
  $('#G'),
 // $('#Gs'),
  $('#A'),
 // $('#As'),
  $('#B'),
  $('#C2')
]

//при 120/мин
const Prolons = [ 1000, 500, 250, 125, 62];
const amountNote = 500;

//----------------------------------------------------------------------------------
function restartMelody (createdMelody) {
  if(createdMelody.length === 0) {
    console.log("Ничего нет");
    return
  }
  let startInt = 0;
  for (let i = 0; i < createdMelody.length; i++) {
    startInt += createdMelody[i].long
    setTimeout(() => { createdMelody[i].note.play();}, startInt)
  }
}

function createMelody() {
  const prolong = [0];
  for (let i = 0; i < amountNote; i++) {
    let randomProlong = Math.floor(Math.random() * Prolons.length)
    prolong.push(Prolons[randomProlong] * .5)
  }

  let startInt = 0;
  for (let i = 0; i < amountNote; i++) {
    startInt += prolong[i]
    let randomNote = Math.floor(Math.random() * Notes.length)
    setTimeout(() => { 
      Notes[randomNote].play();
      if(i === amountNote-1) {
        console.log('Done');
      }
    }, startInt)
    createdMelody.push({note: Notes[randomNote], long: prolong[i]})
  }
}

function $(el) { return document.querySelector(el) }