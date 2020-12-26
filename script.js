//Drop list para solecionar o ano de nascimento//

function droptListSelecionarAno()
{
let anoInicio = 1900;
let anoFim = 2021;
for (let i = anoInicio;i<=anoFim;i++){
    node=document.createElement("Option");
    textnode=document.createTextNode(i);
    node.appendChild(textnode);
    document.getElementById("selecionaAno").appendChild(node);
}
}

function verificar(){
    // window.alert('Funfou') teste botão verificar 
    var data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('selecionaAno')
    let res = document.getElementById('res')
    if (formAno.value.length == 0 || Number(
        formAno.value) > ano){
        window.alert('{ERRO} Verifique o ano novamente!!!')
    } else {
        let fSex = document.getElementsByName('radSex')
            idade = ano - Number(formAno.value)
            genero = ''
            img = document.createElement('img') 
            img.setAttribute('id', 'foto')   
        if (fSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 5){
                //Bebe
                img.setAttribute('src', 'img/baby-boy.png')
            } else if(idade < 17){
                //Criança
                img.setAttribute('src', 'img//boy.png')
            } else if(idade < 50){
                //Jovem
                img.setAttribute('src', 'img/Jovem-Homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img//old-man.png')
            }
        } else if (fSex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 5){
                //Bebe
                img.setAttribute('src', 'img/baby-girl.png')
            } else if(idade < 17){
                //Criança
                img.setAttribute('src', 'img//girl.png')
            } else if(idade < 50){
                //Jovem
                img.setAttribute('src', 'img/Jovem-mulher.png')
            } else {
                //idoso
                img.setAttribute('src','img/old-woman.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
// function limparTela(campo) {
//     if(campo.value != '' && !formAno(campo.value)){
//         campo.value = '';
//         campo.focus();
//     }
//     // window.alert('funfou')
//   }

  