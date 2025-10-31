function stillInWork() {
    alert("Still in work. Please wait ⏳");
}

// drilling fluids formuls
function mudWeighting() {
    let finalMudDensity = +document.querySelector(".finalMudDensity").value;
    let startMudVolume = +document.querySelector(".startMudVolume").value;
    let startMudDensity = +document.querySelector(".startMudDensity").value;
    let weightingDensity = +document.querySelector(".weightingDensity").value;
    let mudWeighting = document.querySelector(".mudWeighting");

    if (finalMudDensity === 0 || startMudVolume === 0 || startMudDensity === 0 || weightingDensity === 0) {
        alert("enter values");
        mudWeighting.innerText = "wrong";
        mudWeighting.style.color = "#787777";
    } else if ( finalMudDensity > startMudDensity) {
        let result = (weightingDensity * 1000 * (finalMudDensity - startMudDensity) / (weightingDensity - finalMudDensity) * startMudVolume).toFixed();
        if (result === "Infinity") {
            alert("weighting density can`t be equal to final mud density");
            mudWeighting.innerText = "wrong";
            mudWeighting.style.color = "#787777";
        } else if (weightingDensity < finalMudDensity) {
            alert("final mud density can`t be more weighting density");
            mudWeighting.innerText = "wrong";
            mudWeighting.style.color = "#787777";
        } else {
            mudWeighting.innerText = result;
            mudWeighting.style.color = "black";
        }
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

    if (drillBitDiameter === 0 || drillStringDiameter === 0 || pumpPerformance === 0) {
        alert("enter values");
        annulusVelocity.innerText = "wrong";
        annulusVelocity.style.color = "#787777";
    } else if (drillBitDiameter > drillStringDiameter) {
        let result = ((pumpPerformance / 1000) / (0.785 * ((drillBitDiameter / 1000) ** 2 - (drillStringDiameter / 1000) ** 2))).toFixed(2);
        annulusVelocity.innerText = result;
        annulusVelocity.style.color = "black";
    } else {
        alert("drill bit diameter must be more than drill string diameter.");
        annulusVelocity.innerText = "wrong";
        annulusVelocity.style.color = "#787777";
    }
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
    } else if (mixingDensity === 0 || startMudVolume === 0 || startMudDensity === 0 || densityAddMud === 0) {
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
    } else if (length === 0 || height === 0 || width === 0) {
        alert("enter values");
        volumeOfPit.innerText = "wrong";
        volumeOfPit.style.color = "#787777";
    } else {
        alert("any of the parameters can`t be equal to 0")
        volumeOfPit.innerText = "wrong";
        volumeOfPit.style.color = "#787777";
    }
}

function OWR() {
    let water = +document.querySelector(".water").value;
    let oil = +document.querySelector(".oil").value;
    let OWR = document.querySelector(".OWR");

    if (water === 0 || oil === 0) {
        alert("enter values");
        OWR.innerText = "wrong";
        OWR.style.color = "#787777";
    } else if (oil > water && ((water + oil) <= 50)) {
        let oilVolume = (oil - water) * 2;
        let waterVolume = water * 2;
        let oilPerCent = (oilVolume * 100 / (oilVolume + waterVolume)).toFixed();
        let waterPerCent = (waterVolume * 100 / (oilVolume + waterVolume)).toFixed();
        let result = `${oilPerCent}/${waterPerCent}`;
        OWR.innerText = result;
        OWR.style.color = "black";
    } else if (water + oil > 50) {
        alert("the sum water volume and oil volume can`t be more than 50");
        OWR.innerText = "wrong";
        OWR.style.color = "#787777";
    } else {
        alert("volume of water can`t be more than volume of oil");
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

    if (volumeAddingMud === 0 || densityAddingMud === 0 || volumeStartMud === 0 || densityStartMud === 0) {
        alert("enter values");
        densityWhenAddMud.innerText = "wrong";
        densityWhenAddMud.style.color = "#787777";
    } else {
        let result = ((volumeStartMud * densityStartMud + volumeAddingMud * densityAddingMud) / (volumeStartMud + volumeAddingMud)).toFixed(3)
        densityWhenAddMud.innerText = result;
        densityWhenAddMud.style.color = "black";
    }
}

// directional drilling formuls
function deviationFromVertical() {
    let projectionNorthSouth = +document.querySelector(".projectionNorthSouth").value;
    let projectionEastWest = +document.querySelector(".projectionEastWest").value;
    let deviationFromVertical = document.querySelector(".deviationFromVertical");

    if (projectionNorthSouth === 0 || projectionEastWest === 0) {
        alert("enter values");
        deviationFromVertical.innerText = "wrong";
        deviationFromVertical.style.color = "#787777";
    } else {
        let result = ((projectionNorthSouth ** 2 + projectionEastWest ** 2) ** 0.5).toFixed(2);
        deviationFromVertical.innerText = result;
        deviationFromVertical.style.color = "black";
    }
}

function offsetLHE() {
    let telemetrySystemMark = +document.querySelector(".telemetrySystemMark").value;
    let downholeMotorCircumference = +document.querySelector(".downholeMotorCircumference").value;
    let offsetLHE = document.querySelector(".offsetLHE");

    if (telemetrySystemMark > 0 && downholeMotorCircumference > 0) {
        if (telemetrySystemMark < downholeMotorCircumference) {
            let result = (telemetrySystemMark / downholeMotorCircumference * 360).toFixed();
            offsetLHE.innerText = result;
            offsetLHE.style.color = "black";
        } else {
            alert("telemetry system mark can`t be more downhole motor circumference");
            offsetLHE.innerText = "wrong";
            offsetLHE.style.color = "#787777";
        }
    } else if (telemetrySystemMark === 0 && downholeMotorCircumference === 0) {
        alert("enter values");
        offsetLHE.innerText = "wrong";
        offsetLHE.style.color = "#787777";
    }
}

function offsetAny() {
    let markToMotor = +document.querySelector(".markToMotor").value;
    let motorCircumference = +document.querySelector(".motorCircumference").value;
    let offsetAny = document.querySelector(".offsetAny");

    if (markToMotor > 0 && motorCircumference > 0) {
        if (markToMotor < motorCircumference) {
            let result = (markToMotor / motorCircumference * 360).toFixed();
            offsetAny.innerText = result;
            offsetAny.style.color = "black";
        } else {
            alert("telemetry system mark can`t be more downhole motor circumference");
            offsetAny.innerText = "wrong";
            offsetAny.style.color = "#787777";
        }
    } else if (markToMotor === 0 && motorCircumference === 0) {
        alert("enter values");
        offsetAny.innerText = "wrong";
        offsetAny.style.color = "#787777";
    }
}

function inclinationAngle() {
    let gX = +document.querySelector(".Gx").value;
    let gY = +document.querySelector(".Gy").value;
    let gZ = +document.querySelector(".Gz").value;
    let inclinationAngle = document.querySelector(".inclinationAngle");

    if (gX === 0 || gY === 0 || gZ === 0) {
        alert("enter values");
        inclinationAngle.innerText = "wrong";
        inclinationAngle.style.color = "#787777";
    } else {
        let result = (Math.atan((gX ** 2 + gY ** 2) ** 0.5 / gZ) * 180 / Math.PI).toFixed(2);
        inclinationAngle.innerText = result;
        inclinationAngle.style.color = "black";
    }
}

function magneticAzimut() {
    let gX = +document.querySelector(".Gx-azimut").value;
    let gY = +document.querySelector(".Gy-azimut").value;
    let gZ = +document.querySelector(".Gz-azimut").value;
    let bX = +document.querySelector(".Bx-azimut").value;
    let bY = +document.querySelector(".By-azimut").value;
    let bZ = +document.querySelector(".Bz-azimut").value;
    let magneticAzimut = document.querySelector(".magneticAzimut");

    if (gX === 0 || gY === 0 || gZ === 0 || bX === 0 || bY === 0 || bZ === 0) {
        alert("enter values");
        magneticAzimut.innerText = "wrong";
        magneticAzimut.style.color = "#787777";
    } else if (gX > 1 || gY > 1 || gZ > 1) {
        alert("Gi can`t be more 1");
        magneticAzimut.innerText = "wrong";
        magneticAzimut.style.color = "#787777";
    } else {
        let numerator = - bX * gY + bY * gX;
        let denominator = bZ * (gX * gX + gY * gY) - gZ * (bX * gX + bY * gY);
        let resultRad = Math.atan2(numerator, denominator);
        let resultDeg = resultRad * 180 / Math.PI;
        if (resultDeg < 0) resultDeg += 360;
        let result = resultDeg.toFixed(2);
        magneticAzimut.innerText = result;
        magneticAzimut.style.color = "black";
    }
}

function slideRotor() {
    let metersInRotor = +document.querySelector(".metersInRotor").value;
    let metersInSlide = +document.querySelector(".metersInSlide").value;
    let slideRotor = document.querySelector(".slideRotor");

    if (metersInRotor === 0 || metersInSlide === 0) {
        alert("enter values");
        slideRotor.innerText = "wrong";
        slideRotor.style.color = "#787777";
    } else {
        let totalMeters = metersInRotor + metersInSlide;
        let slide = (metersInSlide / totalMeters * 100).toFixed(1);
        let rotor = (metersInRotor / totalMeters * 100).toFixed(1);
        let result = `${slide}/${rotor}`;
        slideRotor.innerText = result;
        slideRotor.style.color = "black";
    }
}
