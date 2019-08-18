function togglepop(ref, popup){
    popup.fadeToggle();
    var popper = new Popper(ref,popup,{
      placement:'top'          
    });
  };      

  function hidepop(popup){
    popup.fadeOut();
  };      

  function linkto(_link){
    window.location = _link;
  };