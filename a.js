
                          var tarihingunu =(x).value;

                          var k==var tarihingunu

                 for(m=0;m<olaylar.length;m++){
                       var tarih =OlaylarAyır[m].date;
                     if(var k= var tarih  ){
                     }
                     var eventdiv=document.createElement("div");
                     var text2=document.createTextNode(OlaylarAyır[k].title)
                     m++;
                     eventdiv.style.width="25%";
                     eventdiv.style.backgroundColor="pink";

                     var eventdiv=document.createElement("div");
                     var eventtitle=document.createTextNode(eventId)
                     var diveekle=div.appendChild(eventtitle)
                     var tdyeekle =td.appendChild(eventdiv);
                     var tryeekle =tr.appendChild(td);  



                     if(Object.keys(OlaylarJsonAyır[m]).includes("enddate")==true){
                      var tarihend= OlaylarJsonAyır[m].enddate;
                      var splitteddateEnd=tarihend.split("/");
                      var songun=splitteddateEnd[2];
                   }


                   if( x==gunNumber ){                 
                    var div=document.createElement("div");
                    var text2=document.createTextNode(eventId);
                    var diveekle=div.appendChild(text2); 
                    var tdsec=document.getElementsByTagName("td");
                    var secilmistdyeekle=tdsec[x].appendChild(div);
                    } 


                    var ogununTdsineEkle=tdsec[(gunNumber+6)].appendChild(songunolanDiv)

                    
                    for( var z=gunNumber+1; songunNumber>=z ;z++){ 
                      var songunolanDiv= document.createElement("div");
                      var tdsec=document.getElementsByTagName("td"); 
                      var ogununTdsineEkle=tdsec[(z+6)].appendChild(songunolanDiv);

                        songunolanDiv.style.width="100%";
                        songunolanDiv.style.height="31%";
                        songunolanDiv.style.backgroundColor="pink"
                        songunolanDiv.style.margin="0px";
                        songunolanDiv.style.
                   
                      }