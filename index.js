
   const myBirthday = () => {
    // retrieve elements
    var dateElement = document.getElementById("date")
    const genderElement = document.getElementById("gender")
 
    
    
    // retrieving input values
    
    var date = dateElement.value; 
    const gender = genderElement.value;
 
    const myBirthday = [date,gender]
    
    // day of the week function
    // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    // date = cc-yy-mm-dd
    // Retrieve the date values from the date of birth for us to run the day of the week function
    // convert date values to number
    
       
    var CC = Number(date.slice(0,2));
    
    var YY = Number (date.slice(2,4));
    
    var MM = Number (date.slice(5,7));
    
    var DD = Number (date.slice(8,10));
    
    //     const dates = [CC, YY, MM, DD]
    
    
    var dayOfTheWeek = Math.floor((((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7);
        
        
    //    days of the week
    
    const daysOfTheWeek = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
     
        //   male Akan names
    const maleNames = [
            "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
    
    // female Akan names
    const femaleNames = [
            "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];
    
    
          // date of birth validation
    
    if (date == ''){
            alert('Please enter a valid Date of Birth')
    }
      
    if (gender == 'null'){
              alert('Please select your gender')
 
    }
     
        //   male name get function
    
    var index;
        
       if (dayOfTheWeek == 0){
          index = 6;
       }
 
       else {
          index = dayOfTheWeek - 1;
       }
             
    if (gender == "male" & date != ''){
       document.getElementById("results").textContent = ('You were born on a ' + daysOfTheWeek[index] + ',' + 'Your Akan Name is ' + maleNames[index] +'!!')
                  
    } 
    
    
    else if (gender == "female" & date != ''){
       document.getElementById("results").textContent = ('You were born on a ' + daysOfTheWeek[index] + ',' + 'Your Akan Name is ' + femaleNames[index] +'!!')
        
    }
    
    else{
 
       alert ('You have entered incorrect datails, kindly try again!')
    }  
                    
    //clear/reset fuction
    document.getElementById("clear").onclick = function() {
       document.getElementById("myBirthday").value = "";
       document.getElementById("gender").value = 'null';
       document.getElementById("results").textContent = "";
     };
 
    
    console.log(myBirthday)
 
    }
         