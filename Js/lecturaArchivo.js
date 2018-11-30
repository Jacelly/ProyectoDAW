function addNew(titulo, vendido, precio) {
   var articulo = $("<article/>", {
      "class":"articulo col-12 col-12 col-sm-12"
    });

    var figure = $("<figure/>", {
      "class":"row col-12 col-sm-12"
    });

    var img = $("<img/>",{
      "class": "col-xl-4 img-fluid col-6 col-sm-2",
      "src": "https://via.placeholder.com/100x100"
    });

    var header = $( "<header/>", {
      "class":"col-8 col-xl-8"
    });

    var div = $( "<div/>", {
      "class": "col-12 col-sm-12",
    });

    var a = $( "<a/>", {
      "href": "../inforaccesorio/compraAudifono.html"
    });

    var h3 = $( "<h3/>", {
      html: titulo
    });

    var p = $( "<p/>", {
      html: vendido + " vendidos - audifonos - Guayas - Guayaquil"
    });

    var p1 = $( "<p/>", {
      html: "U$S " + precio
    });

    var hr = $( "<hr/>", {
    });

    figure.appendTo(articulo)
    img.appendTo(figure);
    header.appendTo(figure);
    div.appendTo(header);
    a.appendTo(div);
    h3.appendTo(a);
    p.appendTo(div);
    p1.appendTo(div);
    articulo.appendTo( "#articulos" );
    hr.appendTo( "#articulos" );
}


function loadNewsJson() {
   $.getJSON( "../base_datos/inventario.json", function( data ) {
    
      $.each( data, function( key, val ) {
        //addNew(val.titulo, val.descripcion)
        $.each(val, function(key,val){
          //addNew(valor.titulo, valor.descripcion)
          $.each(val, function(key,valor){
            addNew(valor.titulo, valor.vendidos, valor.Precio);
            console.log(valor);
          });
        });
      });
    
  });
}

$(document).ready(function(){
  loadNewsJson();

  $("button#buscar").click(function(e){

    var texto = $('input#buscador').val();
    
    if(texto.length != 0) {
      
      var noticias = $('#articulos .articulo');
      $('#articulos .articulo').filter(function(index){
        
        $(this).show();
        
        var noticia = $(this).text()
        if(noticia.indexOf(texto) == -1) {
          $(this).hide()
        }

      });

    } else {
      $('#articulos .articulo').each(function(){
        $(this).show();
      });
    }
    return false;
  })
});