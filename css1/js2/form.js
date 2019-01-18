cin=email=tel=null;
function recupAll(){
    cin=document.getElementById('cin');
    email=document.querySelector('#email');
    tel=document.querySelector('#tel');    
}
messageErreur="";
function validerCin(){
    recupAll();
    mcin=/^[a-z]{1,2}[0-9]{6}$/;
    if(!mcin.test(cin.value)){
messageErreur+="Cin non valide<br>";
cin.className='bg-danger text-white form-control';
cin.focus();
console.log( messageErreur);
    }else{
      cin.className="form-control" ; 
    }

}
function validerTel(){
recupAll();
mtel=/^052[0-9]{1}[-/ ]{0,}[0-9]{6}$/;
if(!mtel.test(tel.value)){
    messageErreur +="Tel non valide<br>";

}
}function validerEmail(){
recupAll();
memail=/^\S+@ifiag.ma$/;
if(!memail.test(email.value)){
    messageErreur +="Email non valide<br>";

}
}
function validerSalaire(){
   salaire=document.getElementById('salaire').value;
if(isNaN(salaire)){
messageErreur+="salaire n'est pas un nombre";
}
// /salaire.length
    }
function validerTout (){
 validerCin();
 validerEmail();
 validerTel();
 validerSalaire();
 if(messageErreur==""){
     document.querySelector('form').submit();
 }else {
    erreur= document.getElementById('erreur')
    erreur.innerHTML=messageErreur;
    messageErreur=""
    erreur.className='alert alert-danger'
 }
}
memoire=""
function compter(){
    // span=document.createElement('span');//"<span></span>"
    // span.innerHTML="0"
    // adresse=document.getElementById('adresse');
    // // adresse.parentNode.innerHTML+=span.innerHTML
    // span=$('<span></span>')
    // span.html(0)
    // span.addClass('alert alert-danger')
 //   $('#adresse').closest('.form-group').html($('#adresse').html()+span.html())
if($('#adresse').val().length<=10){
     $('#cpt').html($('#adresse').val().length)
     memoire=$('#adresse').val()

}else{
$('#adresse').val(memoire);
}
}

function toutEstRequis(){

}

