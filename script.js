//  fetching data from api using .then & async, await

let container = document.getElementById('container')

const table = document.getElementById('table')

async function getInfo() {
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
const response = await fetch(url)
console.log(response);
const data = await response.json();
return data;
}

async function callGetInfo(){
    const responseData = await getInfo();
    console.log(responseData);
    let tableData ='';
    responseData.map((values,index) =>{
        tableData += 
        `<tr>
            <td><img src = "${values.image}"/></td>
            <td>${values.name}</td>
            <td>${values.symbol}</td>
            <td>${values.current_price}</td>
            <td>${values.total_volume}</td>
            <td class = "${values.price_change_percentage_24h > 0 ? "postiveValues" : "negativeValues"}"> ${values.price_change_percentage_24h}"</td>
            <td>Mkt cap : ${values.market_cap}</td>
        </tr>`
    })

    document.getElementById('table').innerHTML = tableData;
}

callGetInfo();




