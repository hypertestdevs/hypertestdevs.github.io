async function getData(url) {


    let res = await fetch(url);
    let data = await res.json()
    return data;
}
function appendMasterNodeData(data) {
    let masterNode = document.getElementById('masterNode');

    let flag = true;
    data.forEach((instType) => {
        let option = document.createElement('option');
        option.value = `${instType.size}_${instType.region}`;
        if (flag) {
            option.setAttribute('selected', true)
  
            flag = !flag;
        }

        option.textContent = `${instType.size}-${instType.region}`;
        masterNode.appendChild(option);
    });

}
function appendWorkerNodeData(data) {
    let workerNodeInstanceType = document.getElementById('workerNode');
    let flag = true;

    data.forEach((instType) => {
        let option = document.createElement('option');
        option.value = `${instType.size}_${instType.region}`;
        if (flag) {
            option.setAttribute('selected', true)
            flag = !flag;
        }
        option.textContent = `${instType.size}-${instType.region}`;
        workerNodeInstanceType.appendChild(option);
    });
}
function costCalculator(data, size) {
    let [currSize, region] = size.split('_');
    // size = size[1].concat(`-${size[2]}`
    // console.log(currSize, region)
    let price;
    let dataWithPrice = data.forEach((el) => {
        if (el.size === currSize && el.region === region) {
            price = el.prices
        }
    });
    
    return price.USD;

}


export { getData, appendMasterNodeData, appendWorkerNodeData, costCalculator };