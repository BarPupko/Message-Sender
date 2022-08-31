function updateNumbers(){
    let userInput = document.getElementById("new-bio").value; //getting the output from textarea
    let userTextInput = document.getElementById("msg").value; //getting the text
    // console.log("usertext:"+userTextInput);
   console.log(userTextInput);
    var lines = userInput.split(/\r|\r\n|\n/);
    // console.log("lines:"+lines);
    var count = lines.length;
    // console.log("row:" + count); // Outputs 4

    
    //get element from language combobox

    //creating elements with numbers

    
    lines.forEach(function(el) {
        var div = document.createElement("div1");
        let link = "";
        //if the first number of the number is 0 then erase it
        let originalNumber=el
        let startingNum = el.substr(0,3).trim();
        console.log("startingNum:"+startingNum)
        
        //israel
        let il=startingNum.substr(0,2);
        if(il=="05")    {
                if(el.indexOf(0) == 0){
                console.log("index0:"+el.indexOf(0));
                el=el.replace('0','');//remove zeros
                originalNumber = el;
                el='972'+el;
                }
                    
            }
        // //canada
        // //226, 249, 289, 343, 365, 416, 437, 519, 548, 613, 647, 705, 807, 905
        // if(startingNum==647 || startingNum==249 || startingNum==289 || startingNum==343 
        //         | startingNum==365 || startingNum==416 || startingNum==437)    {
        //         el='1'+el;
        // }

       
        el= el.replace('-','');//remove break between number
             if(el.includes('-')){//if there are another breake take it off too.
                el=el.replace('-','');//remove break between number
            }
        link = `"https://wa.me/${el}?text=${userTextInput}"\n`//generate link
        // link = `"https://api.whatsapp.com/send/?phone=%2B${lang}${el}"\n`//generate link
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
        div.innerHTML = "\n<a href="+link + blank + rel +"a>"+originalNumber+"</a>\n";
  
        document.body.appendChild(div);

        console.log("copyright bar popko,search me on github")
        
    });

 
  };

