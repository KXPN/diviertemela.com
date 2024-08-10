const Stop = {

        inicializar: function() {
                this.botonObtenerSiguienteLetraNode = (
                        document.querySelector('.jsBotonObtenerSiguienteLetra')
                );
                this.letraNode = (
                        document.querySelector('.jsLetraSinRepeticion')
                );
                this.informacionMensajeNode = (
                        document.querySelector('.jsInformacionMensaje')
                );
                this.reinicioMensajeNode = (
                        document.querySelector('.jsReinicioMensaje')
                );
                this.actualizarInterfaz();
                (
                        document
                        .querySelector('.jsBotonObtenerSiguienteLetra')
                        .addEventListener(
                                'click',
                                this.obtenerSiguienteLetra.bind(this),
                        )
                );
                (
                        document
                        .querySelector('.jsBotonReiniciar')
                        .addEventListener('click', this.reiniciar.bind(this))
                );
        },

        obtenerArgumentos: function() {
                return (
                        document
                        .location
                        .search
                        .substring(1)
                        .toUpperCase()
                        .split('')
                );
        },

        actualizarInterfaz: function() {
                const letrasExcluidas = this.obtenerArgumentos();
                const ultimaLetra = letrasExcluidas[letrasExcluidas.length - 1];
                if (!ultimaLetra) {
                        return;
                }
                const letrasExcluidasCantidad = letrasExcluidas.length;
                const estaEsLaUltimaLetra = (letrasExcluidasCantidad >= 25);
                const letraNumero = (letrasExcluidasCantidad + 1);
                let mensaje = (
                        'Vamos ' +
                        letraNumero +
                        ' letras de 26 posibles.'
                );
                if (estaEsLaUltimaLetra) {
                        mensaje = (
                                'Esa fue la última letra, ahora revisa quien ' +
                                'ganó!'
                        );
                        this.botonObtenerSiguienteLetraNode.disabled = true;
                }
                this.letraNode.textContent = ultimaLetra;
                this.informacionMensajeNode.textContent = mensaje;
                this.reinicioMensajeNode.hidden = false;
        },

        obtenerSiguienteLetra: function() {
                const letrasExcluidas = this.obtenerArgumentos();
                const letrasExcluidasPorLetra = {};
                for (const letraExcluida of letrasExcluidas) {
                        if (!letraExcluida.match(/[a-z]/i)) {
                                continue;
                        }
                        letrasExcluidasPorLetra[letraExcluida] = true;
                }
                const letrasExcluidasCantidad = (
                        Object.keys(letrasExcluidasPorLetra).length
                );
                if (letrasExcluidasCantidad > 25) {
                        return;
                }
                const letrasDisponiblesPorLetra = [];
                for (let letraCodigo = 65; letraCodigo <= 90; letraCodigo++) {
                        const letra = String.fromCharCode(letraCodigo);
                        if (letrasExcluidasPorLetra[letra]) {
                                continue;
                        }
                        letrasDisponiblesPorLetra[letra] = true;
                }
                const letrasDisponibles = Object.keys(letrasDisponiblesPorLetra);
                const letraSeleccionadaIndice = (
                        parseInt(Math.random() * letrasDisponibles.length)
                );
                const letraSeleccionada = letrasDisponibles[letraSeleccionadaIndice];
                letrasExcluidasPorLetra[letraSeleccionada] = true;
                const letrasExcluidasTexto = (
                        Object.keys(letrasExcluidasPorLetra).join('')
                );
                history.pushState({}, '', ('?' + letrasExcluidasTexto));
                actualizarInterfaz();
        },

        reiniciar: function() {
                history.pushState({}, '', '?');
                this.reinicioMensajeNode.hidden = true;
                this.letraNode.textContent = '';
                this.informacionMensajeNode.textContent = '';
                this.botonObtenerSiguienteLetraNode.disabled = false;
        },

};
Stop.inicializar();
