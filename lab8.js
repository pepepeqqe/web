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