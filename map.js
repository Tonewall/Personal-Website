//constructors for State obejct
class State {
    constructor(id, name, capital, stateHood, population, size, median) {
        this.id = id;
        this.name = name;
        this.capital = capital;
        this.stateHood = stateHood;
        this.population = population;
        this.size = size;
        this.density = (population/size).toFixed(2);
        this.median = median;
        let highlighted = false;
    }
}

//informations for each states
let AL = new State("AL", "Alabama", "Montgomery", 1819, 4887871, 52420, 44765);
let AK = new State("AK", "Alaska", "Juneau", 1959, 737438, 665384, 73355);
let AZ = new State("AZ", "Arizona", "Phoenix", 1912, 7171646, 113990, 51492);
let AR = new State("AR", "Arkansas", "Little Rock", 1836, 3013825, 53178, 41995);
let CA = new State("CA", "California", "Sacramento", 1850, 39559045, 163696, 64500);
let CO = new State("CO", "Colorado", "Denver", 1867, 5695564, 104093, 63909);
let CT = new State("CT", "Connecticut", "Hartford", 1875, 3572665, 554341, 71346);
let DE = new State("DE", "Delaware", "Dover", 1777, 947171, 2488, 61255);
let FL = new State("FL", "Florida", "Tallahassee", 1824, 21299325, 65757, 49426);
let GA = new State("GA", "Georgia", "Atlanta", 1868, 10519475, 59425, 51244);
let HI = new State("HI", "Hawaii", "Honolulu", 1845, 1420491, 10931, 73486);
let ID = new State("ID", "Idaho", "Boise", 1865, 1754208, 83568, 48275);
let IL = new State("IL", "Illinois", "Springfield", 1837, 12741080, 57913, 59588);
let IN = new State("IN", "Indiana", "Indianapolis", 1825, 6691878, 36419, 50532);
let IA = new State("IA", "Iowa", "Des Moines", 1857, 3156145, 56272, 54736);
let KS = new State("KS", "Kansas", "Topeka", 1856, 2911505, 82278, 53906);
let KY = new State("KY", "Kentucky", "Frankfort", 1792, 4468402, 40407, 45215);
let LA = new State("LA", "Louisiana", "Baton Rouge", 1880, 4659978, 52278, 45727);
let ME = new State("ME", "Maine", "Augusta", 1832, 1338404, 35379, 51494);
let MD = new State("MD", "Maryland", "Annapolis", 1694, 6042718, 12405, 75847);
let MA = new State("MA", "Massachusetts", "Boston", 1630, 6902149, 10554, 70628);
let MI = new State("MI", "Michigan", "Lansing", 1847, 9998915, 96713, 51084);
let MN = new State("MN", "Minnesota", "Saint Paul", 1849, 5611179, 86935, 63488);
let MS = new State("MS", "Mississippi", "Jackson", 1821, 2986530, 48431, 10593);
let MO = new State("MO", "Missouri", "Jefferson City", 1826, 6126452, 69706, 50238);
let MT = new State("MT", "Montana", "Helena", 1875, 1062305, 147039, 49509);
let NE = new State("NE", "Nebraska", "Lincoln", 1867, 1929268, 77347, 54996);
let NV = new State("NV", "Nevada", "Carson City", 1861, 3034392, 110571, 52431);
let NH = new State("NH", "New Hampshire", "Concord", 1808, 1356458, 9349, 10303);
let NJ = new State("NJ", "New Jersey", "Trenton", 1784, 9032873, 8722, 72222);
let NM = new State("NM", "New Mexico", "Santa Fe", 1610, 2095428, 121590, 45382);
let NY = new State("NY", "New York", "Albany", 1797, 19542209, 54554, 60850);
let NC = new State("NC", "North Carolina", "Raleigh", 1792, 10383620, 53819, 47830);
let ND = new State("ND", "North Dakota", "Bismarck", 1883, 760077, 70698, 60557);
let OH = new State("OH", "Ohio", "Columbus", 1816, 11689442, 44825, 51075);
let OK = new State("OK", "Oklahoma", "Oklahoma City", 1910, 3943079, 69898, 48568);
let OR = new State("OR", "Oregon", "Salem", 1855, 4190713, 98378, 54148);
let PA = new State("PA", "Pennsylvania", "Harrisburg", 1812, 12807060, 46054, 55702);
let RI = new State("RI", "Rhode Island", "Providence", 1900, 1057315, 1544, 58073);
let SC = new State("SC", "South Carolina", "Columbia", 1786, 5084127, 32020, 48238);
let SD = new State("SD", "South Dakota", "Pierre", 1889, 882235, 77115, 53017);
let TN = new State("TN", "Tennessee", "Nashville", 1826, 6770010, 42144, 47275);
let TX = new State("TX", "Texas", "Austin", 1839, 28701845, 268598, 55653);
let UT = new State("UT", "Utah", "Salt Lake City", 1858, 3161105, 84896, 62912);
let VT = new State("VT", "Vermont", "Montpelier", 1805, 626299, 9616, 56990);
let VA = new State("VA", "Virginia", "Richmond", 1780, 8517685, 42774, 66262);
let WA = new State("WA", "Washington", "Olympia", 1853, 7525591, 71297, 64129);
let WV = new State("WV", "West Virginia", "Charleston", 1885, 1805832, 24230, 42019);
let WI = new State("WI", "Wisconsin", "Madison", 1838, 5813568, 65496, 55638);
let WY = new State("WY", "Wyoming", "Cheyenne", 1869, 577737, 97813, 60214);


//array of state objects to search through with clicked_id
const stateList = [AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY];

let clickedStates = [];
let ind = 0;
function loadjs() {
    if($(window).width() < 650) {
        document.getElementById("state").setAttribute("width",  "500");
        document.getElementById("state").setAttribute("height",  "250");
        
    }
    console.log($(window).width());
}


//fill in the informations to the page when clicked
function click(clicked_id){
    
    //finds the index of the state in the stateList using the clicked_id and state's id
    const index = stateList.findIndex(function(state, index) {
        return state.id === clicked_id.toString();
    });

    const state = stateList[index];
    let textValue = "";

    if (!state.highlighted) {
        state.highlighted = true;
        document.getElementById(clicked_id).style.fill = "#5ce786";
        clickedStates[ind] = state;

        ind++;
    } else {
        state.highlighted = false;
        document.getElementById(clicked_id).style.fill = "#6aaf89";
        clickedStates
        for(let i = 0; i < clickedStates.length; i++) {
            if(clickedStates[i] == state) {
                clickedStates[i] = null;
                break;
            }
        }
    }

    for(let i = 0; i < clickedStates.length; i++) {
        if(clickedStates[i] != null) {
            if(textValue == "") {
                textValue = clickedStates[i].name;
            } else {
                textValue += ",  " + clickedStates[i].name;
            }
        }
    }
    if(textValue == "") {
        document.getElementById("myText").innerHTML = "Selected States: None";
    } else {
        document.getElementById("myText").innerHTML = "Selected States: " + textValue;
    }


    //innerHTML to write onto a field
    document.getElementById("flag").src = "Pictures/Flags/"+ state.id + ".png";
    document.getElementById("line1").innerHTML = "State: " + state.name + "&nbsp;&nbsp;&nbsp;&nbsp; Capital: " + state.capital + "&nbsp;&nbsp;&nbsp;&nbsp; Statehood: " + state.stateHood + "&nbsp;&nbsp;&nbsp;&nbsp; Population: " + state.population;
    document.getElementById("line2").innerHTML = "Size: " + state.size + " sq miles &nbsp;&nbsp;&nbsp;&nbsp; Density: " + state.density + " per square mile &nbsp;&nbsp;&nbsp;&nbsp; Median Income: $" + state.median;


};