function stillInWork() {
    alert("Still in work. Please wait ⏳");
}

function mudWeighting() {
    let finalMudDensity = +document.querySelector(".finalMudDensity").value;
    let startMudVolume = +document.querySelector(".startMudVolume").value;
    let startMudDensity = +document.querySelector(".startMudDensity").value;
    let weightingDensity = +document.querySelector(".weightingDensity").value;
    let mudWeighting = document.querySelector(".mudWeighting");

    if (finalMudDensity > startMudDensity) {
        let result = (weightingDensity * 1000 * (finalMudDensity - startMudDensity) / (weightingDensity - finalMudDensity) * startMudVolume).toFixed();
        if (result === "Infinity") {
            alert("weighting density cannot be equal to final mud density");
            mudWeighting.innerText = "wrong";
            mudWeighting.style.color = "#787777";
        } else if (weightingDensity < finalMudDensity) {
            alert("final mud density cannot be more weighting density");
            mudWeighting.innerText = "wrong";
            mudWeighting.style.color = "#787777";
        } else {
            mudWeighting.innerText = result;
            console.log(typeof result);
            mudWeighting.style.color = "black";
        }
    } else if (finalMudDensity === 0 && startMudVolume === 0 && startMudDensity === 0 && weightingDensity === 0) {
        alert("enter values");
        mudWeighting.innerText = "wrong";
        mudWeighting.style.color = "#787777";
    } else {
        alert("final mud density must be more than start mud density");
        mudWeighting.innerText = "wrong";
        mudWeighting.style.color = "#787777";
    }
}

function annulusVelocity() {
    let drillBitDiameter = +document.querySelector(".drillBitDiameter").value;
    let drillStringDiameter = +document.querySelector(".drillStringDiameter").value;
    let pumpPerformance = +document.querySelector(".pumpPerformance").value;
    let annulusVelocity = document.querySelector(".annulusVelocity");

    if (drillBitDiameter > drillStringDiameter) {
        let result = ((pumpPerformance / 1000) / (0.785 * ((drillBitDiameter / 1000) ** 2 - (drillStringDiameter / 1000) ** 2))).toFixed(2);
        annulusVelocity.innerText = result;
        annulusVelocity.style.color = "black";
    } else if (drillBitDiameter === 0 && drillStringDiameter === 0 && pumpPerformance === 0) {
        alert("enter values");
        annulusVelocity.innerText = "wrong";
        annulusVelocity.style.color = "#787777";
    } else {
        alert("drill bit diameter must be more than drill string diameter.");
        annulusVelocity.innerText = "wrong";
        annulusVelocity.style.color = "#787777";
    }
    ;
}

function densityMixingMuds() {
    let mixingDensity = +document.querySelector(".mixingDensity").value;
    let startMudVolume = +document.querySelector(".startMudVolume-2").value;
    let startMudDensity = +document.querySelector(".startMudDensity-2").value;
    let densityAddMud = +document.querySelector(".densityAddMud").value;
    let densityMixingMuds = document.querySelector(".densityMixingMuds");

    if (startMudDensity > mixingDensity && densityAddMud < mixingDensity) {
        let result = (startMudVolume * (startMudDensity - mixingDensity) / (mixingDensity - densityAddMud)).toFixed(1);
        densityMixingMuds.innerText = result;
        densityMixingMuds.style.color = "black";
    } else if (mixingDensity === 0 && startMudVolume === 0 && startMudDensity === 0 && densityAddMud === 0) {
        alert("enter values");
        densityMixingMuds.innerText = "wrong";
        densityMixingMuds.style.color = "#787777";
    } else {
        alert("start mud density must be more than mixing density AND density add mud must be less than mixing density.");
        densityMixingMuds.innerText = "wrong";
        densityMixingMuds.style.color = "#787777";
    }
    ;
}

function volumeOfPit() {
    let length = +document.querySelector(".length").value;
    let width = +document.querySelector(".width").value;
    let height = +document.querySelector(".height").value;
    let volumeOfPit = document.querySelector(".volumeOfPit");

    if (length > 0 && width > 0 && height > 0) {
        let result = length * width * height;
        volumeOfPit.innerText = result;
        volumeOfPit.style.color = "black";
    } else if (length === 0 && height === 0 && width === 0) {
        alert("enter values");
        volumeOfPit.innerText = "wrong";
        volumeOfPit.style.color = "#787777";
    } else {
        alert("any of the parameters cannot be equal to 0")
        volumeOfPit.innerText = "wrong";
        volumeOfPit.style.color = "#787777";
    }
}

function OWR() {
    let water = +document.querySelector(".water").value;
    let oil = +document.querySelector(".oil").value;
    let OWR = document.querySelector(".OWR");

    if (oil > water && ((water + oil) <= 50)) {
        let oilVolume = (oil - water) * 2;
        console.log(oilVolume);
        let waterVolume = water * 2;
        console.log(waterVolume);
        let oilPerCent = (oilVolume * 100 / (oilVolume + waterVolume)).toFixed();
        console.log(oilPerCent);
        let waterPerCent = (waterVolume * 100 / (oilVolume + waterVolume)).toFixed();
        console.log(waterPerCent);
        let result = `${oilPerCent}/${waterPerCent}`;
        OWR.innerText = result;
        OWR.style.color = "black";
    } else if (water === 0 && oil === 0) {
        alert("enter values");
        OWR.innerText = "wrong";
        OWR.style.color = "#787777";
    } else if (water + oil > 50) {
        alert("the sum water volume and oil volume cannot be more than 50");
        OWR.innerText = "wrong";
        OWR.style.color = "#787777";
    } else {
        alert("volume of water cannot be more than volume of oil");
        OWR.innerText = "wrong";
        OWR.style.color = "#787777";
    }
}

function densityWhenAddMud() {
    let volumeAddingMud = +document.querySelector(".volumeAddingMud").value;
    let densityAddingMud = +document.querySelector(".densityAddingMud").value;
    let volumeStartMud = +document.querySelector(".volumeStartMud").value;
    let densityStartMud = +document.querySelector(".densityStartMud").value;
    let densityWhenAddMud = document.querySelector(".densityWhenAddMud");

    if (volumeAddingMud === 0 && densityAddingMud === 0 && volumeStartMud === 0 && densityStartMud === 0) {
        alert("enter values");
        densityWhenAddMud.innerText = "wrong";
        densityWhenAddMud.style.color = "#787777";
    } else {
        let result = ((volumeStartMud * densityStartMud + volumeAddingMud * densityAddingMud) / (volumeStartMud + volumeAddingMud)).toFixed(3)
        densityWhenAddMud.innerText = result;
        densityWhenAddMud.style.color = "black";
    }
}