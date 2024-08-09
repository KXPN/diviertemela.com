<?php require_once 'informacion.php' ?>
<?php require_once '../html_base_inicio.php' ?>
<p>
        Te ayudo si tienes una lista de ítems que quieres aleatorizar. Escribe
        cada ítem en una nueva línea y luego presiona el botón "Aleatorizar"
</p>
<h2>Elementos</h2>
<div
  class="aleatorizador-lista jsItems"
  contenteditable="true"
>
  Escribe aquí
</div>
<button class="jsBotonAleatorizar">
        Aleatorizar
</button>
<div class="jsListaAleatorizada"></div>
<?php require_once '../html_base_fin.php' ?>
