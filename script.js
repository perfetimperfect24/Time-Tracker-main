
let daily = document.getElementsByClassName("daily")[0]
let weekly = document.getElementsByClassName("weekly")[0]
let monthly = document.getElementsByClassName("monthly")[0]

let items = document.getElementsByClassName("time")
console.log(items)

daily.classList.toggle('selected');
weekly.classList.remove('selected');
monthly.classList.remove('selected');
    
fetch('data.json')
.then(response => response.json())
.then(data => {
    let i = 0;
    data.forEach(activity => {
        items[i].children[0].innerHTML = activity['timeframes']['daily']['current'] + " hrs"
        items[i].children[1].innerHTML = "Yesterday - " + activity['timeframes']['daily']['previous'] + " hrs"
        i++;
    });
})

daily.addEventListener('click', () => {
    
    daily.classList.toggle('selected');
    weekly.classList.remove('selected');
    monthly.classList.remove('selected');
    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let i = 0;
        data.forEach(activity => {
            items[i].children[0].innerHTML = activity['timeframes']['daily']['current'] + " hrs"
            items[i].children[1].innerHTML = "Yesterday - " + activity['timeframes']['daily']['previous'] + " hrs"
            i++;
       });
    })

})

weekly.addEventListener('click', () => {

    daily.classList.remove('selected');
    weekly.classList.toggle('selected');
    monthly.classList.remove('selected');
    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let i = 0;
        data.forEach(activity => {
            items[i].children[0].innerHTML = activity['timeframes']['weekly']['current'] + " hrs"
            items[i].children[1].innerHTML = "Last Week - " + activity['timeframes']['weekly']['previous'] + " hrs"
            i++;
       });
    })
})

monthly.addEventListener('click', () => {

    daily.classList.remove('selected');
    weekly.classList.remove('selected');
    monthly.classList.toggle('selected');
    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let i = 0;
        data.forEach(activity => {
            items[i].children[0].innerHTML = activity['timeframes']['monthly']['current'] + " hrs"
            items[i].children[1].innerHTML = "Last Month - " + activity['timeframes']['monthly']['previous'] + " hrs"
            i++;
       });
    })

})

