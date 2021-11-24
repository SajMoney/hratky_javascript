var slideActive = 0;
carousel();

function carousel(){
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideActive++;
    if (slideActive > slides.length) {slideActive = 1}
    slides[slideActive-1].style.display = "block";
    setTimeout(carousel, 5000);
}

document.addEventListener("mousemove", function(e){
    const car = document.getElementById("car");
    car.style.right = e.pageX -200 +"px";
})

const lightbox = document.createElement("div")
lightbox.id = "lightbox"


const images = document.querySelectorAll("#lol")
images.forEach(image => {
    image.addEventListener("click", e => {
        document.body.appendChild(lightbox);
        const img = document.createElement("img")
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
        lightbox.style.display = 'flex'
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    document.body.removeChild(lightbox)
})

var stred = SMap.Coords.fromWGS84(-0.5325, 51.115);
		var mapa = new SMap(JAK.gel("mapa"), stred, 14);
		mapa.addDefaultLayer(SMap.DEF_BASE).enable();
		mapa.addDefaultControls();