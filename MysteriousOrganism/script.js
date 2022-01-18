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
      console.log(`Specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${(counter / thisDNA.length * 100).toFixed(2)}% in common`);
      return (counter / thisDNA.length * 100).toFixed(2);
    },
    willLikelySurvive() {
      let result = this.dna.filter(el => el === 'G').length / 15 * 100;
      if (result < 60) {
        result = this.dna.filter(el => el === 'C').length / 15 * 100;
      }
      if (result >= 60) return true;
      return false;
  },
  complementStrand(obj) {
      const bool = this.dna.every((el, i) => {
        if (el === 'A' && obj.dna[i] === 'T' || el === 'T' && obj.dna[i] === 'A') {
          return true;
        } else if (el === 'C' && obj.dna[i] === 'G' || el === 'G' && obj.dna[i] === 'C') {
          return true;
        } else return false;
      })
      return bool;
    }
  }
}

let pAequorInstances = [];
let counter = 0;
let arrLen = pAequorInstances.length;
while(pAequorInstances.length < 30) {
  let x = pAequorFactory(arrLen, mockUpStrand());
  if (x.willLikelySurvive()) {
    pAequorInstances.push(x);
    arrLen++;
  }
  counter++;
}

console.log(pAequorInstances);
console.log();
console.log(counter);
console.log();

// const complementaryStrand = pAequorInstances.reduce((previousVal, currentVal) => {
//   console.log(previousVal.complementStrand(currentVal));
//   if (previousVal.complementStrand(currentVal)) {
//     console.log(previousVal);
//     return currentVal;
//   } else return currentVal;
// })

// console.log(complementaryStrand)


// ComplementStrand Function Test!
// const x = {
//     specimenNum: 1,
//     dna: [ 'T', 'A', 'A', 'G', 'G', 'C', 'G', 'T', 'G', 'G', 'G', 'G', 'C', 'G', 'G' ],
//     mutate() {
//       let i = Math.floor(Math.random() * 15);
//       let thisRandBase = this.dna[i];
//       let randBase = returnRandBase();
//       while(thisRandBase === randBase) {
//         randBase = returnRandBase();
//       }
//       this.dna[i] = randBase;
//       return this.dna;
//     },
//     compareDNA(obj) {
//       let thisDNA = this.dna;
//       let otherDNA = obj.dna;
//       let counter = 0
//       thisDNA.forEach((el, i) => {
//         if (el === otherDNA[i]) {
//           counter += 1;
//         }
//       });
//       console.log(`Specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${(counter / thisDNA.length * 100).toFixed(2)}% in common`)
//     },
//     willLikelySurvive() {
//       let result = this.dna.filter(el => el === 'G').length / 15 * 100;
//       if (result < 60) {
//         result = this.dna.filter(el => el === 'C').length / 15 * 100;
//       }
//       if (result >= 60) return true;
//       return false;
//     },
//     complementStrand(obj) {
//       const bool = this.dna.every((el, i) => {
//         if (el === 'A' && obj.dna[i] === 'T' || el === 'T' && obj.dna[i] === 'A') {
//           return true;
//         } else if (el === 'C' && obj.dna[i] === 'G' || el === 'G' && obj.dna[i] === 'C') {
//           return true;
//         } else return false;
//       })
//       return bool;
//     }
//   };

// const y = {
//     specimenNum: 2,
//     dna: [ 'A', 'T', 'T', 'C', 'C', 'G', 'C', 'A', 'C', 'C', 'C', 'C', 'G', 'C', 'C' ],
//     mutate() {
//       let i = Math.floor(Math.random() * 15);
//       let thisRandBase = this.dna[i];
//       let randBase = returnRandBase();
//       while(thisRandBase === randBase) {
//         randBase = returnRandBase();
//       }
//       this.dna[i] = randBase;
//       return this.dna;
//     },
//     compareDNA(obj) {
//       let thisDNA = this.dna;
//       let otherDNA = obj.dna;
//       let counter = 0
//       thisDNA.forEach((el, i) => {
//         if (el === otherDNA[i]) {
//           counter += 1;
//         }
//       });
//       console.log(`Specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${(counter / thisDNA.length * 100).toFixed(2)}% in common`);
//     },
//     willLikelySurvive() {
//       let result = this.dna.filter(el => el === 'G').length / 15 * 100;
//       if (result < 60) {
//         result = this.dna.filter(el => el === 'C').length / 15 * 100;
//       }
//       if (result >= 60) return true;
//       return false;
//     },
//     complementStrand(obj) {
//       const bool = this.dna.every((el, i) => {
//         if (el === 'A' && obj.dna[i] === 'T' || el === 'T' && obj.dna[i] === 'A') {
//           return true;
//         } else if (el === 'C' && obj.dna[i] === 'G' || el === 'G' && obj.dna[i] === 'C') {
//           return true;
//         } else return false;
//       })
//       return bool;
//     }
//   };

// console.log(x.complementStrand(y));
