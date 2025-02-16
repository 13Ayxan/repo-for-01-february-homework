let birinci_eded = 15
let ikinci_eded = 3
let toplama_sonrasi = 0


function topla() {
    toplama_sonrasi = birinci_eded + ikinci_eded
    document.getElementById('netice').innerHTML= toplama_sonrasi
}



function cixma() {
    toplama_sonrasi = birinci_eded - ikinci_eded
    document.getElementById('netice').innerHTML= toplama_sonrasi
}



function vurma() {
    toplama_sonrasi = birinci_eded * ikinci_eded
    document.getElementById('netice').innerHTML= toplama_sonrasi
}



function bolme() {
    toplama_sonrasi = birinci_eded / ikinci_eded
    document.getElementById('netice').innerHTML= toplama_sonrasi
}