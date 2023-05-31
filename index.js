const btnEl = document.querySelector(".btn")
const animeContinerEl = document.querySelector(".anime-conatiner")
const animeImgEl = document.querySelector(".anime-img")
const animeNameEl = document.querySelector(".Anime-Name")

btnEl.addEventListener("click",async ()=>{
    try {
        btnEl.disabled =  true;
        btnEl.innerText="Loading..."
        animeNameEl.innerText="Updating..."
        animeImgEl.src = "animation/spinner.svg"
        const reponse = await fetch("https://api.catboys.com/img")
        const data = await reponse.json();
        btnEl.disabled =  false;
        btnEl.innerText="Get Anime"
        animeContinerEl.style.display = "block"
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist
    } catch (error) {
        
    }
})