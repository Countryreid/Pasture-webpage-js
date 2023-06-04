
// thisfunction will take in 4 variables and then based on Southern Faroages book create a value for the amount of
//days the pasture will hold. 



var horseCount = document.getElementById('horseCount').value;
var horses = document.getElementById('horseCount').value;
var grassMix = document.getElementById('grassMix');
var pastureSize = document.getElementById('pastureSize').value;
var grassHeight = document.getElementById('grassHeight').value;
var percentBodyWeight = 0.02;
var averageWeight = 1000;


function calulateFeed(){
var feedDays = (pastureSize * (grassHeight * 200) * 0.5  )
 /
  (horsecount * averageWeight * percentBodyWeight)
document.getElementById("feeddays") = feedDays;

}


function calculatetons(){
    tonsDryFeed = pastureSize*grassHeight*grassMix
}