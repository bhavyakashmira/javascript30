
var data = [];

const cardcontainer = document.getElementById('card-container');

document.addEventListener('DOMContentLoaded', (e) => {

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => res.json())
        .then(res => {
            data = res;

             console.log(data);
             
            for (var i = 0; i < data.length; i++){
                cardcontainer.innerHTML += `
            <div class="card-ui" >
            <div class="image" >
                <img src="${data[i].image}" class="img" alt="">
            </div>
            <div class="details" >
                 <div class='row'>
                    <span>${data[i].name}</span>
                    <span>${data[i].current_price}</span>
                 </div>
                 <div class='row'>
                    <span>${data[i].symbol}</span>
                    <span>${data[i].market_cap_change_percentage_24h}</span>
                 </div>
            </div>
        </div>`
            }

    })
    
})











