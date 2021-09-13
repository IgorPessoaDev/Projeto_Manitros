document.querySelector('body').addEventListener('keydown', (event) => {
    if (event.keyCode == 32) {
        verificar()
    }
})

let valoresSem = [];
let valorTotal = 0;
let temp = 0;
let metaSem = 0;
document.getElementById('addMeta').addEventListener('click', () => {
    let m = parseFloat(document.getElementById('meta').value);
    if (m) {
        metaSem = m;
        document.getElementById('meta').value = "";
        document.getElementById('meta').focus();
        document.getElementById('metaS').innerHTML = `A sua meta é ${metaSem}`;
    } else {
        alert('Adicione um valor no campo');
        document.getElementById('meta').focus();
    }
})
function verificar() {
    document.getElementById('valor').focus();
    let hrs = parseFloat(document.getElementById('valor').value);
    if (hrs) {
        valoresSem.push(hrs);
        document.getElementById(`${temp}`).innerHTML = `Ex: ${hrs}`;
        if (temp >= 6) {
            document.getElementById(`${temp}`).innerHTML = `Ex: ${hrs}`;
            soma()
            exibir()
        } else {
            temp++
            document.getElementById(`${temp}`).innerHTML = `Daqui 2 segs`;
            setTimeout(() => {
                document.getElementById(`${temp}`).innerHTML = `<input type="number" name="number" id="valor">`;
                document.getElementById('valor').focus();
            }, 2000);
        }
    } else {
        alert('adicione um numero no campo');
        document.getElementById('valor').focus();
    }
}
function soma() {
    valoresSem.forEach((item, index, array) => {
        valorTotal += item
    })
}
function exibir(){
    if (metaSem != 0) {
        if (valorTotal >= metaSem) {
            document.getElementById('mesesFeitos').innerHTML = `A meta da semana foi cumprida`;
        } else {
            document.getElementById('mesesFeitos').innerHTML = `A meta da semana nao foi cumprida`;
        }
    }else{
        document.getElementById('mesesFeitos').innerHTML = `Você fez ${valorTotal} hrs !!`;
    }
}
