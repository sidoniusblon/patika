let isim=prompt("İsminizi giriniz");
document.querySelector("#myName").innerHTML=isim;


function showTime(){

    
    const d = new Date();
    let gun;
    switch(d.getUTCDay()){
        case 0:
            gun="Pazar";
            break;
        case 1:
            gun="Pazartesi";
            break;
        case 2:
            gun="Salı";
            break;
        case 3:
            gun="Çarşamba";
            break;
        case 4:
            gun="Perşembe";
            break;
        case 5:
            gun="Cuma";
            break;
        case 6:
            gun="Cumartesi";
            break;

    }
    
    
    let cikti= d.getHours()+":"+ d.getMinutes()+":"+d.getSeconds()+":"+gun;
    document.querySelector("#myClock").innerHTML=cikti;
    var time;
    time = setInterval('showTime()', 1000);


}
document.onload=showTime();