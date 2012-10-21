window.hmCalculateBMI = (function(){
  var l = parseFloat(document.getElementById('hm-l').value) / 100;
  var m = parseFloat(document.getElementById('hm-m').value);
  if(l>0){
    var output = m/(l*l);
    document.getElementById('hm-out').value=Math.round(output * 10) / 10;
  }
});

var _hm_wrapper = document.getElementById('hmBMI');
_hm_wrapper.innerHTML="<h3>BMI-Rechner</h3><p>Übergewicht? Der Body-Mass-Index gibt Auskunft.</p>";
_hm_wrapper.innerHTML += '<p><input placeholder="Gewicht" id="hm-m" type="number" min="30">Kg</p>';
_hm_wrapper.innerHTML += '<p><input placeholder="Körpergröße" id="hm-l" type="number" min="120">cm</p>';
_hm_wrapper.innerHTML += '<h3><label for="hm-out">Ihr BMI:</label></h3><p><output id="hm-out" value="0"></p>';

document.getElementById('hm-l').onkeyup=hmCalculateBMI;
document.getElementById('hm-m').onkeyup=hmCalculateBMI;