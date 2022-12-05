// Catatan
// 1. ganti false untuk data1 (dan kebalikannya)

var data1=0, data2=0, hasil=0, oprator, ganti=false, gantiTitik=false, gantiOprator=false; 
updateDisplay();

//fungsi masukan dan olah angka
function nol(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="0";
        }else{
            data1+="0";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="0";
        }else{
            data2+="0";
        }
        hasil=data2;
        updateDisplay();
    }
}

function satu(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="1";
        }else{
            data1+="1";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="1";
        }else{
            data2+="1";
        }
        hasil=data2;
        updateDisplay();
    }
}

function dua(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="2";
        }else{
            data1+="2";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="2";
        }else{
            data2+="2";
        }
        hasil=data2;
        updateDisplay();
    }
}

function tiga(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="3";
        }else{
            data1+="3";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="3";
        }else{
            data2+="3";
        }
        hasil=data2;
        updateDisplay();
    }
}

function empat(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="4";
        }else{
            data1+="4";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="4";
        }else{
            data2+="4";
        }
        hasil=data2;
        updateDisplay();
    }
}

function lima(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="5";
        }else{
            data1+="5";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="5";
        }else{
            data2+="5";
        }
        hasil=data2;
        updateDisplay();
    }
}

function enam(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="6";
        }else{
            data1+="6";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="6";
        }else{
            data2+="6";
        }
        hasil=data2;
        updateDisplay();
    }
}

function tujuh(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="7";
        }else{
            data1+="7";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="7";
        }else{
            data2+="7";
        }
        hasil=data2;
        updateDisplay();
    }
}

function delapan(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="8";
        }else{
            data1+="8";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="8";
        }else{
            data2+="8";
        }
        hasil=data2;
        updateDisplay();
    }
}

function sembilan(){
    if (ganti==false){
        if (hasil==0 && gantiTitik==false) {
            data1="9";
        }else{
            data1+="9";
        }
        hasil=data1;
        updateDisplay();
    }else if (ganti==true) {
        if (data2==0 && gantiTitik==false) {
            data2="9";
        }else{
            data2+="9";
        }
        hasil=data2;
        updateDisplay();
    }
}
function titik() {
    if (ganti==false && gantiTitik==false){
        data1+=".";
        hasil=data1;
        gantiTitik=true;
        updateDisplay();
    }else if (ganti==true && gantiTitik==false) {
        data2+=".";
        hasil=data2;
        gantiTitik=true;
        updateDisplay();
    }
}






//masukan dan olah oprator
function tambah(){
    ganti=true;
    gantiTitik=false;
    hasil="+";
    oprator="tambah";
    if (gantiOprator==false) {
        gantiOprator=true;
    }else if(gantiOprator==true){
        samaDengan();
        gantiOprator=false
    }
    data2=0;
    updateDisplay();
}
function kurang(){
    ganti=true;
    gantiTitik=false;
    hasil="-";
    oprator="kurang";
    data2=0;
    updateDisplay();
}
function kali(){
    ganti=true;
    gantiTitik=false;
    hasil="X";
    oprator="kali"; 
    data2=0;
    updateDisplay();
}
function bagi(){
    ganti=true;
    gantiTitik=false;
    hasil="/";
    oprator="bagi";
    data2=0;
    updateDisplay();
}
function samaDengan(){
    if (oprator=="tambah") {
        hasil=Number(data1)+Number(data2);
    } else if (oprator=="kurang"){
        hasil=Number(data1)-Number(data2);
    } else if (oprator=="kali"){
        hasil=Number(data1)*Number(data2);
    } else if (oprator=="bagi"){
        hasil=Number(data1)/Number(data2);
    }
    ganti=false;
    gantiTitik=false;
    data1=hasil;
    data2=0;
    updateDisplay();
}
function c(){
    data1="0";
    data2="0";
    hasil="0";
    ganti=false;
    gantiTitik=false;
    updateDisplay();
}




//update tampilan
function updateDisplay(){
    document.getElementById("hasil").innerHTML=hasil;
}


















