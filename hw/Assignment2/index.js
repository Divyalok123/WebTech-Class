/* Age calculator*/
var DOBOutput = document.getElementById('ageval');
var DOBValue = document.getElementById('dob');

function changeAge(e) {
        
    var today = new Date();
    [year, month, day] = today.toISOString().split('T')[0].split('-').map((val) => parseInt(val));
    var DOB = e.target.value;
    [dobyear, dobmonth, dobday] = DOB.split("-").map((val) => parseInt(val));

    var age = year - dobyear;

    if(dobmonth > month || (month == dobmonth && dobday > day))
        age--;

    if(age < 0)
        DOBOutput.innerText = "Abhi to aap paida bhi nhi hue ho :)";
    else
        DOBOutput.innerText = age;

}

DOBValue.addEventListener('change', changeAge);

/* Planet*/

// Planet Data
var SunInfo = `The Sun is a star. There are lots of stars, but the Sun is the closest one to Earth.
               It is the center of our solar system. The Sun is a hot ball of glowing gases. 
               It keeps our planet warm enough for living things to thrive. It gives us light so we can see.`;

var MercuryInfo = `Mercury is the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. 
                   Mercury is the fastest planet, zipping around the Sun every 88 Earth days.`;

var VenusInfo = `Venus spins slowly in the opposite direction from most planets. 
                 A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.`;

var EarthInfo = `Earth —our home planet— is the only place we know of so far that’s inhabited by living things. 
                 It's also the only planet in our solar system with liquid water on the surface.`;

var MarsInfo = `Mars is a dusty, cold, desert world with a very thin atmosphere. 
                There is strong evidence Mars was – billions of years ago – wetter and warmer, with a thicker atmosphere.`;

var JupiterInfo = `Jupiter is more than twice as massive than the other planets of our solar system combined. 
                   The giant planet's Great Red spot is a centuries-old storm bigger than Earth.`;

var SaturnInfo = `Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. 
                  The other giant planets have rings, but none are as spectacular as Saturn's.`;

var UranusInfo = `Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. 
                  This unique tilt makes Uranus appear to spin on its side.`;

var NeptuneInfo = `Neptune is the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. 
                   It was the first planet located through mathematical calculations.`;

var PlutoInfo = `Pluto is a complex world of ice mountains and frozen plains. 
                 Once considered the ninth planet, Pluto is the best known of a new class of worlds called dwarf planets.`;

// Planet Constructor
function Planet(name, info) {
    this.name = name;
    this.info = info;
}

// Planet objects
var Sun = new Planet('Sun', SunInfo);
var Mercury = new Planet('Mercury', MercuryInfo);
var Venus = new Planet('Venus', VenusInfo);
var Earth = new Planet('Earth', EarthInfo);
var Mars = new Planet('Mars', MarsInfo);
var Jupiter = new Planet('Jupiter', JupiterInfo);
var Saturn = new Planet('Saturn', SaturnInfo);
var Uranus = new Planet('Uranus', UranusInfo);
var Neptune = new Planet('Neptune', NeptuneInfo);
var Pluto = new Planet('Pluto', PlutoInfo);

var PlanetForm = document.getElementById('planetform');
var planetInfoBox = document.getElementById('planetinfo');

function changeInfo(e) {
    var currPlanet = e.target.value;

    console.log(currPlanet);

    switch(currPlanet) {
        case "Sun":
            planetInfoBox.innerText = Sun.info;
            break;
        case "Mercury":
            planetInfoBox.innerText = Mercury.info;
            break;
        case "Venus":
            planetInfoBox.innerText = Venus.info;
            break;
        case "Earth":
            planetInfoBox.innerText = Earth.info;
            break;
        case "Mars":
            planetInfoBox.innerText = Mars.info;
            break;
        case "Jupiter":
            planetInfoBox.innerText = Jupiter.info;
            break;
        case "Saturn":
            planetInfoBox.innerText = Saturn.info;
            break;
        case "Uranus":
            planetInfoBox.innerText = Uranus.info;
            break;
        case "Neptune":
            planetInfoBox.innerText = Neptune.info;
            break;
        case "Pluto":
            planetInfoBox.innerText = Pluto.info;
            break;
        default:
            planetInfoBox.innerText = "Click on a planet to get info."

    }
}

PlanetForm.addEventListener('change', changeInfo);