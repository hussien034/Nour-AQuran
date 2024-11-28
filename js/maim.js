window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});
let tableData = document.getElementById("tableData");
let cartona="";
async function payersTime() {
  let Data = await fetch(
    "https://api.aladhan.com/v1/timingsByCity/17-11-2024?city=cairo&country=egypt&method=8"
  );
  let res = await Data.json();
  let timings=res.data.timings
  for ( let x in timings){
    cartona+=`
    <tr>
    <td class="tableData">${x}</td>
    <td>${timings[x]}</td>
    </tr>
    `
  }
  tableData.innerHTML=cartona
}
payersTime();
