var siteID = [];
var siteNameLong = []
var siteStatus = []


$.ajax({
  url: "https://api.spacexdata.com/v3/launchpads",
  method: "GET"
})
  .then(function(results)
{
    console.log(results);
    for (var i = 0; i<results.length; i++)
    {
        siteID.push(results[i].site_id);  
        siteNameLong.push(results[i].site_name_long);  
        siteStatus.push(results[i].status);  
    }
    console.log(siteID);
    console.log(siteNameLong);
    console.log(status);
    $("#site1").text(siteID[0]+" || "+siteNameLong[0]+" || "+siteStatus[0]);
    $("#site2").text(siteID[1]+" || "+siteNameLong[1]+" || "+siteStatus[1]);
    $("#site3").text(siteID[2]+" || "+siteNameLong[2]+" || "+siteStatus[2]);
    $("#site4").text(siteID[3]+" || "+siteNameLong[3]+" || "+siteStatus[3]);
    $("#site5").text(siteID[4]+" || "+siteNameLong[4]+" || "+siteStatus[4]);
    $("#site6").text(siteID[5]+" || "+siteNameLong[5]+" || "+siteStatus[5]);
});