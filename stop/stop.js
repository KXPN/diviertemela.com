(function() {
        const botonObtenerNode = (
                document.querySelector('.jsBotonObtenerSiguienteLetra')
        );
        botonObtenerNode.addEventListener('click', obtenerSiguienteLetra);
        const botonReiniciarNode = document.querySelector('.jsBotonReiniciar');
        botonReiniciarNode.addEventListener('click', reiniciar);
})();

function obtenerSiguienteLetra() {
        const argumentos = document.location.hash.substring(1);
        const letrasExcluidas = argumentos.toUpperCase().split('');
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
        const estaEsLaUltimaLetra = (letrasExcluidasCantidad === 25);
        const letraNumero = (letrasExcluidasCantidad + 1);
        let mensaje = ('Vamos ' + letraNumero + ' letras de 26 posibles.');
        if (estaEsLaUltimaLetra) {
                mensaje = ('Esa fue la última letra, ahora revisa quien ganó!');
                const botonNode = (
                        document.querySelector('.jsBotonObtenerSiguienteLetra')
                );
                botonNode.disabled = true;
        }
        const letrasExcluidasTexto = (
                Object.keys(letrasExcluidasPorLetra).join('')
        );
        history.pushState({}, '', ('#' + letrasExcluidasTexto));
        const letraNode = document.querySelector('.jsLetraSinRepeticion');
        letraNode.textContent = letraSeleccionada;
        const informacionMensajeNode = (
                document.querySelector('.jsInformacionMensaje')
        );
        informacionMensajeNode.textContent = mensaje;
        const reinicioMensajeNode = (
                document.querySelector('.jsReinicioMensaje')
        );
        reinicioMensajeNode.hidden = false;
}

function reiniciar() {
        history.pushState({}, '', '#');
        const reinicioMensajeNode = (
                document.querySelector('.jsReinicioMensaje')
        );
        reinicioMensajeNode.hidden = true;
        const letraNode = document.querySelector('.jsLetraSinRepeticion');
        letraNode.textContent = '';
        const informacionMensajeNode = (
                document.querySelector('.jsInformacionMensaje')
        );
        informacionMensajeNode.textContent = '';
        const botonNode = (
                document.querySelector('.jsBotonObtenerSiguienteLetra')
        );
        botonNode.disabled = false;
}
