const comparison = (fraction, integers, necessaryTimes) => {
     const [numerator, denominator] = fraction.split('/').map(Number);
     const total = (numerator / denominator) * necessaryTimes;
     return total === integers;
}

const updateanswer = (id, fraction, integers, necessaryTimesId) => {
     const necessaryTimes = document.getElementById(necessaryTimesId).value;

     if (comparison(fraction, integers, necessaryTimes)) {
          let temporaryScore = parseInt(localStorage.getItem('temporaryScore') || 0);
          localStorage.setItem("temporaryScore", temporaryScore + 1);
          document.getElementById(id).textContent = "Está Certo. Parabens!";
     } else {
          document.getElementById(id).textContent = "Está Certo. Tente Novamente!";
     }
}

const scores = () => {
     if (localStorage.getItem("temporaryScore") == 5) {
          let score = parseInt(localStorage.getItem('score') || 0);
          localStorage.setItem("score", score + 20);

          clearScores();
     } else {
          clearScores();
     }
}

const clearScores = (clearAll = false) => {
     if (clearAll) {
          localStorage.setItem("score", 0);
          localStorage.setItem("temporaryScore", 0);
     } else {
          localStorage.setItem("temporaryScore", 0);
     }
}

const showScore = () => {
     document.getElementById("score").textContent = `Pontuação: ${localStorage.getItem('score') || 0}`;
}

export { comparison, updateanswer, scores, clearScores, showScore };