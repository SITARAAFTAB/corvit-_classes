
      
      
 
// 1-- change the color size and text
 
 // document.getElementById('heading').innerHTML="Text Change";
        // document.getElementById('heading').style.color="green";
        // document.getElementById('heading').style.fontSize="5rem";

        
        // var x=10;
        // var y=5;

        // var a="hello";
        // var b="students";

        // var color= document.getElementById('colorPick').value;

        // document.getElementById('heading').style.color=color;

        // document.getElementById("heading").style.display='none';

        // 1st function =>for if & else
        function textData(){

        var age=document.getElementById("age").value;

        if(age>35){
          document.getElementById('heading').innerHTML='You Are Old !!';
        }

        else{
           document.getElementById('heading').innerHTML='You Are Young!!';
        }
      }
             
      // 2nd function =>dipay hide & none
      function showHide(){

        var x=document.getElementById('heading2');
        if(x.style.display=='none'){

          x.style.display='block';
        }
        else{
           x.style.display='none';
        }
      }


        //  3rd function =>show & hide password
      function passwordShowHide(){

        var passInput=document.getElementById("passInput");
        var icon=document.getElementById('eyeIcon');

        if(passInput.type=="password"){
          passInput.type="text";

          icon.classList.remove('bi-eye-fill');
          icon.classList.add("bi-eye-slash-fill");
        }
        else{
          passInput.type="password";

          icon.classList.add('bi-eye-fill');
          icon.classList.remove("bi-eye-slash-fill");
        }
      }

      // 4th function =>to get random number

      function getRndInteger(){
        var x = Math.floor(Math.random()*100);
        document.getElementById('demo').innerHTML=x;
      }


// Check input using (if-else) condition and then tenerary operator
    // function Register(){
    //     var pass=document.getElementById('passInput').value;
    //     var message=document.getElementById('message');

    //     message.innerHTML=pass.length>6? "<div class='text-success'>Strong Password </div>" : "<div class='text-danger'>Weak password </div>"
        
        // if(pass.length>6){
        //     message.innerHTML="<div class='text-success'> Strong Password</div>"
        // }
        // else{
        //     message.innerHTML="<div class='text-danger'> Weak Password</div>"
        // }
    // }

    function changeName(){
        const  name=["Ali","Ahmad","Zain","Haider"];

        // var random=Math.floor(Math.random()*4)
        // document.getElementById('heading').innerHTML=name[random.length];
    
        // document.getElementById('heading').innerHTML=name[3];

        // name.push("Asad");
        // document.getElementById('heading').innerHTML=name.length

        name.pop();
        document.getElementById('heading').innerHTML=name.length
    }