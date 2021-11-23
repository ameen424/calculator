//For Loop
const forLoop=()=>{
    for (let i=0; i<=20; i++){
      console.log(i);
     if (i==20){
       console.log("End of For Loop");
     }
    }
  };
  forLoop();
  
  
  //While Loop
  const whileLoop=()=>{
    let i=0;
    while(i<20){
      i++;
      console.log(i);
      if(i==20){
        console.log("End of while loop");
      }
    }
  };
  whileLoop();
  
  
  //Do while Loop
  const doWhileLoop=()=>{
    let i=0;
    do{
      console.log(i);
      i++;
      if(i>20){
      console.log('End of do while loop');
    }
    }
    while(i<=20);
  };
  doWhileLoop();