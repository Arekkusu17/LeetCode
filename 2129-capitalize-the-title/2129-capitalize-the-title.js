/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
     title=title.toLowerCase().split(" ");
     for (let i=0;i<title.length;i++){
         if(title[i].length>=3){
             title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1);
            
         }
     }
   
     title=title.join(" ");
     
     return title;
 };