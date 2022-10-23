let count = 0
let imagenesArraySubida = []
let imagenesArrayBajada = []
let imagenesPersonajes = ["./img/1.png", "./img/2.png", "./img/3.png", "./img/4.png", "./img/5.png", "./img/6.png", "./img/7.png", "./img/8.png", "./img/9.png", "./img/10.png", "./img/11.png", "./img/12.png", "./img/13.png", "./img/14.png", "./img/15.png", "./img/16.png", "./img/17.png", "./img/18.png", "./img/19.png", "./img/20.png", "./img/21.png", "./img/22.png", "./img/23.png", "./img/24.png", "./img/25.png", "./img/26.png", "./img/27.png", "./img/28.png", "./img/29.png", "./img/30.png", "./img/31.png", "./img/32.png", "./img/33.png", "./img/34.png", "./img/35.png"]
let imagen

const iniciarJuego = () => {

    const random = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min)
    }

    const canvas = document.querySelector("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight - 10
    let lienzo = canvas.getContext("2d")



    class Imagenes {

        constructor(foto, sizeRandom) {

            this.foto = foto
            this.x = 0
            this.y = 0
            this.ancho = 60
            this.alto = 60
            this.mapaFoto = new Image()
            this.mapaFoto.src = foto
            this.sizeRandom = sizeRandom
        }
    }

    const crearClaseImagen = () => {

        let numeroRandomArray = random(0, imagenesPersonajes.length)
        let tamanoRandom = random(1, 3)
        imagen = new Imagenes(imagenesPersonajes[numeroRandomArray], tamanoRandom)
        imagen.x = random(5, canvas.width - 20)
        let numeroRandom = random(1, 4)
        
        if(numeroRandom == 1){

            imagen.y = canvas.height
            imagenesArraySubida.push(imagen)
        }else{

            imagen.y = 0
            imagenesArrayBajada.push(imagen)
        }
    }

    setInterval(crearClaseImagen, 2000)

    function pintarPersonaje(mapaFoto, x, y, w, h) {

        lienzo.drawImage(
            mapaFoto,
            x,
            y,
            w,
            h
        )
    }
    
    function updateImageSubida() {

        imagenesArraySubida.forEach((e) => {

            if(e.sizeRandom == 1){

                e.w = 80
                e.h = 80
            }else{

                e.w = 60
                e.h = 60
                //e.mapaFoto.style.filter = `brightness(55%)`
            }
            lienzo.clearRect(e.x, e.y, e.w, e.h)
            e.y -= 1
            pintarPersonaje(e.mapaFoto, e.x, e.y, e.w, e.h)
        })
        requestAnimationFrame(updateImageSubida)
    }

    function updateImageBajada() {

        imagenesArrayBajada.forEach((e) => {

            if(e.sizeRandom == 1){

                e.w = 80
                e.h = 80
            }else{

                e.w = 60
                e.h = 60
                //e.mapaFoto.style.filter = `brightness(55%)`
            }
            lienzo.clearRect(e.x, e.y, e.w, e.h)
            e.y += 1
            pintarPersonaje(e.mapaFoto, e.x, e.y, e.w, e.h)
        })
        requestAnimationFrame(updateImageBajada)
    }

    requestAnimationFrame(updateImageBajada)
    requestAnimationFrame(updateImageSubida)
    
}

window.addEventListener("load", iniciarJuego )