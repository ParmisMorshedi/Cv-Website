const container = document.getElementById("container");
 container.addEventListener('click', function(){
    console.log('Container clicked!');
    this.style.backgroundColor='rgb(109, 129, 122)';

 });


 let pressedKeys = "";

 window.addEventListener('keyup',(e)=>{
    pressedKeys += e.key;
     if(pressedKeys === "1337"){
        alert("Congratulations! You're now an official member of the secret society of keyboard ninjas! 🎉💻" );
     
        pressedKeys= "";
    }
    
 });

