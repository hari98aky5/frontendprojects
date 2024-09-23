function convert(){
  let cmValue=Number(document.getElementById("input").value);
  let inchVal=cmValue/2.54;
  let res=document.getElementById("result");
  res.innerHTML=inchVal.toFixed(2) + "inches";
  }
