const SilabasPorCategoria = {
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

        Estas sílabas son quemadas para poder iniciar con algo básico, se
        tomaron de https://www.ejemplos.co/silaba/
        */
        inicial: [
                'a',
                'al',
                'ar',
                'au',
                'ba',
                'ban',
                'bar',
                'bri',
                'bru',
                'bur',
                'ca',
                'cac',
                'can',
                'ce',
                'cla',
                'co',
                'ca',
                'del',
                'dia',
                'e',
                'en',
                'es',
                'frus',
                'fu',
                'go',
                'ham',
                'he',
                'ho',
                'in',
                'jo',
                'ko',
                'le',
                'li',
                'llu',
                'lo',
                'lu',
                'ma',
                'man',
                'men',
                'mi',
                'mos',
                'mu',
                'na',
                'ne',
                'ni',
                'o',
                'os',
                'pa',
                'pe',
                'pla',
                'pre',
                'que',
                're',
                'rep',
                'ri',
                'se',
                'sim',
                'so',
                'ta',
                'te',
                'tran',
                'tu',
                'tem',
                'u',
                'va',
                've',
                'ves',
                'vio',
                'vir',
                'za',
                'zig',
        ],
        intermedia: [
                'a',
                'bar',
                'be',
                'ber',
                'bier',
                'bu',
                'bur',
                'ca',
                'chi',
                'ci',
                'clo',
                'co',
                'cue',
                'de',
                'den',
                'di',
                'dig',
                'dre',
                'du',
                'e',
                'es',
                'fi',
                'ga',
                'ge',
                'gen',
                'gue',
                'gui',
                'i',
                'jem',
                'ju',
                'le',
                'lem',
                'len',
                'li',
                'lo',
                'ma',
                'man',
                'mi',
                'mo',
                'na',
                'ne',
                'nis',
                'pa',
                'par',
                'pe',
                'pli',
                'pu',
                'puer',
                'que',
                'qui',
                'ra',
                'ri',
                'ro',
                'rra',
                'rre',
                'san',
                'si',
                'ta',
                'te',
                'ti',
                'to',
                'tra',
                'tu',
                'ven',
                'vi',
                'xi',
                'zo',
        ],
        final: [
                'a',
                'ba',
                'bra',
                'ca',
                'ces',
                'che',
                'cia',
                'cio',
                'cion',
                'co',
                'da',
                'dad',
                'de',
                'dia',
                'do',
                'dor',
                'dre',
                'fa',
                'fin',
                'gar',
                'gon',
                'gro',
                'ja',
                'la',
                'llo',
                'lo',
                'lor',
                'mo',
                'na',
                'ne',
                'no',
                'on',
                'plos',
                'ra',
                'rio',
                'ris',
                'ro',
                'rrio',
                'sa',
                'sion',
                'sis',
                'so',
                'ta',
                'tad',
                'tal',
                'te',
                'tel',
                'til',
                'to',
                'tra',
                'tro',
                'tud',
                'tus',
                'via',
                'vil',
                'xi',
                'za',
                'zag',
                'zo',
        ],
};
