window.hmCalculateBMI = (function(){
  var l = parseFloat(document.getElementById('hm-l'));
  var m = parseFloat(document.getElementById('hm-m'));
  var output = m/(l*l);
  document.getElementById('hm-out').value=output;
});
document.getElementById('hm-l').onkeyup=hmCalculateBMI;
document.getElementById('hm-m').onkeyup=hmCalculateBMI;