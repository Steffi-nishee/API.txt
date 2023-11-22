//print all countries name, region, sub region and population

var request = new  XMLHttpRequest();
request.open("GET" , "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response)
    console.log(result)
for (var i = 0; i < result.length;i++){
    var countryName = result[i].name.common;
    var region = result[i].region;
    var population = result[i].population;
    var subregion = result[i].subregion;
    console.log("CountryName:"+countryName);
    console.log("region:"+region);
    console.log("subregion:"+subregion);
    console.log("population:"+population);
    
}
}
