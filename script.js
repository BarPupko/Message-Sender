function updateNumbers(){
    let userInput = document.getElementById("new-bio").value;
   
    var lines = userInput.split(/\r|\r\n|\n/);
    console.log("lines:"+lines);
    var count = lines.length;
    console.log("row:" + count); // Outputs 4


    //creating elements with numbers
    lines.forEach(function(el) {
        var div = document.createElement("div1");
        let link = "";
        el=el.replace('0','');//remove zeros
        el= el.replace('-','');//remove break between number
             if(el.includes('-')){//if there are another breake take it off too.
                el=el.replace('-','');//remove break between number
            }

        link = `"https://wa.me/${el}"\n`//generate link
        // link = `"https://api.whatsapp.com/send/?phone=%2B972${el}"\n`//generate link
        let blank = target ="_blank";
        let rel = "noreferrer noopener";
        console.log("lines: " +lines);
        console.log("el: " +el);
        
        div.innerHTML = "\n<a href="+link + blank + rel +"a>"+el+"</a>\n";
        document.body.appendChild(div);
    });

 
  };

