import { updateanswer, scores, clearScores, showScore } from "./module.js"

function firstCheck() {
     clearScores(true);

     updateanswer("response01", "1/2", 1, "necessaryTimes01");
     updateanswer("response02", "1/3", 1, "necessaryTimes02");
     updateanswer("response03", "1/4", 1, "necessaryTimes03");
     updateanswer("response04", "1/5", 1, "necessaryTimes04");
     updateanswer("response05", "1/6", 1, "necessaryTimes05");

     if (Number(localStorage.getItem('score')) < 20) {
          scores();
     }

     showScore();
}

function secondCheck() {
     clearScores();

     updateanswer("response01", "1/2", 2, "necessaryTimes01");
     updateanswer("response02", "1/2", 3, "necessaryTimes02");
     updateanswer("response03", "1/2", 4, "necessaryTimes03");
     updateanswer("response04", "1/2", 5, "necessaryTimes04");
     updateanswer("response05", "1/2", 6, "necessaryTimes05");

     if (Number(localStorage.getItem('score')) < 40) {
          scores();
     }

     showScore();
}

function thirdCheck() {
     clearScores();

     updateanswer("response11", "1/3", 1, "necessaryTimes11");
     updateanswer("response12", "1/3", 2, "necessaryTimes12");
     updateanswer("response13", "1/3", 3, "necessaryTimes13");
     updateanswer("response14", "1/3", 4, "necessaryTimes14");
     updateanswer("response15", "1/3", 5, "necessaryTimes15");

     if (Number(localStorage.getItem('score')) < 60) {
          scores();
     }

     showScore();
}

function fourCheck() {
     clearScores();

     updateanswer("response16", "1/4", 1, "necessaryTimes16");
     updateanswer("response17", "1/4", 2, "necessaryTimes17");
     updateanswer("response18", "1/4", 3, "necessaryTimes18");
     updateanswer("response19", "1/4", 4, "necessaryTimes19");
     updateanswer("response20", "1/4", 5, "necessaryTimes20");

     if (Number(localStorage.getItem('score')) < 80) {
          scores();
     }

     showScore();
}

function fifthCheck() {
     clearScores();

     updateanswer("response21", "1/5", 1, "necessaryTimes21");
     updateanswer("response22", "1/5", 2, "necessaryTimes22");
     updateanswer("response23", "1/5", 3, "necessaryTimes23");
     updateanswer("response24", "1/5", 4, "necessaryTimes24");
     updateanswer("response25", "1/5", 5, "necessaryTimes25");

     if (Number(localStorage.getItem('score')) < 100) {
          scores();
     }

     showScore();
}

function sixthCheck() {
     clearScores();

     updateanswer("response26", "1/6", 1, "necessaryTimes26");
     updateanswer("response27", "1/6", 2, "necessaryTimes27");
     updateanswer("response28", "1/6", 3, "necessaryTimes28");
     updateanswer("response29", "1/6", 4, "necessaryTimes29");
     updateanswer("response30", "1/6", 5, "necessaryTimes30");

     if (Number(localStorage.getItem('score')) < 120) {
          scores();
     }

     showScore();
}

function seventhCheck() {
     clearScores();

     updateanswer("response31", "1/4", 0.5, "necessaryTimes31");
     updateanswer("response32", "1/6", 0.5, "necessaryTimes32");
     updateanswer("response33", "1/2", 1, "necessaryTimes33");
     updateanswer("response34", "1/3", 1, "necessaryTimes34");
     updateanswer("response35", "1/4", 1, "necessaryTimes35");

     if (Number(localStorage.getItem('score')) < 140) {
          scores();
     }

     showScore();
}

export { firstCheck, secondCheck, thirdCheck, fourCheck, fifthCheck, sixthCheck, seventhCheck }