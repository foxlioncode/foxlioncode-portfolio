let foxLogoFlag = true;

let animateFoxLogoObject = document.getElementById("animateFoxLogo");
let titleText = document.getElementById("titleText");

titleText.src="./assets/fox-text-002.svg";
titleText.style.width="1000px";
titleText.setAttribute("alt","titleText foxlioncode");

changeLogo();

function changeLogo() {
    if (foxLogoFlag) {
        animateFoxLogoObject.src = "./assets/fox-002.png";
        animateFoxLogoObject.style.width = "400px";
    } else {
        animateFoxLogoObject.src = "./assets/fox-digi.svg";
        animateFoxLogoObject.style.width = "310px";
    }
}

function logoTransition () {
    animateFoxLogoObject.style.animation = "fadeTransition 2s 1";
} 

function foxLogoFlagReverse() {
    foxLogoFlag = !foxLogoFlag;
    logoTransition();
    console.log(foxLogoFlag);
    changeLogo();
}
