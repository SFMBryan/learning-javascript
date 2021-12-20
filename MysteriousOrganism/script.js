// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, dnaBases) => {
  return {
    specimenNum: num,
    dna: dnaBases,
    mutate() {
      let i = Math.floor(Math.random() * 15);
      let thisRandBase = this.dna[i];
      let randBase = returnRandBase();
      while(thisRandBase === randBase) {
        randBase = returnRandBase();
      }
      this.dna[i] = randBase;
      return this.dna;
    },
    compareDNA(obj) {
      let thisDNA = this.dna;
      let otherDNA = obj.dna;
      let counter = 0
      thisDNA.forEach((el, i) => {
        if (el === otherDNA[i]) {
          counter += 1;
        }
      });
      console.log(`Specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${(counter / thisDNA.length * 100).toFixed(2)}% in common`)
    },
    willLikelySurvive() {
      let result = this.dna.filter(el => el === 'G').length / 15 * 100;
      if (result < 60) {
        result = this.dna.filter(el => el === 'C').length / 15 * 100;
      }
      if (result >= 60) return true;
      return false;
    }
  }
}

let pAequorInstances = [];
let counter = 0;
while(pAequorInstances.length < 30) {
  let pAequorsInArr = pAequorInstances.length;
  let x = pAequorFactory(pAequorsInArr, mockUpStrand());
  if (x.willLikelySurvive()) {
    pAequorInstances.push(x);
  }
  counter++;
}

console.log(pAequorInstances);
console.log();
console.log(counter);
