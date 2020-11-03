document.addEventListener("click", (evt) => {
    const corazon5 = document.getElementById("input5");
     const corazon4 = document.getElementById("input4");
     const corazon3 = document.getElementById("input3");
     const corazon2 = document.getElementById("input2");
     const corazon1 = document.getElementById("input1");
     let targetElement = evt.target;
     let count = 0;

     do {
       if (targetElement == corazon5 || targetElement == corazon4 || targetElement == corazon3 || targetElement == corazon2 || targetElement == corazon1 ){
         // Do nothing, just return.
         document.getElementById('insertInfo').textContent = "HAS CLICADO EN UN CORAZON" ;
           count ++;
        return;
       }
       // Go up the DOM.
       // compreender mejor el funcionamento abajo:
      targetElement = targetElement.parentNode;
    } while (targetElement);

  // //
   document.getElementById('insertInfo').textContent = "has clicado fuera del corazon" ;
   //document.getElementById("input5").classList.remove("input:checked ~ label");

   }
   )
