$(function (){
    $('form').on('submit', function (e){
        e.preventDefault();

        $.ajax({
            type:"post",
            url: 'addCar',
            data: $('form').serialize(),
            success:function(data) {
                loadCars();
            },
            error: function(){
                alert("oops");
            }
        })
    })
});

function loadCars() {
    $.getJSON('cars', function (data) {
        var table = $('<table id="carstable"></table>');
        table.append('<tr><th>Név</th><th>Fogyasztás</th><th>Szín</th><th>Gyártó</th><th>Elérhetőség</th><th>Évjárat</th><th>Lóerő</th></tr>');
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td>' + value.name + '</td>');
            var consumptionCell = $('<td>' + value.consumption + '</td>');
            var colorCell = $('<td>' + value.color + '</td>');
            var manufacturerCell = $('<td>' + value.manufacturer + '</td>');
            var availableCell = $('<td>' + value.available + '</td>');
            var yearCell = $('<td>' + value.year + '</td>');
            var horsepowerCell = $('<td>' + value.horsepower + '</td>');
            row.append(nameCell);
            row.append(consumptionCell);
            row.append(colorCell);
            row.append(manufacturerCell);
            row.append(availableCell);
            row.append(yearCell);
            row.append(horsepowerCell);
            table.append(row);
        });
        $("#content").append(table);
    })
}