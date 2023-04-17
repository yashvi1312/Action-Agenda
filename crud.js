let id = 'no'
// localStorage.clear()
displaydata()

function managedata() {
    document.getElementById("msg").innerHTML = ""
    let name = document.getElementById("name").value
    if (name == "") {
        document.getElementById("msg").innerHTML = "Please enter your name"
    }
    else {
        //    let box = document.getElementById("box")
        //    let list = document.createElement("li")
        //    list.textContent = name
        //    box.appendChild(list)

        if (id == "no") {
            let arr = JSON.parse(localStorage.getItem('crud'))
            if (arr == null) {
                let data = [name]
                localStorage.setItem('crud', JSON.stringify(data))
            }
            else {
                arr.push(name)
                localStorage.setItem('crud', JSON.stringify(arr))
            }
            document.getElementById("msg").innerHTML = "Data added..."

        }
        else {
            let arr = JSON.parse(localStorage.getItem('crud'))
            arr[id] = name
            localStorage.setItem('crud', JSON.stringify(arr))
            document.getElementById("msg").innerHTML = "Data updated..."

        }
        setTimeout(() => {
            location.reload()
        }, 1000)
    }
    document.getElementById("name").value = ""
    displaydata()
}

function displaydata() {
    let arr = JSON.parse(localStorage.getItem('crud'))
    if (arr != null) {
        let html = ""
        let sr_no = 1
        for (let k in arr) {
            html = html + `<tr>
                              <td>${sr_no}</td>
                              <td>${arr[k]}</td>
                              <td><button id="edit" onclick = "editData(${k})">Edit</button>&nbsp &nbsp</td>
                             <td> <button id="delete" onclick = "deleteData(${k})">Delete</button></td>
                          </tr>`
            sr_no++
        }
        document.getElementById("root").innerHTML = html
    }
    document.getElementById("name").value = ""

}

function deleteData(rid) {
    let arr = JSON.parse(localStorage.getItem('crud'))
    arr.splice(rid, 1)
    localStorage.setItem('crud', JSON.stringify(arr))
    displaydata()
    document.getElementById("msg").innerHTML = "Data Deleted..."
    // alert("Data Deleted")
    setTimeout(() => {
        document.getElementById("msg").innerHTML = ""
    }, 1000)
}


function editData(rid) {
    id = rid
    let arr = JSON.parse(localStorage.getItem('crud'))
    document.getElementById("name").value = arr[rid]
}
