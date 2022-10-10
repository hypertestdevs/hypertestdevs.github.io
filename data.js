async function getData(url) {


    let res = await fetch(url);
    let data = await res.json()
    return data;
}

function appendRegionData(data){
    let selectRegion = document.getElementById('selectRegion');

    let flag = true;
    let currRegion = '';
    data.forEach((instType) => {
        let option = document.createElement('option');
        if(instType.region !== currRegion){
            currRegion = instType.region;
            option.value = instType.region;
            option.textContent = instType.region;
            selectRegion.appendChild(option);

    }
        if (flag) {
            option.setAttribute('selected', true)
            flag = !flag;
        }

    });
}
function appendMasterNodeData(data,region) {
    let masterNode = document.getElementById('masterNode');
    let flag = true;
    masterNode.innerHTML = "";
    let dataWithSelectedRegion = data.filter((el)=>el.region == region && el.size === 't3a.medium')
    dataWithSelectedRegion.forEach((instType) => {
        let option = document.createElement('option');
        option.value = instType.size;
        option.textContent = instType.size;
        masterNode.appendChild(option);
        if (flag) {
            option.setAttribute('selected', true)
            flag = !flag;
        }

    });

}
function appendWorkerNodeData(data,region) {
    let workerNodeInstanceType = document.getElementById('workerNode');
    let flag = true;
    workerNodeInstanceType.innerHTML = ""

    let dataWithSelectedRegion = data.filter((el)=>el.region == region && el.size === 't3a.2xlarge')
    dataWithSelectedRegion.forEach((instType) => {
        let option = document.createElement('option');
        option.value = instType.size;
        option.textContent = instType.size;
        workerNodeInstanceType.appendChild(option);
        if (flag) {
            option.setAttribute('selected', true)
            flag = !flag;
        }
    });
}
function costCalculator(data, size,region) {

    let price;
    let dataWithPrice = data.forEach((el) => {
        if (el.size === size && el.region == region ) {
            price = el.prices
        }
    });
    // console.log(price.USD)
    return price.USD;   

}


export { getData, appendMasterNodeData, appendWorkerNodeData, costCalculator, appendRegionData };