const btnCreate = $('.btn-create');
const btnRestart = $('.btn-restart');
const btnTogglePlay = $('.btn-pause-toggle');
let isPause = false;
btnCreate.addEventListener('click', createMelody);
btnRestart.addEventListener('click', () => { restartMelody(createdMelody) });
btnTogglePlay.addEventListener('click', () => {
  isPause = !isPause
})

const createdMelody = [];

//https://www.musicca.com/ru/pianino
const Notes = [
  $('#C'),
  //$('#Cs'),
  $('#D'),
  //$('#Ds'),
  $('#E'),
  //$('#F'),
  $('#Fs'),
  $('#G'),
  //$('#Gs'),
  $('#A'),
  //$('#As'),
  $('#B'),
  $('#C2')
]

//при 120/мин
const Prolons = [2000, 1000, 500, 250];
const amountNote = 50;

//----------------------------------------------------------------------------------
function restartMelody(createdMelody) {
  
  // Notes[0].playbackRate = 8;
  // console.log(Notes[0].playbackRate);
  // Notes[0].play();
  


  if (createdMelody.length === 0) {
    console.log("Ничего нет");
    return
  }
  let startInt = 0;
  for (let i = 0; i < createdMelody.length; i++) {
    startInt += createdMelody[i].long
    setTimeout(() => { createdMelody[i].note.play(); }, startInt)
  }
}

function createMelody() {
  const prolong = [0];
  for (let i = 0; i < amountNote; i++) {
    let randomProlong = Math.floor(Math.random() * Prolons.length)
    prolong.push(Prolons[randomProlong]) //ускорять тут
  }


  let startInt = 0;
  for (let i = 0; i < amountNote; i++) {
    startInt += prolong[i]
    let randomNote = Math.floor(Math.random() * Notes.length)
    setTimeout(() => {
      if (!isPause) {
        Notes[randomNote].play();
        if (i === amountNote - 1) {
          console.log('Done');
        }
      } else {
        return
      }
    }, startInt)
    createdMelody.push({ note: Notes[randomNote], long: prolong[i] })
  }
}


function $(el) { return document.querySelector(el) }