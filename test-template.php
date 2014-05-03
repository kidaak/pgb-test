<?php
if(!isset($_GET["page"])) {
    $list = glob('tpl/*.html');
    foreach ($list as $key => $value) {
        echo '<a href="?page='.$value.'">'.$value.'</a><br/>';
    }
    $list = glob('tpl/*/*.html');
    foreach ($list as $key => $value) {
        echo '<a href="?page='.$value.'">'.$value.'</a><br/>';
    }
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"><!-- end , target-densitydpi=device-dpi -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <!-- MS -->
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">

    <link rel="stylesheet" href="css/style.css">
    <title>Road Safety</title>
    
    <script src="js/vendor/modernizr.custom.61873.js"></script>
</head>

<body class="no-transition">
    <div id="app">
        <?php $file = $_GET['page']; include($file); ?>
    </div><!-- end #app -->
    
    <script src="phonegap.js"></script>
    <!-- to prepend later -->
    <script src="js/vendor/jquery-1.11.0.min.js"></script>
    <script src="js/vendor/underscore-min.js"></script>
    <script src="js/vendor/handlebars-v1.3.0.js"></script>
    <script src="js/vendor/backbone-min.js"></script>
    <script src="js/vendor/backbone.localStorage-min.js"></script>
    <script src="js/vendor/i18next.min.js"></script>
    <script src="js/vendor/fastclick.js"></script>
    <script src="js/vendor/gsap/TweenLite.min.js"></script>
    <script src="js/vendor/gsap/CSSPlugin.min.js"></script>
<!--
    <script src="js/main.min.js"></script>
    <script>
        //app.initialize();
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            app.onDeviceReady();
        }

        /* MS Fix */
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            $('#app').addClass('ie-mobile');

            var msViewportStyle = document.createElement("style");

            msViewportStyle.appendChild(
                document.createTextNode(
                    "@-ms-viewport{width:auto!important}"
                )
            );

            msViewportStyle.appendChild(
                document.createTextNode(
                    "@-ms-viewport{height:device-height!important}"
                )
            );

            document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
        }
    </script>-->
</body>
</html>