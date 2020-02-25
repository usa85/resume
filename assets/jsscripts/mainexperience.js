let basedescription;
basedescription=document.querySelector("#experienceContents").innerHTML;
let previousPrimaryID;
let basePath ='';


function clickfunction(index){
   
    let content = document.querySelector("#experienceContents");
    content.innerHTML = '<h5 class=\"mainexperience\">'+workExperienceBe[index].workTitle + '</h5><p class=\"mainexperience\">' + workExperienceBe[index].workCompany + '<br>' + workExperienceBe[index].workStreet + " * "  + workExperienceBe[index].workCity + ", "+ workExperienceBe[index].workStateAb + " * "+'</p>' + '<hr><p class=\"mainexperience\"><b>Job Description:</b> ' + workExperienceBe[index].workDescripton  + '</p>';
   
   /*  function createImage() {
    let img = document.createElement('img');
img.src = `${basePath}/${filename}`;
returnn img;
}

content.appendChild(createImage(cenotaphData2[i].imageFilename));*/

    filterMarkers(workExperienceBe[index].primaryID);/* that removes everymarker of the map except the one that is supposed shown */
    previousPrimaryID = workExperienceBe[index].primaryID;
    
};

function filterMarkers(primaryID){
    if (markers.clean){
        filterCleanMarkers(primaryID);
    }else{
        swapSoldierMarkers(primaryID);   
        
    markers[primaryID].setMap(map);
}
}
/*function filterMarkers is always run in click event, and choosing between filtercleanmarkers and swaptSoldierMarkers*/

function filterCleanMarkers(primaryID){
    markers.clean = false;
    for (var marker in markers){
        if (marker != "clean" && marker != primaryID){ 
            markers[marker].setMap(null);
        }
    }
}

function swapSoldierMarkers(primaryID){
    if (previousPrimaryID && previousPrimaryID != primaryID){
        markers[previousPrimaryID].setMap(null);
        } 
    }
        

/*function filterCleanMarkers takes a map with all the markers and remove all of them except the one we want*/


    let description=document.querySelector("#descriptionHeader");
        description.addEventListener('click', ()=>{
            let content = document.querySelector("#experienceContents");
            content.innerHTML=basedescription;
            resetMarkers();
        }); 
    
    for (i = 0; i < workExperienceBe.length; i++) {
        let joblist = document.querySelector("#joblist");
        console.log(joblist);
        
        let jobelement = document.createElement("li");
        
        jobelement.innerHTML ='<span onclick="clickfunction('+(i)+')">' + workExperienceBe[i].workAbbreviation + '</span>'; 
        console.log(jobelement);

        joblist.appendChild(jobelement);
    }