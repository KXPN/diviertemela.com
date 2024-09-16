<?php require_once 'informacion.php' ?>
<?php require_once '../html_base_inicio.php' ?>
<p>
        Si ya sabes cómo jugar, puedes iniciar haciendo clic en el botón
        "Activar bomba" para que aparezca la primera sílaba, sino más abajo
        tienes las instrucciones
</p>
<label>
        <code>t<sub>min</sub></code> =
        <input class="jsTMin" type="text" value="5"/>
</label>
<label>
        <code>t<sub>max</sub></code> =
        <input class="jsTMax" type="text" value="60"/>
</label>
<button class="jsBotonActivarBomba">
        Activar bomba
</button>
<div class="bomba-silaba jsSilaba"></div>
<button class="jsBotonMostrarSiguienteSilaba" hidden="hidden">
        Mostrar siguiente sílaba
</button>
<div class="jsReinicioMensaje" hidden="hidden">
        También puedes
        <button class="jsBotonReiniciar">
                reiniciar el juego
        </button>
</div>
<div class="jsSilabasAnteriores"></div>
<audio class="jsSonido" loop="loop" src="tictoc.mp3"></audio>
<h2>Instrucciones</h2>
<ol>
        <li>
                Al activar la bomba se le dará a la misma un tiempo
                <code>t</code>
                aleatorio invisible entre
                <code>t<sub>min</sub></code>
                y
                <code>t<sub>max</sub></code>
                segundos, y el sonido del reloj iniciará
        </li>
        <li>
                Se mostrará una sílaba aleatoria con un guión antes, después, o
                ambos, indicando si la sílaba es inicial, final, o intermedia,
                respectivamente
        </li>
        <li>
                El jugador debe decir una palabra que tenga la sílaba en la
                posición solicitada
        </li>
        <li>
                Si la bomba:
                <ol type="a">
                        <li>
                                No ha explotado, el siguiente jugador debe hacer
                                clic en "Mostrar siguiente sílaba" para
                                continuar el juego
                        </li>
                        <li>
                                Explota, el jugador que está en turno sale del
                                juego
                        </li>
                </ol>
        </li>
</ol>
<?php require_once '../html_base_fin.php' ?>
