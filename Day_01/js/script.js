const darkMood = document.getElementById('dark');
let mainElement = document.getElementById('main');
darkMood.addEventListener("click",()=> {
    mainElement.classList.toggle('dark');
})