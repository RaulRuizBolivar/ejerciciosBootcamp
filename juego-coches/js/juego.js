let monza = document.querySelector( '.monza' )
let ferrari = document.querySelector( '#ferrari' )
let lambo = document.querySelector( '#lamborghini' )
let porche = document.querySelector( '#porche' )
let meta = document.querySelector( '.meta' )
let mensaje = document.querySelector( '#mensaje' )
let btnEmpezarJuego = document.querySelector( 'button' )
let arrancarLambo
let arrancarPorche
let carreraEmpezada = false
let nitros = 3
let largoCarrera = 675
let avanceLambo = 0
let avancePorche = 0
let avanceFerrari = 0

const moverFerrari = velocidad => {
    avanceFerrari += velocidad
    ferrari.style.marginLeft = avanceFerrari + 'px'
    if ( ferrari.offsetLeft > largoCarrera ) {
        terminarJuego( ferrari )
    }
}
const moverLambo = () => {
    avanceLambo += Math.ceil( Math.random() * 50 )
    lambo.style.marginLeft = avanceLambo + 'px'
    if ( avanceLambo > largoCarrera ) {
        terminarJuego( lambo )
    }
}
const moverPorche = () => {
    avancePorche += Math.ceil( Math.random() * 50 )
    porche.style.marginLeft = avancePorche + 'px'
    if ( porche.offsetLeft > largoCarrera ) {
        terminarJuego( porche )
    }
}
const capturarTeclas = event => {
    switch ( event.keyCode ) {
        case 32:
            moverFerrari( 25 )
            break
        case 78:
            if ( nitros > 0 ) {
                moverFerrari( 50 )
                nitros--
            }
            break
    }

}

const terminarJuego = vehiculo => {
    mensaje.innerText = `${ vehiculo.innerText } ha ganado la carrera`
    clearInterval( arrancarLambo )
    clearInterval( arrancarPorche )
    document.removeEventListener( 'keydown', capturarTeclas )
}

const empezarJuego = () => {
    document.addEventListener( 'keydown', capturarTeclas )
    arrancarLambo = setInterval( moverLambo, 200 )
    arrancarPorche = setInterval( moverPorche, 175 )
}
