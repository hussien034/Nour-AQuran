let contRadio = document.getElementById('contRadio');
let cartona = "";

async function getRadio() {
    try {
        let data = await fetch('https://data-rosy.vercel.app/radio.json');
        let allData = await data.json();
        let radio = allData.radios;
        
        for (let x of radio) {
            cartona += `
            <div class="radio-item" style="background-image: url('${x.img}');" data-aos="fade-up">
                <div class="radio-info">
                    <h3>${x.name}</h3>
                    <a href="${x.url}" target="_blank" class="listen-button">استمع الآن</a>
                </div>
            </div>
            `;
        }

        contRadio.innerHTML = cartona; // Append the constructed HTML to the container
    } catch (error) {
        console.error("Error fetching radio data:", error);
    }
}

getRadio()
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});