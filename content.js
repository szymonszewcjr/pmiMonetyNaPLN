//szymonszewcjr 2022
//yeah code is shitty and unoptimized, I threw it together in 10 minutes. Feel free to improve upon it.
setTimeout(main, 2500);
function main(){
mainCoinCount();
itemCoinCounts();
query = new URLSearchParams(window.location.search);
currentPage = query.get("page");
lastPage = currentPage;
setInterval(checkForPageChange, 1000)
}
function checkForPageChange(){
	query = new URLSearchParams(window.location.search);
	currentPage = query.get("page");
		if(currentPage != lastPage){
		lastPage = currentPage;
		setTimeout(itemCoinCounts, 500);
		
	}}
function mainCoinCount(){
document.querySelectorAll('[class="coins__number"]')[0].innerHTML += " czyli " + parseInt(document.querySelectorAll('[class="coins__number"]')[0].innerHTML / 20.8) + " PLN"
document.querySelectorAll('[class="coins__number"]')[1].innerHTML += " czyli " + parseInt(document.querySelectorAll('[class="coins__number"]')[1].innerHTML / 20.8) + " PLN"	
}
function itemCoinCounts(){
let itemCount = document.querySelectorAll('[class="product__coins-number"]').length;
console.log(itemCount);
for(let i=0; i < itemCount; i++){
document.querySelectorAll('[class="product__coins-number"]')[i].innerHTML += " czyli " + parseInt(document.querySelectorAll('[class="product__coins-number"]')[i].innerHTML / 20.8) + " PLN"	
}

}

