import * as checks from './checks.js';

const firstCheck = document.getElementById("firstCheck");
if (firstCheck !== null) firstCheck.addEventListener("click", () => { checks.firstCheck(); })

const secondCheck = document.getElementById("secondCheck");
if (secondCheck !== null) secondCheck.addEventListener("click", () => { checks.secondCheck() });

const thirdCheck = document.getElementById("thirdCheck");
if (thirdCheck !== null) thirdCheck.addEventListener("click", () => { checks.thirdCheck() });

const fourCheck = document.getElementById("fourCheck");
if (fourCheck !== null) fourCheck.addEventListener("click", () => { checks.fourCheck() });

const fifthCheck = document.getElementById("fifthCheck");
if (fifthCheck !== null) fifthCheck.addEventListener("click", () => { checks.fifthCheck() });

const sixthCheck = document.getElementById("sixthCheck");
if (sixthCheck !== null) sixthCheck.addEventListener("click", () => { checks.sixthCheck() });

const seventhCheck = document.getElementById("seventhCheck");
if (seventhCheck !== null) seventhCheck.addEventListener("click", () => { checks.seventhCheck() });