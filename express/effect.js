let constrain = 1000;
let mouseOverContainer = document.getElementById("main-container");
let ex1Layers = document.getElementsByClassName("to-deg");
console.log(ex1Layers[0])
function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

document.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  for (let i of ex1Layers) {
    let position = xy.concat([i]);
    window.requestAnimationFrame(function(){
      transformElement(i, position);
    });
  }
  for (i = 0; i < ex1Layers.length; ++i) {
    
  }
  
};