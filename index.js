let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let mainPic = document.getElementById("mainPic");
let popupText = document.getElementById("popupText");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerText = this.value;

    if (this.value >= -40 && this.value < -17){
        output.innerHTML = this.value;
        mainPic.src = "deepfreeze.jpg";
        if (this.value >= -40 && this.value < -29){
            popupText.innerHTML = "Hvis du nå kaster kokende vann opp i lufta, så vil det fryse! Få hjelp av en voksen om du vil prøve.";
        }
        else if (this.value == -18){
            popupText.innerHTML = "Like kaldt som i frysedisken";
        }
        else{
            popupText.innerHTML = "";
        }

    }
    else if (this.value >= -17 && this.value < -10){
        mainPic.src = "snow.jpg";
    }
    else if (this.value >= -10 && this.value < 1){
        mainPic.src = "snowing.jpg";
        if (this.value >= -5 && this.value < 0){
            popupText.innerHTML = "For at det kalles vinter, må temperaturen være under 0 i en lengre periode. Derfor er det mange steder i Norge som faktisk ikke har vinter!";
        }
        else if (this.value == 0){
            popupText.innerHTML = "Ved 0 grader fryser vann til is, da kan man stå på skøyter! Spør en voksen om isen er trygg før du går på den.";
        }
        else{
            popupText.innerHTML = "";
        }
    }

    else if (this.value >= 1 && this.value < 10){
        mainPic.src = "slush.jpg";

        if (this.value >= 0 && this.value < 10){
            popupText.innerHTML = "Hvis det er snø ute så er den kram! Gå og lag snøballer!";

            if (this.value == 4){
                popupText.innerHTML += "<br>Like kaldt som i kjøleskapet! En annen interessant ting med temperaturen 4 grader er at vann er på sitt tyngste ved 4 grader. Derfor er vannet på bunnen av innsjøer alltid 4 grader.";
            }
        }
        else{
            popupText.innerHTML = "";
        }

    }
}