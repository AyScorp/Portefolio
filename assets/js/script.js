let darkMode = false;

document.getElementById('openPdf').addEventListener('click', function() {
  window.open('https://perso.univ-lemans.fr/~i2301203/Documents/CV.pdf', '_blank');
});

document.getElementById('openVideo').addEventListener('click', function() {
  window.open('https://perso.univ-lemans.fr/~i2301203/Documents/CV.mp4', '_blank');
});

function changeDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#e8dfd1");
    document.documentElement.style.setProperty("--background-colorwrapper", "#AEA89D");
    document.documentElement.style.setProperty("--background-color-icon", "#747069");
    document.documentElement.style.setProperty("--box-shadow-color", "rgba(0, 0, 0, 0.3)");
    document.documentElement.style.setProperty('--signature-image', "url('images/signature.png')");
    document.documentElement.style.setProperty('--savoir-image', "url(images/SavoirFaireBlanc.png)");
    document.documentElement.style.setProperty('--pointFort-image', "url('images/pointFortBlanc.png')");

    document.getElementById("dark-light-mode").innerHTML = "Dark mode";
  } else {
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--background-colorwrapper", "rgb(50,50,50)");
    document.documentElement.style.setProperty("--background-color-icon", "rgb(100,100,100)");
    document.documentElement.style.setProperty("--box-shadow-color", "rgba(255, 255, 255, 0.4)");
    document.documentElement.style.setProperty("--signature-image", "url(../images/signature.svg)");
    document.documentElement.style.setProperty("--savoir-image", "url('images/savoirEtreBlack.png')");
    document.documentElement.style.setProperty("--pointFort-image", "url('images/PointFortBlack.png')");

    document.getElementById("dark-light-mode").innerHTML = "Light mode";
  }
}

function goToHome(){
  document.location.href="Portefolio.html";
}

const tabs = document.querySelectorAll('.tab');
const competences = document.querySelectorAll('.competence');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        competences.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active');
    });
});