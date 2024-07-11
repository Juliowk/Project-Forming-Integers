export const updateScore = () => {
     const score = localStorage.getItem('score') || 0;
     document.getElementById('score').textContent = `Pontuação: ${score}`;
};

export const cleanScore = () => {
     localStorage.setItem("score", 0);
}

window.Enablebuttons = (score, nextId, end = false) => {
     if (end) {
          setTimeout(() => {
               if (localStorage.getItem("score") >= score) {
                    document.getElementById("alert").classList.remove('d-none');
                    document.getElementById(nextId).classList.remove('disabled');
               }
          }, 1);
     } else {
          setTimeout(() => {
               if (localStorage.getItem("score") >= score) {
                    document.getElementById(nextId).classList.remove('disabled');
                    document.getElementById("linkNext").classList.remove('disabled');

                    document.getElementById("alert").classList.remove('d-none');
               }
          }, 1);
     }
}