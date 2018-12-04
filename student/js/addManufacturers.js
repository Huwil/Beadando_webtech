$(function ()
{
    $('form').on('submit', function (e)
    {
        e.preventDefault();

        $.ajax
        ({
            type:"post",
            url: 'addManufacturers',
            data: $('form').serialize(),
            success:function(data)
            {
                loadManufacturers();
            },
            error: function()
            {
                alert("Hiba történt a feltöltésnél.");
            }
        })
    }
    )
});

function loadManufacturers()
{
    $.getJSON
    ('manufacturers', function (data)
    {
        $('#gyartotabla').empty();

        let table = $('<table class="table-black"></table>');
        table.append('<tr><th>Név</th><th>Ország</th><th>Alapítás</th></tr>');
        $.each(data, function (key, value)
        {
            let sor = $('<tr></tr>');
            let nevCella = $('<td onclick="CookieManufacturers(' + "'" +value.name + "'" +')">' + value.name + '</td>');
            let orszagCella = $('<td>' + value.country + '</td>');
            let alapitasCella = $('<td>' + value.founded + '</td>');
            sor.append(nevCella);
            sor.append(orszagCella);
            sor.append(alapitasCella);
            table.append(sor);
        }
        );
        $("#gyartotabla").append(table);
    }
    )
}


function CookieManufacturers(manufacturer)
{
    document.cookie = "name=" + manufacturer;
    $.getJSON
    ("manufacturer", function (data)
    {
        $('#gyartoautoi').empty();
        let table = $('<table class="table-black"></table>');
        table.append('<tr><th>Név</th><th>Fogyasztás</th><th>Szín</th><th>Gyártó</th><th>Elérhetőség</th><th>Évjárat</th><th>Lóerő</th>');

        $.each(data, function (key, value) {
            let sor = $('<tr></tr>');
            let nev = $('<td>' + value.name + '</td>');
            let fogyasztas = $('<td>' + value.consumption + '</td>');
            let szin = $('<td>' + value.color + '</td>');
            let gyarto = $('<td>' + value.manufacturer + '</td>');
            let elerhetoseg = $('<td>' + value.available + '</td>');
            let evjarat = $('<td>' + value.year + '</td>');
            let loero = $('<td>' + value.horsepower + '</td>');
            sor.append(nev);
            sor.append(fogyasztas);
            sor.append(szin);
            sor.append(gyarto);
            sor.append(elerhetoseg);
            sor.append(evjarat);
            sor.append(loero);
            table.append(sor);
        })

        $("#gyartoautoi").append(table);
    })
}