const char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
   let x 
    let y = " ";


    
    word()
    async function word(){
            try{
            for(i = 0; i < char.length ; i++){
                if(i % 2 === 0){
                    x = char[i];
                }
                i++


                y += char[i]+" "+ x +" ";

            }
            await console.log(y);
        }catch{
            console.error("Error");
        }
      
    }

        



    





