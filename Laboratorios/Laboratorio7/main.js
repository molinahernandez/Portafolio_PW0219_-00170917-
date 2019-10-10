let carnet_field = document.querySelector("#carnet_field");
let schedule_options = document.querySelector("#schedule_field");
let late_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");
let tbody = document.querySelector("#table_body");
let carnet_regex = new RegExp ("^[0-9]{8}$");

let addStudent = (carnet, schedule, late) =>{
    let new_row = document.createElement("tr");
    let datetime = new Date();

    new_row.classList.add("table-active");
    new_row.innerHTML = `<td>${carnet}</td>
    <td>${schedule}</td>
    <td>${datetime.toLocaleString()}</td>
    <td>${late}</td>`

    tbody.appendChild(new_row);
}

let parseLateBool = (value)=>{
    if(value){
        return "Llego tarde"
    }else{
        return "Todo chill"
    }
}

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_options.options[schedule_options.selectedIndex].text
    let late = parseLateBool(late_switch.checked)

    if(carnet_regex.test(carnet)){
        addStudent(carnet, schedule, late)
    }else{
        alert("Nel")
    }
})

carnet_field.addEventListener("keyup", (event)=>{
    if(event.keyCode == 13){
        submit_btn.click();
    }

})
