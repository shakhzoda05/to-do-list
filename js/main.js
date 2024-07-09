let elForm=document.querySelector(".form")
let elInput=document.querySelector(".input-value")
let elList=document.querySelector(".list")

let todos=[]

elForm.addEventListener("submit",function(e){
    e.preventDefault()
    const data={
        id:todos.length+1,
        value:e.target[0].value,
        isComplated:false

    }
    todos.push(data)
    renderTodos(todos,elList)
})

function renderTodos(arr,list){
    arr.forEach(item=> {
        let elItem=document.createElement("li")

        elItem.className="flex items-center justify-between"
        elItem.innerHTML =
            <div>
                    <span class="font-bold text-[20px] text-slate-500">${item.id}</span>
                    <span class="font-bold text-[22px]">${item.value}</span>
                </div>
                <div class="flex items-center gap-3">
                    <button class="bg-green-500 hover:opasity-50 duration-300 text-white font-semibold p-3 rounded-lg">Update</button>
                    <button class="bg-red-500 hover:opasity-50 duration-300 text-white font-semibold p-3 rounded-lg">Delete</button>
                </div>

// ---------------------------XATOYIMNI TOPOLMAYAPMAN DARSDA USTOZDAN SORAB TO'G'IRLAB QO'YAMAN------------------------------------------------
        
       
        
        
        
        list.appendChild(elItem);
    })
}