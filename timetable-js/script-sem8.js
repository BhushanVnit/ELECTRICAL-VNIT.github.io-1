function openCityEight(evt, dayName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent8");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks8");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(
        " active",
        ""
      );
    }
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";

  
  }

  // Get the element with id="defaultOpen" and click on it
 

const c = document.getElementById("defaultOpen8"); 
c.click();