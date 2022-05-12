$("#btn-infocovid").click(function (event) {
    event.preventDefault();

    var url = "https://api.covid19tracking.narrativa.com/api/country/chile/region/metropolitana?date_from=2020-03-20&date_to=2020-03-22";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var $casos_totales = $('<p>').text(data.total.today_confirmed);

            $("#info1").empty();
            $('#info1')
                .append($casos_totales);

        })
        .catch(error => console.error(error));
});

$("#btn-infocovid").click(function (event) {
    event.preventDefault();

    var url = "https://api.covid19tracking.narrativa.com/api/country/chile/region/metropolitana?date_from=2020-03-20&date_to=2020-03-22";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var $muertes_totales = $('<p>').text(data.total.today_deaths);

            $("#info2").empty();
            $('#info2')
                .append($muertes_totales);

        })
        .catch(error => console.error(error));
});

function ocultarInfo() {
    document.getElementById('info1').style.display = 'none';
    document.getElementById('info2').style.display = 'none';
    document.getElementById('btn-verinfo').style.display = 'block';
    document.getElementById('btn-ocultar').style.display = 'none';
}

function mostrarInfo() {
    document.getElementById('info1').style.display = 'block';
    document.getElementById('info2').style.display = 'block';
}