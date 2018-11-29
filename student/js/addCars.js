$(function ()
{
    $('form').on('submit', function (e)
    {
        e.preventDefault();

        $.ajax
        ({
            type:"post",
            url: 'addCar',
            data: $('form').serialize(),
            success:function(data)
            {
                loadCars();
            },
            error: function()
            {
                alert("Hiba történt a feltöltésnél.");
            }
        })
    }
    )
});

function loadCars()
{
    $.getJSON
    ('cars', function (data)
    {
        $('#autotabla').empty();

        let table = $('<table class="table-black"></table>');
        table.append('<tr><th>Név</th><th>Fogyasztás</th><th>Szín</th><th>Gyártó</th><th>Elérhetőség</th><th>Évjárat</th><th>Lóerő</th></tr>');
        $.each(data, function (key, value)
        {
            let sor = $('<tr></tr>');
            let nevCella = $('<td>' + value.name + '</td>');
            let fogyasztasCella = $('<td>' + value.consumption + '</td>');
            let szinCella = $('<td>' + value.color + '</td>');
            let gyartoCella = $('<td>' + value.manufacturer + '</td>');
            let elerhetosegCella = $('<td>' + value.available + '</td>');
            let evjaratCella = $('<td>' + value.year + '</td>');
            let loeroCella = $('<td>' + value.horsepower + '</td>');
            sor.append(nevCella);
            sor.append(fogyasztasCella);
            sor.append(szinCella);
            sor.append(gyartoCella);
            sor.append(elerhetosegCella);
            sor.append(evjaratCella);
            sor.append(loeroCella);
            table.append(sor);
        }
        );
        $("#autotabla").append(table);
    }
    )
}

$(document).ready(function ()
{

    $.getJSON('manufacturers', function (data)
    {
        $('#ddl').empty();

        $.each(data, function (i, item)
        {
            $('#ddl').append('<option value="' + item.name + '">' + item.name + '</option>');
        }
        )
    }
    );
});