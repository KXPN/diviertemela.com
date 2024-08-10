const Aleatorizador = {

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
                if (this.itemsNode.textContent.trim() !== 'Escribe aquí') {
                        return;
                }
                this.itemsNode.textContent = '';
        },

        reiniciarMensaje: function() {
                if (this.itemsNode.textContent.trim() !== '') {
                        return;
                }
                this.itemsNode.textContent = 'Escribe aquí';
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

        actualizarInterfaz: function() {
                const items = this.obtenerArgumentos();
                if (!items[0]) {
                        return;
                }
                this.listaAleatorizadaNode.textContent = '';
                const listaNode = document.createElement('ol');
                while (items.length) {
                        const itemNode = document.createElement('li');
                        const itemIndice = (
                                parseInt(Math.random() * items.length)
                        );
                        const item = items.splice(itemIndice, 1)[0];
                        itemNode.textContent = item;
                        listaNode.appendChild(itemNode);
                }
                this.listaAleatorizadaNode.appendChild(listaNode);
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
