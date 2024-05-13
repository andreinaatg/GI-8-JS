function EOTD (){
    //emepzando el metodo
    const today = new Date ();
  
  // aqui estoy usando el metodo
    const dayOfweek = today.getDay();
    
    //variable vacio porque en el switch statement le vamos a dar vacio
  
    if(dayOfweek == 0){
      return "running"
    }else if (dayOfweek == 1){
      return "swimming"
    }else if (dayOfweek == 2){
      return "fencing"
    }else if (dayOfweek == 3){
      return "weightlifting"
    }else if (dayOfweek == 4){
      return "karate"
    }else if (dayOfweek == 5) {
      return "soccer"
    }else if (dayOfweek == 6){
      return "canelo"
    }else {
      console.log("rest");
    }
  
}
EOTD();  