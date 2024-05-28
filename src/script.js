const comparison = (fraction, integers, necessaryTimes) => {
     const [numerator, denominator] = fraction.split('/').map(Number);
     const total = (numerator / denominator) * necessaryTimes;
     return total === integers;
}

const updateanswer = (id, fraction, integers, necessaryTimesId) => {
     const necessaryTimes = document.getElementById(necessaryTimesId).value
     document.getElementById(id).textContent = comparison(fraction, integers, necessaryTimes) ? "Correto" : "Errado";
}

document.getElementById("necessaryTimes01").addEventListener("input", () => updateanswer("response01", "1/2", 1, "necessaryTimes01"));
document.getElementById("necessaryTimes02").addEventListener("input", () => updateanswer("response02", "1/3", 1, "necessaryTimes02"));
document.getElementById("necessaryTimes03").addEventListener("input", () => updateanswer("response03", "1/4", 1, "necessaryTimes03"));
document.getElementById("necessaryTimes04").addEventListener("input", () => updateanswer("response04", "1/5", 1, "necessaryTimes04"));
document.getElementById("necessaryTimes05").addEventListener("input", () => updateanswer("response05", "1/6", 1, "necessaryTimes05"));
