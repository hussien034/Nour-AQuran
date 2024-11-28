let contThker = document.getElementById('contThker');

async function getAthker() {
    let response = await fetch('https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json');
    let allData = await response.json();
        contThker.innerHTML = '';
        for (let i = 0; i < allData["أذكار الصباح"].length; i++) {
            let athker = allData["أذكار الصباح"][i];
           
            let paragraph = document.createElement('p');
            paragraph.textContent = athker.content; 
            let span =document.createElement('span');
            span.textContent=athker.count;
            span.classList.add("sp");
            contThker.appendChild(paragraph); 
            contThker.appendChild(span);
        }
        
        for (let i = 0; i < allData["أذكار المساء"].length; i++) {
            let athker = allData["أذكار المساء"][i];
           
            let paragraph = document.createElement('p');
            paragraph.textContent = athker.content; 
            contThker.appendChild(paragraph); 
            let span =document.createElement('span');
            span.textContent=athker.count;
            span.classList.add("sp")
            contThker.appendChild(paragraph); 
            contThker.appendChild(span)
        }
}

getAthker();
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});