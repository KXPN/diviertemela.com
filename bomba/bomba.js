const Bomba = {

        SILABAS_TIPOS_POR_TIPO: {
                INICIAL: 1,
                INTERMEDIA: 2,
                FINAL: 3,
        },

        inicializar: function() {
                this.botonActivarBombaNode = (
                        document.querySelector('.jsBotonActivarBomba')
                );
                this.silabaNode = document.querySelector('.jsSilaba');
                this.botonMostrarSiguienteSilabaNode = (
                        document.querySelector('.jsBotonMostrarSiguienteSilaba')
                );
                this.silabasAnterioresNode = (
                        document.querySelector('.jsSilabasAnteriores')
                );
                this.reinicioMensajeNode = (
                        document.querySelector('.jsReinicioMensaje')
                );
                // TODO: Cambiar a sonido con JavaScript
                this.sonidoNode = document.querySelector('.jsSonido');
                (
                        document
                        .querySelector('.jsBotonReiniciar')
                        .addEventListener('click', this.reiniciar.bind(this))
                );
                (
                        this
                        .botonActivarBombaNode
                        .addEventListener('click', this.activarBomba.bind(this))
                );
                (
                        this
                        .botonMostrarSiguienteSilabaNode
                        .addEventListener(
                                'click',
                                this.mostrarSiguienteSilaba.bind(this),
                        )
                );
        },

        activarBomba: function() {
                this.botonActivarBombaNode.hidden = true;
                const tMin = +document.querySelector('.jsTMin').value;
                const tMax = +document.querySelector('.jsTMax').value;
                this.explosionTiempo = (
                        Aleatorio.obtenerNumeroEntreUnoYOtro(tMin, tMax)
                );
                this.reinicioMensajeNode.hidden = false;
                this.tiempoUnixInicial = this.obtenerTiempoUnix();
                this.sonidoNode.play();
                this.botonMostrarSiguienteSilabaNode.hidden = false;
                this.mostrarSiguienteSilaba();
                this.tiempoRevisionIntervalo = (
                        setInterval(this.revisarTiempo.bind(this))
                );
        },

        obtenerTiempoUnix: function() {
                return Math.ceil(new Date().getTime() / 1000);
        },

        mostrarSiguienteSilaba: function() {
                let silabas = '';
                let guionVaAntes = true;
                let guionVaDespues = true;
                const silabaTipoNumero = (
                        Aleatorio.obtenerNumeroEntreUnoYOtro(1, 3)
                );
                switch (silabaTipoNumero) {
                        case this.SILABAS_TIPOS_POR_TIPO.INICIAL:
                                silabas = SilabasPorCategoria.inicial;
                                guionVaAntes = false;
                                break;
                        case this.SILABAS_TIPOS_POR_TIPO.INTERMEDIA:
                                silabas = SilabasPorCategoria.intermedia;
                                break;
                        case this.SILABAS_TIPOS_POR_TIPO.FINAL:
                                silabas = SilabasPorCategoria.final;
                                guionVaDespues = false;
                                break;
                }
                const silabaIndice = (
                        Aleatorio.obtenerNumeroDe0ANoIncluido(silabas.length)
                );
                const silaba = silabas[silabaIndice];
                const silabaTexto = (
                        (guionVaAntes ? '-' : '') +
                        silaba +
                        (guionVaDespues ? '-' : '')
                )
                this.silabaNode.textContent = silabaTexto;
                const silabaNodo = document.createElement('div');
                const silabaTituloNodo = document.createElement('h3');
                silabaTituloNodo.textContent = (
                        '#' +
                        (
                                this.silabasAnterioresNode.children.length +
                                1
                        )
                );
                silabaNodo.appendChild(silabaTituloNodo);
                silabaNodo.appendChild(document.createTextNode(silabaTexto));
                this.silabasAnterioresNode.prepend(silabaNodo);
        },

        revisarTiempo: function() {
                const tiempoUnixActual = this.obtenerTiempoUnix();
                const tiempoTranscurrido = (
                        tiempoUnixActual -
                        this.tiempoUnixInicial
                );
                if (tiempoTranscurrido < this.explosionTiempo) {
                        return;
                }
                this.explotar();
        },

        explotar: function() {
                this.detenerTiempo();
                this.silabaNode.textContent = '💥';
                this.botonMostrarSiguienteSilabaNode.hidden = true;
                // Explotar con sonido en JavaScript
        },

        detenerTiempo: function() {
                clearInterval(this.tiempoRevisionIntervalo);
                this.sonidoNode.pause();
                this.sonidoNode.currentTime = 0;
        },

        reiniciar: function() {
                this.detenerTiempo();
                this.botonActivarBombaNode.hidden = false;
                this.reinicioMensajeNode.hidden = true;
                this.botonMostrarSiguienteSilabaNode.hidden = true;
                this.silabaNode.textContent = '';
                this.silabasAnterioresNode.textContent = '';
        },

};
Bomba.inicializar();
