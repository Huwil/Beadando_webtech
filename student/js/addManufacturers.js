$(function (){
    $('form').on('submit', function (e){
        e.preventDefault();

        $.ajax({
            type:"post",
            url: 'addManufacturers',
            data: $('form').serialize(),
            success:function(data) {
                loadManufacturers();
            },
            error: function(){
                alert("oops");
            }
        })
    })
});

function loadManufacturers() {
    $.getJSON('manufacturers', function (data) {
        var table = $('<table id="manufacturerstable"></table>');
        table.append('<tr><th>Név</th><th>Ország</th><th>Alapítás</th></tr>');
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td onclick="openCar(' + "'" +value.name + "'" +')">' + value.name + '</td>');
            var countryCell = $('<td>' + value.country + '</td>');
            var foundedCell = $('<td>' + value.founded + '</td>');
            row.append(nameCell);
            row.append(countryCell);
            row.append(foundedCell);
            table.append(row);
        });
        $("#content").append(table);
    })
}


function openCar(manufacturer){
    document.cookie="name="+manufacturer;
    alert(manufacturer);
}