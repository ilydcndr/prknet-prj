  
   $(document).ready(function(){
    var olaylar=[
       {
          "title":"event 1",
          "date":"2014/09/25"
       },
       {
           "title":"event 2",
           "date":"2014/09/26",
           "enddate":"2014/09/29",
       },
       {
           "title":"event 3",
           "date":"2014/09/27",
       },
       {
           "title":"event 4",
           "date": "2014/09/30",
       }
    ];
    var OlaylarJson=JSON.stringify(olaylar);
    var OlaylarJsonAyir=JSON.parse(OlaylarJson);
    
     var i=0; //*tr
     var j=0; //*td
     var k=0; //*gunler
     var m=0; //*dizi
     for(i=0;i<5;i++){               
            var tr=document.createElement("tr");
         for(j=0;j<7;j++){
             var td=document.createElement("td"); 
             var tryeekle=tr.appendChild(td);
             var span=document.createElement("span");
             var tdyeekle=td.appendChild(span);
             span.style.position="absolute";
             span.style.bottom=0;
             span.style.fontSize="0.7rem";
             if(k<30){ 
             var text=document.createTextNode(k+1);
             var spanaekle=span.appendChild(text);  
             k++; 
           }                            
         }   
         document.getElementById("takvimtablo").appendChild(tr);                                      
     }  
          
                for(m=0;m<OlaylarJsonAyir.length;m++){
                   var tarih =OlaylarJsonAyir[m].date;
                   var eventId=OlaylarJsonAyir[m].title;
                   var splitteddate=tarih.split("/");
                   var gun=splitteddate[2];
                   var gunNumber=parseInt(gun);
                   if(Object.keys(OlaylarJsonAyir[m]).includes("enddate")==true){
                     var tarihend= OlaylarJsonAyir[m].enddate;
                     var splitteddateEnd=tarihend.split("/");
                     var songun=splitteddateEnd[2]; 
                     var songunNumber=parseInt(songun);
                     var text3=document.createTextNode(eventId);
                     
                    for(var z=gunNumber; songunNumber>=z ;z++){ 
                      var songunolanDiv= document.createElement("div");
                     if(z==gunNumber){
                      var songunuolandiveekle=songunolanDiv.appendChild(text3);
                     }
                     var tdsec=document.getElementsByTagName("td"); 
                     var ogununTdsineEkle=tdsec[(z+6)].appendChild(songunolanDiv);
                     
                       songunolanDiv.style.width="105%";
                       songunolanDiv.style.height="31%";
                       songunolanDiv.style.backgroundColor="pink";
                       songunolanDiv.style.marginTop="6%";
                       songunolanDiv.style.marginLeft="-2px"
                     }
                  } 
                       for(x=0;40>x;x++){
                       if( (x-6)==gunNumber && Object.keys(OlaylarJsonAyir[m]).includes("enddate")==false){                 
                        var div=document.createElement("div");
                        var text2=document.createTextNode(eventId);
                        var diveekle=div.appendChild(text2); 
                        var tdsec=document.getElementsByTagName("td");
                        var secilmistdyeekle=tdsec[x].appendChild(div);
                        div.style.position="absolute";
                        div.style.backgroundColor="pink";
                        div.style.width="95%";
                       div.style.height="31%";
                       div.style.marginTop="6%";
                       div.style.marginLeft="1%";
                      
                       
                    }                                                                        
                } 
           }   
                
       }    
    ) 
                