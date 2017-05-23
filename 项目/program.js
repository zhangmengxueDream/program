window.onload = function () {
    var imgArry= ["images/gnico_01.png",
    "images/gnico_02.png","images/gnico_03.png",
    "images/gnico_04.png","images/gnico_05.png",
    "images/gnico_06.png","images/gnico_07.png",
    "images/gnico_08.png","images/gnico_09.png",
    "images/gnico_10.png","images/gnico_11.png",
    "images/gnico_12.png"];
    var titleArry = ["微网站","微网站",
    "微网站","微网站","微网站","微网站",
    "微网站","微网站","微网站",
    "微网站","微网站","微网站"];
    var titleArray = ["5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站"
    ,"5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站"];
    var titleAry = ["5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站","5分钟轻松建站",
    "5分钟轻松建站"];
    creatCell(4,3,imgArry,titleArry,
        titleArray,titleAry)
    function creatCell (w_num,h_num){
	  var box = document.getElementById('box');
	  for (var i = 0; i < w_num*h_num; i++) {
	     var sub_div = document.createElement("div");
         sub_div.className = "sub_div";
	     var l = i%w_num;
	     var r = parseInt(i/w_num);
	     sub_div.style.left = l*210 + "px";
	     sub_div.style.top = r*175 + "px";;
	     box.appendChild(sub_div);
         var sub_img=document.createElement("img");
         sub_img.src=imgArry[i];
         sub_img.style.width = "90px";
         sub_img.style.height = "95px";
         sub_div.appendChild(sub_img);
         var title_one=document.createElement("p");
         title_one.innerText=titleArry[i];
         sub_div.appendChild(title_one);
         title_one.style.color="block";
         title_one.style.fontSize="18px";
         var title_two=document.createElement("p");
         title_two.innerText=titleArray[i];
         title_two.style.color="gray";
         title_two.style.fontSize="12px";
         sub_div.appendChild(title_two);
         var title_three=document.createElement("p");
         title_three.innerText=titleAry[i];
         title_three.style.color="gray";
         title_three.style.fontSize="12px";
         sub_div.appendChild(title_three);
	   } 
    }
}