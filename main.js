function controller(view, button){
  this.changeView = function(){
    var b = document.getElementById(button);
    if(b){
      b.addEventListener('click', function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById('content').innerHTML = this.responseText;
           }
        };
        xhttp.open("GET", view, true);
        xhttp.send();
      });
    }
  }
}
var master = new controller('master1.html', 'master');
master.changeView();
var selfa = new controller('selfa.html', 'selfa');
selfa.changeView();
