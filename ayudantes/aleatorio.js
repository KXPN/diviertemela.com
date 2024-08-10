const Aleatorio = {
        obtenerNumeroDe0ANoIncluido: function(maximoNoIncluido) {
                const bytesCantidad = Math.ceil(maximoNoIncluido / 256);
                const numeros = new Uint8Array(bytesCantidad);
                let suma = 0;
                do {
                        crypto.getRandomValues(numeros);
                        suma = 0;
                        numeros.forEach((numero) => {suma += numero;});
                } while (suma >= maximoNoIncluido);
                return suma;
        },
};
