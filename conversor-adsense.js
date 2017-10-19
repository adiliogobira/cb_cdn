function converter(){
 var ele1 = document.getElementById("codigosblogger");
 var replaced;
 replaced = ele1.value;
 replaced = replaced.replace(/©/ig, "&copy;");
 replaced = replaced.replace(/'/ig, "&#039;");
 replaced = replaced.replace(/</ig, "&lt;");
 replaced = replaced.replace(/>/ig, "&gt;");
 replaced = replaced.replace(/"/ig, "&quot;");
 ele1.value = replaced;
}

document.write('<center><div style="width: 450px;">\
<textarea id="codigosblogger" style="border: 1px solid gray; height: 140px; width: 450px;" value="Cole seu código aqui e pressione Converter Codigo..."></textarea>\
<div id="mainformconversor"><div id="botaoconversor" style="float: left;"><input onclick="converter();" type="button" value="Converter Codigo" /></div>\
<div id="creditostecdicas" style="float: right;"><a title="Códigos Blogger - O seu blog do seu jeito!" href="http://www.codigosblogger.com" target="_blank">Desenvolvido por Códigos Blogger</a></div>\
</div></div></center>')