<!DOCTYPE html>
<html lang="es">
        <head>
                <meta charset="utf-8"/>
                <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                />
                <title>
                        <?php if (!empty($pagina['titulo'])) { ?>
                                <?= $pagina['titulo'] ?>
                                -
                        <?php } ?>
                        Diviertemela
                </title>
                <meta
                        name="description"
                        content="Para jugar <?= (
                                $pagina['titulo'] ??
                                'mela'
                        ) ?>"
                />
                <link rel="stylesheet" href="../diviertemela.css"/>
                <?php if (!empty($pagina['css'])) { ?>
                        <link rel="stylesheet" href="<?= $pagina['css'] ?>"/>
                <?php } ?>
        </head>
        <body>
                <h1>
                        <?php if (!empty($pagina['titulo'])) { ?>
                                <?= $pagina['titulo'] ?>
                                -
                        <?php } ?>
                        <a href="/">
                                Diviertemela
                        </a>
                </h1>
