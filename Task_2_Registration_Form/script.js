function check() {
  document.getElementById('f1').innerHTML = document.myform.name.value;
  document.getElementById('f2').innerHTML = document.myform.email.value;
  document.getElementById('f3').innerHTML = document.myform.college.value;
  document.getElementById('f4').innerHTML = document.myform.adm.value;

  if (document.getElementById('Male').checked) {
      document.getElementById("f5").innerHTML = document.getElementById("Male").value;
  } else if (document.getElementById('Female').checked) {
      document.getElementById("f5").innerHTML = document.getElementById("Female").value;
  } else if (document.getElementById('Others').checked) {
      document.getElementById("f5").innerHTML = document.getElementById("Others").value;
  }

  var html = document.getElementById("myCheck1");
  var css = document.getElementById("myCheck2");
  var javascript = document.getElementById("myCheck3");

  if (javascript.checked == true && html.checked == true && css.checked == true) {
      return document.getElementById("f6").innerHTML = "HTML, " + "CSS " + "and " + "Javascript";

  } else if (javascript.checked == true && html.checked == true) {
      return document.getElementById("f6").innerHTML = "Javascript " + "and " + "HTML";

  } else if (javascript.checked == true && css.checked == true) {
      return document.getElementById("f6").innerHTML = "Javascript " + "and " + "CSS";

  } else if (html.checked == true && css.checked == true) {
      return document.getElementById("f6").innerHTML = "HTML " + "and " + "CSS";

  } else if (html.checked == true) {
      var j = document.getElementById("myCheck1").value;
      return document.getElementById("f6").innerHTML = j;
  } else if (css.checked == true) {
      var h = document.getElementById("myCheck2").value;
      return document.getElementById("f6").innerHTML = h;
  } else if (javascript.checked == true) {
      var c = document.getElementById("myCheck3").value;
      return document.getElementById("f6").innerHTML = c;
  }

}

function readURL(input) {
  if (input.files && input.files[0]) {

      var reader = new FileReader();
      reader.onload = function(e) {
          document.querySelector("#img").setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}