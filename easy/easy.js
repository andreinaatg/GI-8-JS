function EOTD (){
  const STRING_DEFAULT_VAR = "Today's Exercise: "
  const today = new Date ();

  const dayOfweek = today.getDay();
  
  let exercise;

  switch(dayOfweek){
 
    case 0:
    exercise = "running";
    break;

    case 1:
    exercise = "cycling";
    break;

    case 2:
    exercise = "fencing";
    break;

    case 3:
    exercise = "dancing";
    break;

    case 4:
    exercise = "yoga";
    break;
    
    case 5:
    exercise = "swimming";
    break;
    
    case 6:
    exercise = "swimming";
    break;


    default: 
    exercise = "rest";
    break;

  }
  console.log(STRING_DEFAULT_VAR + exercise)
}
EOTD();


