class Coche {
    constructor ( marca, modelo, color, escenario, ) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.seccion = escenario

        this.div = document.createElement( 'div' )
        this.div.style.width = '200px'
        this.div.style.height = '80px'
        this.div.innerText = this.marca
        this.div.style.backgroundColor = this.color
        this.seccion.appendChild( this.div )
        this.avance = 0
        this.estado = false
    }
    encenderse ( adelante, detras ) {
        this.estado = true
        document.addEventListener( 'keydown', event => {
            if ( event.key === adelante && this.estado === true ) {
                //Marcha alante
                this.acelerar( 40 )
            } else if ( event.key === detras && this.estado === true ) {
                //Marcha atras
                this.acelerar( -40 )
            }
        } )
    }
    acelerar ( velocidad ) {
        this.avance += velocidad
        this.div.style.marginLeft = this.avance + 'px'
    }
    apagarse () {
        this.estado = false
    }
}