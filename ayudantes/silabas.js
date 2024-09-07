const Silabas = {
        /*
        TODO: Pensar en cómo se deberían generar, por ejemplo las palabras:
        analgesico
        antes
        nalga
        nacional
        generar
        sinergia
        cobija
        transporte
        televisor

        Tratando cada dígito cómo un indicador de si es prefijo, intermedio o
        sufijo, daría las sílabas:
        a: 100,
        nal: 111,
        ge: 110,
        si: 110,
        co: 101,
        an: 100,
        tes: 001,
        ga: 001,
        na: 100,
        cio: 010,
        ne: 010,
        rar: 001,
        ner: 010,
        gia: 001,
        bi: 010,
        ja: 001,
        trans: 100,
        por: 010,
        te: 101,
        le: 010,
        vi: 010,
        sor: 001,

        Cómo se podría generar automáticamente con un diccionario completo, tipo
        https://raw.githubusercontent.com/JorgeDuenasLerin/diccionario-espanol-txt/master/0_palabras_todas_no_conjugaciones.txt
        ?

        Además, tal vez se deba tener en cuenta la probabilidad de ocurrencia,
        para descartar las que sean muy difíciles de encontrar
        */
};
