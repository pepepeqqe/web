function showDate(){
    let out = document.getElementById('current-date');
    let outBe = document.getElementById('current-dateBe');
    let outCs = document.getElementById('current-dateCs');
    let outDe = document.getElementById('current-dateDe');
    let outEs = document.getElementById('current-dateEs');
    let today = new Date();
    let todayBe = new Date();
    let todayCs = new Date();
    let todayDe = new Date();
    let todayEs = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    outBe.innerHTML ='Дата и время для белорусской локали: ' +  todayBe.toLocaleString('be');
    outCs.innerHTML ='Дата и время для чешской локали: ' +  todayCs.toLocaleString('cs');
    outDe.innerHTML ='Дата и время для казахской локали: ' +  todayDe.toLocaleString('kk-KZ');
    outEs.innerHTML ='Дата и время для испанской локали: ' +  todayEs.toLocaleString('es');
}
function showDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('count').innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}

function Clear() {
    document.querySelector('input[type=date]').value = '';
    document.getElementById('count').innerHTML = '';
}
function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);