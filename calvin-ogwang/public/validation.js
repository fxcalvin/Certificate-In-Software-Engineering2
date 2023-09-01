const validate=(event)=>{
    let error = 0;
    // picking input fields with their names or ids.
    let firstName = document.registration.firstname
    let lastName = document.registration.lastname
    let date = document.registration.date
    let gender = document.registration.gender
    let country = document.registration.country
    let district = document.registration.district
    let town = document.registration.town
    let zip = document.registration.zip
    let phone1 = document.registration.phone1
    let phone2 = document.registration.phone2
    let email = document.registration.email

    let firstNameError = document.getElementById("firstname-error");
    let lastNameError = document.getElementById("lastname-error");
    let dateError = document.getElementById("date-error")
    let genderError = document.getElementById("gender-error");
    let countryError = document.getElementById("country-error");
    let districtError = document.getElementById("district-error");
    let townError = document.getElementById("town-error");
    let zipError = document.getElementById("zip-error");
    let phone1Error = document.getElementById("phone1-error");
    let phone2Error = document.getElementById("phone2-error");
    let emailError = document.getElementById("email-error");

    if (firstName.value == "") {
        firstNameError.style.border = "1px solid red";
        firstNameError.textContent = "first name is required";
        firstNameError.style =
          "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
        firstName.focus();
        error++;
      } else if (firstName.value.length < 2) {
        firstNameError.style.border = "1px solid red";
        firstNameError.textContent = "First name must be at least 2 characters";
        firstNameError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        firstName.focus();
        error++;
      } else if (firstName.value.length > 15) {
        firstName.style.border = "1px solid red";
        firstNameError.textContent =
          "First name must no be greater than 15 characters";
        firstNameError.style =
          "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
        firstName.focus();
        error++;
      } else {
        firstName.style.border = "1px solid green";
        firstNameError.textContent = "";
        lastName.focus();
      }
    
      if (lastName.value == "") {
        lastName.style.border = "1px solid red";
        lastNameError.textContent = "Last name is required";
        lastNameError.style =
          "color: red; font-size:11px; font-family: sans-serif;";
        lastName.focus();
        error++;
      } else if (lastName.value.length > 15) {
        lastName.style.border = "1px solid red";
        lastNameError.textContent =
          "First name must no be greater than 15 characters";
        lastNameError.style =
          "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
        lastName.focus();
        error++;
      } else {
        lastName.style.border = "1px solid green";
        lastNameError.textContent = "";
        date.focus();
      }

      if(gender.value === ""){
        gender.style.border = "1px solid red";
        genderError.textContent = "Select a gender";
        genderError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        gender.focus();
        error++;
      }else{
        gender.style.border = "1px solid green";
        genderError.textContent = "";
        country.focus();
      }

      if(date.value === ""){
        date.style.border = "1px solid red";
        dateError.textContent = "field cannot be empty";
        dateError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        error++;
      }else{
        date.style.border = "1px solid green";
        dateError.textContent = "";
        gender.focus();
      }

      if(country.value === ""){
        country.style.border = "1px solid red";
        countryError.textContent = "field cannot be empty";
        countryError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        error++;
      }else{
        country.style.border = "1px solid green";
        countryError.textContent = "";
        district.focus();
      }
      
      if(district.value === ""){
        district.style.border = "1px solid red";
        districtError.textContent = "field cannot be empty";
        districtError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        error++;
      }else{
        district.style.border = "1px solid green";
        districtError.textContent = "";
        town.focus();
      }

      if(town.value === ""){
        town.style.border = "1px solid red";
        townError.textContent = "field cannot be empty";
        townError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        error++;
      }else{
        town.style.border = "1px solid green";
        townError.textContent = "";
        zip.focus();
      }

      
      if(zip.value === ""){
        zip.style.border = "1px solid red";
        zipError.textContent = "field cannot be empty";
        zipError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        error++;
      }else{
        zip.style.border = "1px solid green";
        zipError.textContent = "";
        phone1.focus();
      }

        
      if(phone1.value === ""){
        phone1.style.border = "1px solid red";
        phone1Error.textContent = "field cannot be empty";
        phone1Error.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        error++;
      }else{
        phone1.style.border = "1px solid green";
        phone1Error.textContent = "";
        Email.focus();
      }

   
    //   if(phone2.value === ""){
    //     phone2.style.border = "1px solid red";
    //     phone2Error.textContent = "field cannot be empty";
    //     phone2Error.style =
    //       "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    //     error++;
    //   }else{
    //     phone2.style.border = "1px solid green";
    //     phone2Error.textContent = "";
    //     Email.focus();
    //   }

      
      if(email.value === ""){
        email.style.border = "1px solid red";
        emailError.textContent = "Email is required";
        emailError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        error++;
      }else{
        email.style.border = "1px solid green";
        emailError.textContent = "";
      }
    
    if (error > 0) {
        event.preventDefault();
      }
    }    


