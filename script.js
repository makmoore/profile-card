window.onload = function() {  // initialize buttons and link them to the functions they go to
    document.getElementById("update").onclick = updateProfile;
    document.getElementById("theme").onclick = toggleTheme;
    document.getElementById("showdetails").onclick = showDetails;
};

function updateProfile() {
    let nameValue = document.getElementById("name").value;  // value in the name entry box
    let bioValue = document.getElementById("bio").value;  // value in the bio textbox
    let fileInput = document.getElementById("fileName"); // the file that was entered
    let profilePic = document.getElementById("displayPic");  // where the picture will be displayed

    // to check if a name was entered or set default if not
    if (nameValue.trim().length > 0) { // uses trim to not count spaces
        document.getElementById("displayName").textContent = nameValue;
    } else {
        document.getElementById("displayName").textContent = "User 1";
    }

    // to set default bio if empty
    if (bioValue.trim().length > 0) {
        document.getElementById("displayBio").textContent = bioValue;
    } else {
        document.getElementById("displayBio").textContent = "This is the default bio.";
    }

    // to check if a file was entered (I looked up how to do this part but I think I understand)
    if (fileInput.files.length > 0) {
        let readfile = new FileReader();  // to read the file that was entered

        readfile.onload = function (e) {
            profilePic.src = e.target.result;  // takes the image and displays as source
            profilePic.style.display = "block";  // shows the image
        };

        readfile.readAsDataURL(fileInput.files[0]); // converts the file to data URL
    }
    else {
        profilePic.src = "default.jpg"; // if there's nothing entered, just shows the default image
    }
}

function toggleTheme() {
    let themeSection = document.getElementById("pagetheme");

    // just switches the classes and changes the page background depending on what is currently set
    if (themeSection.classList.contains("profilecardlt")) {
        themeSection.classList.remove("profilecardlt"); // for the box of the card
        themeSection.classList.add("profilecarddrk");

        document.body.classList.remove("light-mode"); // for the buttons
        document.body.classList.add("dark-mode");

        document.body.style.backgroundColor = "rgb(45,45,45)";  // dark mode
    } else if (themeSection.classList.contains("profilecarddrk")) {
        themeSection.classList.remove("profilecarddrk");
        themeSection.classList.add("profilecardcrazy");

        document.body.classList.remove("dark-mode"); 
        document.body.classList.add("crazy-mode");

        document.body.style.backgroundColor = "rgb(30, 20, 50)";  // purple theme (just for fun)

    } else {
        themeSection.classList.remove("profilecardcrazy");
        themeSection.classList.add("profilecardlt");

        document.body.classList.remove("crazy-mode"); 
        document.body.classList.add("light-mode");

        document.body.style.backgroundColor = "white";  // back to light mode
    }
}


function showDetails() {
    let bioSection = document.getElementById("showhidebio"); // this is only on the p where bio is shown

    if (bioSection.style.display == "none") { // if display is none (hidden)
        bioSection.style.display = "block"    // then it sets it to block which will show it
    }
    else {
        bioSection.style.display = "none"  // otherwise if it's shown, the button makes it hidden
    }
}
