function ChangeImageAndBack(){imgback();ThreeSecChange2();}


function ThreeSecChange2() {setTimeout("pandamanchange2()",3000);}
function pandamanchange2() {document.getElementById('change p2-13').src = './image/pandaman.JPG';}

//function ThreeSecBack() { 
//関数pandamanchange1()を3000ミリ秒間隔で呼び出す 
//  setInterval("imgback()",3000);}

function imgback() {document.getElementById('change p2-13').src = './image/pandaman2.JPG';}