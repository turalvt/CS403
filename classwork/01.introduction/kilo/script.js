let kilo =Number(prompt("kilonuzu girin"))
let boy =Number(prompt("boyunuzu girin"))
let sonuc = (boy*100)-100
   
    if(kilo < sonuc - 10){
    alert("ideal kilonun altindasiniz(zargana)")
    }else if (18.5<=sonuc<=24.9){
    alert ("ideal kilodasiniz")
    }else if(25<=sonuc<=29.9){
    alert("ideal kilonun uzerindesiniz")
    }else if (30<=sonuc<=39.9){
    alert("ideal kilonun cox ustundesininz(obez)")
    }else if(sonuc>40)
    alert("TEBRIKLER ARTIQ BIR INFLUCER OLDUNUZ")