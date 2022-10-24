const apiCall = "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=bce0eb0adbff6eb894fdba90a5013b58"
const eastCoastTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"}); //get east coast time where stock exchange is located


function insertStock(ticker) {
    document.getElementById("stock").innerHTML = ticker; //insert stock ticker dynamically via DOM
  }

const userAction = async () => {
    const response = await fetch(apiCall); //make the API call
    const myJson = await response.json(); //extract JSON from the http response
    const luckyStock = JSON.stringify(myJson[0]["symbol"]); //convert JSON data to string
    return luckyStock; //return the item we care about

  }

userAction().then(
    function(stock) {insertStock(stock);})

function insertDate(date) {
    document.getElementById("updated").innerHTML = `Last Checked: ` + date + ` Eastern US Time`; //update last checked date and time
}

insertDate(eastCoastTime);