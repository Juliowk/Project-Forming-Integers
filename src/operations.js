const comparison = (fraction, integers, necessaryTimes) => {
    const [numerator, denominator] = fraction.split('/').map(Number);
    const total = (numerator / denominator) * necessaryTimes;
    return total === integers;
}

const updateanswer = (id, fraction, integers, necessaryTimesId) => {
    const necessaryTimes = document.getElementById(necessaryTimesId).value;

    if (comparison(fraction, integers, necessaryTimes)) {
        document.getElementById(id).textContent = "Correto";
    } else {
        document.getElementById(id).textContent = "Errado";
    }
}

function firstCheck() {
    updateanswer("response01", "1/2", 1, "necessaryTimes01");
    updateanswer("response02", "1/3", 1, "necessaryTimes02");
    updateanswer("response03", "1/4", 1, "necessaryTimes03");
    updateanswer("response04", "1/5", 1, "necessaryTimes04");
    updateanswer("response05", "1/6", 1, "necessaryTimes05");
}
