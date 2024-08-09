<?php require_once 'informacion.php' ?>
<?php require_once '../html_base_inicio.php' ?>
<p>
        Si ya sabes cómo jugar, puedes iniciar haciendo clic en el botón
        "Obtener siguiente letra" para recibir la primera letra, sino más abajo
        tienes las instrucciones
</p>
<button class="jsBotonObtenerSiguienteLetra">
        Obtener siguiente letra
</button>
<div class="stop-letra jsLetraSinRepeticion"></div>
<div class="jsInformacionMensaje"></div>
<div class="jsReinicioMensaje" hidden="hidden">
        También puedes
        <button class="jsBotonReiniciar">
                reiniciar el juego
        </button>
</div>
<h2>Instrucciones</h2>
<ol>
        <li>
                Escribe las categorías en algún lugar, lo más común es una hoja,
                y algunas cateogrías podrían ser:
                <ul>
                        <li>Animal</li>
                        <li>Comida</li>
                        <li>Famoso</li>
                        <li>Lugar</li>
                        <li>Objeto</li>
                </ul>
                o incluso podrías usar frases, algunas podrían ser:
                <ul>
                        <li>Llegué tarde por</li>
                        <li>Mi papá me abandonó por</li>
                        <li>Prefiero que me</li>
                </ul>
        </li>
        <li>
                Escoges una letra (aquí es cuando entro yo) y con ella debes
                iniciar todas las respuestas
        </li>
        <li>
                El primer jugador en haber llenado todas las categorías dice
                STOP y los demás deben dejar de escribir. Luego lee cada
                categoría y cada jugador, incluyéndolo, lee lo que escribió en
                ella. Los puntajes se suelen manejar así:
                <ul>
                        <li>
                                200 puntos para una sola persona si llenó
                                correctamente la categoría que nadie más llenó
                        </li>
                        <li>
                                100 puntos para todas las personas que hayan
                                llenado correctamente la categoría, con una
                                respuesta única (que nadie más escribió)
                        </li>
                        <li>
                                50 puntos para todas las personas que hayan
                                llenado correctamente la categoría, pero su
                                respuesta también fue escrita por alguien más
                        </li>
                </ul>
        </li>
        <li>
                Al finalizar de escribir los puntos, cada jugador suma los suyos
        </li>
        <li>
                Me pides otra letra para seguir a la siguiente ronda
        </li>
</ol>
<p>
        Al iniciar, haciendo clic en el botón "Obtener siguiente letra", te
        mostraré una letra aleatoria sin repetición
</p>
<?php require_once '../html_base_fin.php' ?>
