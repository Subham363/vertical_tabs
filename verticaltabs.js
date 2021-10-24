function showContent(evt, module_content_id) {
    var i, content_tab, subtopic;
    content_tab = document.getElementsByClassName("content_tab");
    for (i = 0; i < content_tab.length; i++) {
        content_tab[i].style.display = "none";
    }
    subtopic = document.getElementsByClassName("subtopic");
    for (i = 0; i < subtopic.length; i++) {
        subtopic[i].className = subtopic[i].className.replace(" active", "");
    }
    document.getElementById(module_content_id).style.display = "block";
    evt.currentTarget.className += " active";
}

function showSubtopic(evt, module_ul_id) {
   var module_ul_id=document.getElementById(module_ul_id);
   if(module_ul_id.style.display ==="none"){
    module_ul_id.style.display="block";
    

   }else{
    module_ul_id.style.display="none";
   }
}
