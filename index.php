<?php require_once 'html_base_inicio.php' ?>
<h2>Juegos disponibles:</h2>
<ul>
        <?php foreach (glob('*', GLOB_ONLYDIR) as $directorio) { ?>
                <?php require_once ($directorio . '/informacion.php') ?>
                <li>
                        <a href="<?= $directorio ?>">
                                <?= $pagina['titulo'] ?></a>
                        <?= $pagina['resumen'] ?>
                </li>
        <?php } ?>
</ul>
<?php require_once 'html_base_fin.php' ?>
