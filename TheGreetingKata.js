
function greet(name) {
  
  if(name == null){
    return `Hello, my friend.`;
  }else {
  //   var listwithOutUpper = name.filter(function(name) {
  //     if(name == name.toUpperCase()) {
  //         getUpper = name
  //     }   
  //     return name != name.toUpperCase()
  // }).join(" and ")
   
    if(Array.isArray(name)){
       if(name.length < 3){
        return `Hello, ${name.join(" and ")}.`;
       }else{
         //if(name == name.toUpperCase())
        var getfirstname = name.splice(0,2);
        var getlastname = name 
         return `Hello, ${getfirstname.join(", ")+","} and ${getlastname}.`;
       }
       
    }else{
      if(name == name.toUpperCase()){
        return `Hello ${name}!`;
      }else{
        return `Hello, ${name}.`;
      }
     
    }
    
    
  }
   

 
  
 
}
module.exports = greet;