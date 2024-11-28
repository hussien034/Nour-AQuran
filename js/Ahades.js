let Ahades=document.getElementById("ahades");
let cartona='';
async function getAllAhades(){
    let data=await fetch('https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300');
    let showData= await data.json();
    let AllDtata=showData.items;
    for(let x in AllDtata){
        cartona+=`
        <p data-aos="fade-up" class="mt-10">${AllDtata[x].arab}</p>
        `
    }
    Ahades.innerHTML=cartona
}
getAllAhades();
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});