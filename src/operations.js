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
console.log(document.getElementById("necessaryTimes06"));
// document.getElementById("necessaryTimes06").addEventListener("input", () => updateanswer("response06", "1/2", 2, "necessaryTimes06"));
// document.getElementById("necessaryTimes07").addEventListener("input", () => updateanswer("response07", "1/2", 3, "necessaryTimes07"));
// document.getElementById("necessaryTimes08").addEventListener("input", () => updateanswer("response08", "1/2", 4, "necessaryTimes08"));
// document.getElementById("necessaryTimes09").addEventListener("input", () => updateanswer("response09", "1/2", 5, "necessaryTimes09"));
// document.getElementById("necessaryTimes10").addEventListener("input", () => updateanswer("response10", "1/2", 6, "necessaryTimes10"));

// document.getElementById("necessaryTimes11").addEventListener("input", () => updateanswer("response11", "1/3", 1, "necessaryTimes11"));
// document.getElementById("necessaryTimes12").addEventListener("input", () => updateanswer("response12", "1/3", 2, "necessaryTimes12"));
// document.getElementById("necessaryTimes13").addEventListener("input", () => updateanswer("response13", "1/3", 3, "necessaryTimes13"));
// document.getElementById("necessaryTimes14").addEventListener("input", () => updateanswer("response14", "1/3", 4, "necessaryTimes14"));
// document.getElementById("necessaryTimes15").addEventListener("input", () => updateanswer("response15", "1/3", 5, "necessaryTimes15"));

// document.getElementById("necessaryTimes16").addEventListener("input", () => updateanswer("response16", "1/4", 1, "necessaryTimes16"));
// document.getElementById("necessaryTimes17").addEventListener("input", () => updateanswer("response17", "1/4", 2, "necessaryTimes17"));
// document.getElementById("necessaryTimes18").addEventListener("input", () => updateanswer("response18", "1/4", 3, "necessaryTimes18"));
// document.getElementById("necessaryTimes19").addEventListener("input", () => updateanswer("response19", "1/4", 4, "necessaryTimes19"));
// document.getElementById("necessaryTimes20").addEventListener("input", () => updateanswer("response20", "1/4", 5, "necessaryTimes20"));

// document.getElementById("necessaryTimes21").addEventListener("input", () => updateanswer("response21", "1/5", 1, "necessaryTimes21"));
// document.getElementById("necessaryTimes22").addEventListener("input", () => updateanswer("response22", "1/5", 2, "necessaryTimes22"));
// document.getElementById("necessaryTimes23").addEventListener("input", () => updateanswer("response23", "1/5", 3, "necessaryTimes23"));
// document.getElementById("necessaryTimes24").addEventListener("input", () => updateanswer("response24", "1/5", 4, "necessaryTimes24"));
// document.getElementById("necessaryTimes25").addEventListener("input", () => updateanswer("response25", "1/5", 5, "necessaryTimes25"));

// document.getElementById("necessaryTimes26").addEventListener("input", () => updateanswer("response26", "1/6", 1, "necessaryTimes26"));
// document.getElementById("necessaryTimes27").addEventListener("input", () => updateanswer("response27", "1/6", 2, "necessaryTimes27"));
// document.getElementById("necessaryTimes28").addEventListener("input", () => updateanswer("response28", "1/6", 3, "necessaryTimes28"));
// document.getElementById("necessaryTimes29").addEventListener("input", () => updateanswer("response29", "1/6", 4, "necessaryTimes29"));
// document.getElementById("necessaryTimes30").addEventListener("input", () => updateanswer("response30", "1/6", 5, "necessaryTimes30"));

// document.getElementById("necessaryTimes31").addEventListener("input", () => updateanswer("response31", "1/4", 1, "necessaryTimes31"));
// document.getElementById("necessaryTimes32").addEventListener("input", () => updateanswer("response32", "1/6", 1, "necessaryTimes32"));
// document.getElementById("necessaryTimes33").addEventListener("input", () => updateanswer("response33", "1/2", 1, "necessaryTimes33"));
// document.getElementById("necessaryTimes34").addEventListener("input", () => updateanswer("response34", "1/3", 1, "necessaryTimes34"));
// document.getElementById("necessaryTimes35").addEventListener("input", () => updateanswer("response35", "1/4", 1, "necessaryTimes35"));
