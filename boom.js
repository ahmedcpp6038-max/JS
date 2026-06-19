// giving a value to the element

const title1= document.getElementById("title1");
const mypara1= document.getElementById("para1");
const title4= document.getElementById("title4");
const link= document.getElementById("link");
// chosing a value from rpevious <p>
const element=document.getElementsByTagName("p");

// changing the content of the elements
mypara1.innerHTML = "this is a para from JS";
title1.innerHTML = "this is a title";
title4.innerHTML="this is a smaller title from js";
link.innerHTML="press on this link";
// changing the p content to the second p element(1)
document.getElementById("demo").innerHTML=element[1].innerHTML;




