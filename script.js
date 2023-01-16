        let textbox = document.getElementById("mainbox");
        let button = document.getElementById("btnsearch");
        let introductionParagraph = document.getElementById("display");
        let parameters = document.getElementById("parameters");
        let cover = document.getElementById("cover");
        let cityTitle=document.getElementById("title");


        async function GetCity()
        {
            let url = "https://api.teleport.org/api/urban_areas/slug:"+ city + "/scores/";
            let response = await fetch(url);
            let data = await response.json();
            
            
            if(data.status===404)
            {
                cityTitle.innerHTML = "Error : data is not available"
                introductionParagraph.innerHTML="Error : city not found";
                
            }
            else
            introductionParagraph.innerHTML=data.summary;
            
            for(let i=0; i<data.categories.length; i++)
            {
                if(data.status!=404)
                {
                let liDisplay = document.createElement("li");
                parameters.appendChild(liDisplay);
                let score = Math.round(data.categories[i].score_out_of_10)
                liDisplay.innerHTML=data.categories[i].name + " : " + score;
                }
            }
        }

        async function GetBackgroundImage()
        {
            url = "https://api.unsplash.com/search/photos?query="+ city + "&client_id=YYytaf8Il-xF91SJ-muWYOLcDMq02ZL5UL_-SgNrbes";
            response = await fetch(url);
            data = await response.json();
            let backgroundImg = data.results[0];
            

            if(data.status===404)
            {
                parameters.innerHTML="ERROR! CITY NOT FOUND";
                
            }

            cover.style.background = "url(" + backgroundImg.urls.regular; + ")";
            cover.style.backgroundSize = "cover";
            
            
        }

        // Genera la descrizione e i dati della città da renderizzare a schermo

        function GenerateParameters()
        {
            city=textbox.value.toLowerCase();
            setTitle();
            city = city.replaceAll(" ", "-");
            parameters.innerHTML="";
            introductionParagraph.innerHTML=""
            GetCity();
            GetBackgroundImage();
        }

        function setTitle()
        {
            cityTitle.innerHTML = city.toUpperCase();
        }

        button.addEventListener("click", () =>{
           

                GenerateParameters();          
        })

        //funzione per avviare la ricerca premendo invio

        document.addEventListener("keypress", function(e){
            if(e.key=="Enter")
            {
                GenerateParameters();          
            }
        })



        
       
        