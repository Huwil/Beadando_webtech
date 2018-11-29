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
            let nevCella = $('<td onclick="openCar(' + "'" +value.name + "'" +')">' + value.name + '</td>');
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


function openCar(manufacturer){
    document.cookie="name="+manufacturer;
    alert(manufacturer);
}