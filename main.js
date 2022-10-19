let titleMultiverse = document.getElementById("title-multiverse")
let titleRandom = document.getElementById("title-random")
let title = document.getElementById("title-multiverse").getBoundingClientRect()
let sectionPresentacion = document.getElementById("section-presentacion")
let loaderSection = document.getElementById("loaderSection")
let loaderSection2 = document.getElementById("loaderSection2")
let loaderSection3 = document.getElementById("loaderSection3")

let imagenesPersonajes = ["./img/1.png", "./img/2.png", "./img/3.png", "./img/4.png", "./img/5.png", "./img/6.png", "./img/7.png", "./img/8.png", "./img/9.png", "./img/10.png", "./img/11.png", "./img/12.png", "./img/13.png", "./img/14.png", "./img/15.png", "./img/16.png", "./img/17.png", "./img/18.png", "./img/19.png", "./img/20.png", "./img/21.png", "./img/22.png", "./img/23.png", "./img/24.png", "./img/25.png", "./img/26.png", "./img/27.png", "./img/28.png", "./img/29.png", "./img/30.png", "./img/31.png", "./img/32.png", "./img/33.png", "./img/34.png", "./img/35.png"]
let largoPagina = window.innerWidth
let anchoPagina = window.innerHeight
let xMouse
let yMouse
let incremento = 0
let posicionImagen
let velocidad = 2

const iniciarJuego = () => {

    setTimeout(() => loaderSection.style.opacity = 0, 2000)
    setTimeout(() => loaderSection2.style.opacity = 1, 2001)

    setTimeout(() => {loaderSection2.style.opacity = 1}, 3001)

    setTimeout(() => {

        loaderSection2.style.opacity = 0
        loaderSection3.style.opacity = 1
        
    }, 4001)

    setTimeout(() => {loaderSection3.style.opacity = 0}, 6001)

    setTimeout(() => {  sectionPresentacion.style.opacity = 1 }, 6500)

    // ALL ADDEVENTLISTENER
        document.addEventListener("mousemove", (e) => {

            xMouse = e.clientX
            yMouse = e.clientY

            if(title.y + 70 < yMouse){
                
                titleMultiverse.style.textShadow = "0px 20px 12px rgb(51 77 163) "
                titleRandom.style.textShadow = "0px 20px 12px rgb(51 77 163) "
            }else if(title.y > yMouse){

                titleMultiverse.style.textShadow = "rgb(51 77 163)  0px -20px 12px"
                titleRandom.style.textShadow = "rgb(51 77 163)  0px -20px 12px"
            }else{

                titleMultiverse.style.textShadow = "rgb(51 77 163)  0px 0px 12px"
                titleRandom.style.textShadow = "rgb(51 77 163)  0px 0px 12px"
            }
        })

    //CLASES
    class ImagenClass {

        constructor(){

            this.src = imagenesPersonajes[random(0, imagenesPersonajes.length)]
            this.id = Math.random()
            this.x = 0
            this.y = 0
            this.ancho = 100
            this.alto = 100
        }

        crear_desplazar_imagen(sizeImg, opcidad, index){

            //CREACION
            let html = `
                <img  src="${this.src}" id="${this.id}" class="imgFlotando" alt="Imagen" style="left='500px';top='500px'" />
            `
            let img = document.createElement("div")
            img.innerHTML = html
            sectionPresentacion.appendChild(img)
            let nuevaIMagen = document.getElementById(this.id)
            nuevaIMagen.style.transform = `rotate(${random(0, 360)}deg)`
            nuevaIMagen.style.width = sizeImg
            nuevaIMagen.style.filter = `brightness(${opcidad}%)`
            nuevaIMagen.style.zIndex = `${index}`

            //DESPLAZAMIENTO
            let numeroRandomDesplazamiento = random(1,3) //Numeros 1-4 igual a manecillas del reloj

            if(numeroRandomDesplazamiento == 1){

                desplazamientoUp(img, nuevaIMagen, anchoPagina)
            }else if(numeroRandomDesplazamiento == 2){

                desplazamientoDown(img, nuevaIMagen)
            }
        }
    }

    //FUNCIONES
    const desplazamientoDown = (img, nuevaIMagen) => {

        let xRandom = random(0, largoPagina - 20)
        nuevaIMagen.style.left = `${xRandom}px`
        nuevaIMagen.style.top = `-100px`
        let contador = -100
        
        let interval =  setInterval(() => {

            posicionImagen = nuevaIMagen.getBoundingClientRect()

            if(posicionImagen.y <= anchoPagina){
                contador += velocidad
                nuevaIMagen.style.top = `${contador}px`
            }else{

                img.parentNode.removeChild(img)
                clearInterval(interval)
            }
        }, 50)
    }

    const desplazamientoUp = (img, nuevaIMagen, posicion) => {
        
        nuevaIMagen.style.top = `${posicion}px`
        let xRandom = random(0, largoPagina - 20)
        nuevaIMagen.style.left = `${xRandom}px`
        let interval =  setInterval(() => {

            posicionImagen = nuevaIMagen.getBoundingClientRect()

            if(posicionImagen.y >= -100){
                posicion -= velocidad
                nuevaIMagen.style.top = `${posicion}px`
            }else{

                img.parentNode.removeChild(img)
                clearInterval(interval)
            }
        }, 50)
    }

    const random = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min)
    }
    
    setInterval(() => {

        let nuevaImagen = new ImagenClass()
        nuevaImagen.crear_desplazar_imagen("35px", "30", "0")

        let nuevaImagen2 = new ImagenClass()
        nuevaImagen2.crear_desplazar_imagen("60px", "100", "5")
    }, 3000)
}


window.addEventListener("load", iniciarJuego)