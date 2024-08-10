const Aleatorizador = {

        listaTextoBase: 'Escribe aquí',
        usosCantidad: 0,

        inicializar: function() {
                this.itemsNode = document.querySelector('.jsItems');
                (
                        this
                        .itemsNode
                        .addEventListener(
                                'click',
                                this.limpiarMensaje.bind(this),
                        )
                );
                (
                        this
                        .itemsNode
                        .addEventListener(
                                'blur',
                                this.reiniciarMensaje.bind(this),
                        )
                );
                (
                        document
                        .querySelector('.jsBotonAleatorizar')
                        .addEventListener('click', this.aleatorizar.bind(this))
                );
                this.listaAleatorizadaNode = (
                        document.querySelector('.jsListaAleatorizada')
                );
                this.actualizarInterfaz();
        },

        limpiarMensaje: function() {
                if (this.itemsNode.textContent.trim() !== this.listaTextoBase) {
                        return;
                }
                this.itemsNode.textContent = '';
        },

        reiniciarMensaje: function() {
                if (this.itemsNode.textContent.trim() !== '') {
                        return;
                }
                this.itemsNode.textContent = this.listaTextoBase;
        },

        obtenerArgumentos: function() {
                return (
                        document
                        .location
                        .search
                        .substring(1)
                        .split(',')
                );
        },

        agregarItem: function(item) {
                const itemNode = document.createElement('div');
                itemNode.textContent = item;
                this.itemsNode.appendChild(itemNode);
        },

        actualizarInterfaz: function() {
                const items = this.obtenerArgumentos();
                if (!items[0]) {
                        return;
                }
                if (this.itemsNode.textContent.trim() === this.listaTextoBase) {
                        this.itemsNode.textContent = '';
                        items.forEach(this.agregarItem.bind(this));
                }
                this.usosCantidad++;
                const aleatorizadaNode = document.createElement('div');
                const usoNode = document.createElement('h2');
                usoNode.textContent = ('Aleatorizada #' + this.usosCantidad);
                aleatorizadaNode.appendChild(usoNode);
                while (items.length) {
                        const itemNode = document.createElement('div');
                        const itemIndice = (
                                Aleatorio
                                .obtenerNumeroDe0ANoIncluido(items.length)
                        );
                        const item = items.splice(itemIndice, 1)[0];
                        itemNode.textContent = item;
                        aleatorizadaNode.appendChild(itemNode);
                }
                this.listaAleatorizadaNode.prepend(aleatorizadaNode);
        },

        aleatorizar: function() {
                const items = [];
                for (const itemNode of this.itemsNode.childNodes) {
                        items.push(itemNode.textContent.trim());
                }
                const itemsSeparadosPorComa = items.join(',');
                history.pushState({}, '', ('?' + itemsSeparadosPorComa));
                this.actualizarInterfaz();
        },

};
Aleatorizador.inicializar();
