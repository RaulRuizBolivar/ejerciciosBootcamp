let monza = document.querySelector( '.monza' )
let ferrari = document.querySelector( '#ferrari' )
let lambo = document.querySelector( '#lamborghini' )
let porche = document.querySelector( '#porche' )
let carriles = document.querySelectorAll( '.carril' )
let meta = document.querySelector( '.meta' )
let mensaje = document.querySelector( '#mensaje' )
let btnEmpezarJuego = document.querySelector( 'button' )
let carreraEmpezada = false
let nitros = 3
let largoCarrera = 675


const moverFerrari = velocidad => {
    ferrari.style.marginLeft = velocidad + ferrari.offsetLeft + 'px'
    if ( ferrari.offsetLeft > largoCarrera ) {
        terminarJuego( ferrari )
    }
}
const moverLambo = () => {
    //let velocidadLambo = Math.ceil( Math.random() * 50 )
    avanceLambo += Math.ceil( Math.random() * 50 )
    lambo.style.marginLeft
    console.log( lambo.style.marginLeft )
    if ( lambo.offsetLeft > largoCarrera ) {
        terminarJuego( lambo )
    }
}
const moverPorche = () => {
    let velocidadPorche = Math.ceil( Math.random() * 50 )
    porche.style.marginLeft = velocidadPorche + porche.offsetLeft + 'px'
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


document.addEventListener( 'keydown', capturarTeclas )

