// const el = document.getElementById(input_form)
// el.addEventListener('onsubmit',function (e){
// console.log(e)
// e.preventDefault()

// })

const table = document.getElementById("table");

const data = [
    {
        'cat': 'abc',
        'name': "satvik", 'id': 1, 'quantiy': 10
    }
];

async function onload (e){
// const res =
//       fetch("ht")
// const data =await JSON.parse(res.body)

        
    data.map((data,i)=>{
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
    
        td1.innerText = data.cat;
    const arr = data.name.split(',')

        for (let i=0;i<arr.length;i++){
            const li =document.createElement('li');
            li.innerText = arr[i];
            td2.appendChild(li);
        }
        td3.innerText = data.id;
        td4.innerText = data.quantity;
    
        
    
        tr.append(td1, td2, td3, td4);
        table.appendChild(tr);
        
    })


}
const forms = document.getElementsByTagName('form')
function addData() {

    const el1 = document.getElementById("category_input");
    const el2 = document.getElementById("Item_name_input");
    const el3 = document.getElementById("Item_id_input");
    const el4 = document.getElementById("Quantity_input");

    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')

    td1.innerText = el1.value;
    const arr = el2.value.split(',')

    for (let i=0;i<arr.length;i++){
        const li =document.createElement('li');
        li.innerText = arr[i];
        td2.appendChild(li);
    }
    // td2.innerText = el2.value;
    td3.innerText = el3.value;
    td4.innerText = el4.value;

    console.log(el1.value);

    tr.append(td1, td2, td3, td4);
    table.appendChild(tr);

    el1.value = ""
    el2.value = ""
    el3.value = ""
    el4.value = ""




}

