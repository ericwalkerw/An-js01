var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("user_info").innerHTML = xhr.responseText;
  }
};
xhr.open("GET", "./user.json", true);
xhr.send();
