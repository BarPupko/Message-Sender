function updateNumbers(){
    let userInput = document.getElementById("new-bio").value; //getting the output from textarea
    let userTextInput = document.getElementById("msg").value; //getting the text
    // console.log("usertext:"+userTextInput);
   
    var lines = userInput.split(/\r|\r\n|\n/);
    // console.log("lines:"+lines);
    var count = lines.length;
    // console.log("row:" + count); // Outputs 4


    //creating elements with numbers
    lines.forEach(function(el) {
        var div = document.createElement("div1");
        let link = "";
        el=el.replace('0','');//remove zeros
        el= el.replace('-','');//remove break between number
             if(el.includes('-')){//if there are another breake take it off too.
                el=el.replace('-','');//remove break between number
            }

        link = `"https://wa.me/${el}?text=${userTextInput}"\n`//generate link
        // link = `"https://api.whatsapp.com/send/?phone=%2B972${el}"\n`//generate link
        let blank = target ="_blank";
        let rel = "noreferrer noopener";
        // console.log("lines: " +lines);
        // console.log("el: " +el);

        //  **** new feature still under development. ****
        //open new window automaticlly and send the text into this window
             // div.innerHTML = `\n<a href="${win1}"a>"${el}"</a>\n`;
        // div.innerHTML = `\n<a href="${win}"a>"${el}"</a>\n`;
        // div.innerHTML = `<p>${win}</p>`;
        

        //working method
        div.innerHTML = "\n<a href="+link + blank + rel +"a>"+el+"</a>\n";
  
        document.body.appendChild(div);

        console.log("copyright bar popko,search me on github")
    });

 
  };

