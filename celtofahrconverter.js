function convert(){
  let cval=Number(document.getElementById("input").value);
  let fvalue= cval * (9/5) + 32;
  let res=document.getElementById("result");
  res.innerHTML=fvalue.toFixed(2)+"fahreniet";
  }
