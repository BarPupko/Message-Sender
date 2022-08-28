function updateNumbers(){
    let userInput = document.getElementById("new-bio").value;
    const re = RegExp('^[0-9]$');
    console.log("regex: "+re.userInput);
    var lines = userInput.split(/\r|\r\n|\n/);
    console.log("lines:"+lines);
    var count = lines.length;
    console.log("row:" + count); // Outputs 4


    //creating elements with numbers
    lines.forEach(function(el) {
        var div = document.createElement("div1");
        //regex code
       
        let link = `"https://api.whatsapp.com/send/?phone=%2B972${el}"\n`
        let blank = target ="_blank";
        let rel = "noreferrer noopener";
        console.log(link);
        console.log(el);
      
        
        div.innerHTML = "\n<a href="+link + blank + rel +"a>"+el+"</a>\n";
        document.body.appendChild(div);
    });

 
  };