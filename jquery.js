<Doctype>

<head>
    <body>
        <title>audio</title>
    </body>
</head>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sound Animals</title>
    <script src="js/jquery.js"></script>

    <audio id="audioAnjing" src="audio/dog.mp3" type="audio/mpeg"></audio>
    <audio id="audioBeo" src="audio/african-grey-parrot.mp3" type="audio/mpeg"></audio>
    <audio id="audioBuaya" src="audio/buaya.mp3" type="audio/mpeg"></audio>
    <audio id="audioBurunghantu" src="audio/owl.mp3" type="audio/mpeg"></audio>
    <audio id="audioRusa" src="audio/moose.mp3" type="audio/mpeg"></audio>
    <script>
        $("document").ready(function() {
            const audioAnjing = $("#audioAnjing")[0];
            const audioBeo = $("#audioBeo")[0];
            const audioBuaya = $("#audioBuaya")[0];
            const audioBurunghantu = $("#audioBurunghantu")[0];
            const audioRusa = $("#audioRusa")[0];
            $("div.anjing").click(function() {
                $(this).css({
                    background: "url('img/dog.png')"
                });
                audioAnjing.play();
            });
            $("div.beo").click(function() {
                $(this).css({
          background: "url('img/african-grey-parrot.png')"
                });
                audioBeo.play();
            );
            $("div.buaya").click(function() {
                $(this).css({
                    background: "url('img/alligator.png')"
                });
                audioBuaya.play();
            
            $("div.burunghantu").click(function() {
                $(this).css({
                    background: "url('img/owl.png')"
                });
                audioBurunghantu.play();
            );
            $("div.rusa").click(function() {
                $(this).css({
                    background: "url('img/moose.png')"
                
                audioRusa.play();
            
                });
    </script>
    <style type="text/css">
        div {
            background: greenyellow;
            padding: 5px;
            width: 112px;
            height: 112px;
            float: left;
            margin: 10px;
            cursor: pointer;
            border-radius: 20px;
        });
        
      <  div.bingkai {
            background: green;
            width: 144px;
            height: 144px;
            padding-bottom: 20px;
            /* float: left; */
            margin: 10px;
            cursor: pointer;
            border-radius: 20px;
            border: 5px solid #c2bcbc;
        );
        
        body {
            margin: auto;
            background-color: yellow;
        );
        
        h1 {
            color: black;
            text-align: center;
            line-height: 1cm;
            margin-top: 2%;
            font-weight: bold;
            text-transform: uppercase;
            font-family: 'Courier New', Courier, monospace;
        );
        
       < h5 {
            color: white;
            //* line-height: 2cm; */
            margin-top: 3%;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            font-family: 'Courier New', Courier, monospace;
        
        
        fieldset 
          padding: 2%;
            margin: 20%;
            margin-top: 8%;
            background-color: #1f83c5;
            border: 5px solid #c2bcbc;
            box-shadow: 0 7px 11px 0 rgba(0, 0, 0, 0.4), 0 12px 28px 0 rgba(0, 0, 0, 0.22);
            border-radius: 20px;
        
    </style>

<body>
    <fieldset>
        <h1>Dekati pada setiap kotak untuk menampilkan hewan</h1>
        <div class="bingkai">
            <div class="anjing">
            </div>
            <h5>Ini Anjing</h5>
        </div>
        <div class="bingkai">
            <div class="beo">
            </div>
            <h5>Ini Beo</h5>
        </div>
        <div class="bingkai">
            <div class="buaya">
            </div>
            <h5>Ini Buaya</h5>
        </div>
        <div class="bingkai">
            <div class="burunghantu">
            </div>
            <h5>Ini Burung Hantu</h5>
        </div>
        <div class="bingkai">
            <div class="rusa">
            </div>
            <h5>Ini Rusa</h5>
        </div>
    </fieldset>
</body>
 
