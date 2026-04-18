const switchbtn = document.getElementById('switch-style-btn');
const themelink = document.getElementById('theme-style');


const styles = [
    './Files/StyleFolder/stylelanding.css',
    './Files/StyleFolder/stylelanding2.css'
];

let currstyle = 0;

function applyTheme(themeIndex) {
    if (themelink && styles[themeIndex]) { // if themelink exists and style path is valid
        themelink.setAttribute('href', styles[themeIndex]);
    }
}

const savedstyle = localStorage.getItem('theme');
if (savedstyle !== null) {
    currstyle = parseInt(savedstyle);
    applyTheme(currstyle);
} else {
    applyTheme(currstyle);
}


// event listener for button
if(switchbtn) {
    switchbtn.addEventListener('click', () => {
        currstyle = 1 - currstyle;
        applyTheme(currstyle);
        localStorage.setItem('theme', currstyle);
    });
}

