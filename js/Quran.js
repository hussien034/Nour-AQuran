let AllSurah = document.getElementById("AllSurah");
let curentAya=document.getElementById("curentAya");
let nameOfSurah=document.getElementById("nameOfSurah")
let cartona1 = "";
let cartona2 = "";
async function getAllSurah() {
    let Data = await fetch('https://api.alquran.cloud/v1/surah');
    let res = await Data.json();
    let surah = res.data;
    
    for (let index in surah) {
        cartona1 += `
        <button data-aos="fade-up"  class="sp" onclick="getCurrentIndex(${index})">${surah[index].name}</button>
        `;
    }
    AllSurah.innerHTML = cartona1;
}

getAllSurah();

async function getCurrentIndex(index) {
    let surahName=index+1;
    const url=`https://api.alquran.cloud/v1/surah/${surahName}`;
    const DataOfCruentSurah= await fetch(url);
    const jsonOfDataOfCruentSurah= await DataOfCruentSurah.json();
    let curentSurah=jsonOfDataOfCruentSurah.data.ayahs;
    let curentSurahName=jsonOfDataOfCruentSurah.data.name;
    nameOfSurah.innerHTML=curentSurahName
    for(let x in curentSurah){
        cartona2+=`
        <p>${curentSurah[x].text}</p>
        `
       
    }
    curentAya.innerHTML=cartona2;
    
};
function reload(){
    window.location.reload()
}
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});