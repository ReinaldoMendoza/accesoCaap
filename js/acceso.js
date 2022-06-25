function confirmarUsuario() {
 usuario = document.getElementById("listado").value;
 clave = document.getElementById("clave").value;
 mens1 = "Estimado(a) " + usuario + " su acceso fue permitido";

 if (usuario=="Reinaldo Mendoza" && clave==7208 ){alert(mens1); window.location.href = "URL=G:\DD2T - REY\HTML_CAAP\Biblias en Texto\RV60\indiceReinaValera1960.html";}
  else if (usuario=="Moises Saravia" && clave==1112){alert(mens1);}
  else if (usuario=="Maria Inostroza" && clave==1520){alert(mens1);}
  else if (usuario=="Usuario Visita"){alert(mens1);}
  else {alert(usuario + " usted no tiene acceso o su clave es erronea!!"); }




   

    



}









