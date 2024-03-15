$(document).ready(function(){
    // Funzione per gestire il cambiamento della selezione
    $("#select").change(function(){
        // Recupera il valore selezionato
        var scelta = $(this).val();
        
        if (scelta == "blank") {
            document.body.style.backgroundImage = 'none';
            $("#image").html("");
            $("#message").html("<h5>SELEZIONA UN'OPZIONE PER INIZIARE</h5>");
        } else if (scelta == "144p") {
            document.body.style.backgroundImage = 'none';
            $("#image").html("<img src='360_F_358656579_jCH2jBCvDLQTmbZfxlPzxiyM2yEfFpQo-removebg-preview.png' alt='Immagine'>");
            $("#message").html("");
        } else if (scelta == "240p") {
            document.body.style.backgroundImage = 'none';
            $("#image").html("<img src='pixel-art-sun-icon-png.png' alt='Immagine'>");
            $("#message").html("");
        } else if (scelta == "480p") {
            document.body.style.backgroundImage = 'none';
            $("#image").html("<img src='pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png' alt='Immagine'>");
            $("#message").html("");
        } else if (scelta == "720p") {
            document.body.style.backgroundImage = 'none';
            $("#image").html("<img src='7156509-KSTSUJCT-7.png' alt='Immagine'>");
            $("#message").html("");
        } else if (scelta == "1080p") {
            document.body.style.backgroundImage = 'url("79228dbe8293c579825acd4ab353d128.jpg")';
            $("#image").html("");
            $("#message").html("you🤍");
        }
    });
});
