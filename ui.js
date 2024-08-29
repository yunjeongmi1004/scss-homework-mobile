
function toggleClass(element, className) {
  if(element.classList.contains(className)){
    element.classList.remove(className);
  }else{
    element.classList.add(className);
  };
}
toggleBtn.addEventListener('click', function(){
  toggleClass(toggleBtn, 'active');
});