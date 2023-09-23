let input = document.getElementById("text");
let btn =document.getElementById("btn");
let boxs = document.querySelectorAll(".box");
let drag=null;
btn.onclick = function(){
    if(input.value !=''){
        boxs[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`;
        input.value='';
    }
    dragitem();
}
function dragitem(){
    let items = document.querySelectorAll(".item");
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
            drag=item;
            item.style.opacity='0.5';
        })

        item.addEventListener('dragend',function(){
            drag=null;
             item.style.opacity='1';
        })

        boxs.forEach(box=>{
            box.addEventListener('dragover',function(e){
                e.preventDefault();
                this.style.background ='red';
                this.style.color ='#fff';
            })
            
            box.addEventListener('dragleave',function(){
                this.style.background ='#fff';
                this.style.color ='#000';
            })

            box.addEventListener('drop',function(){
                this.append(drag);
                this.style.background ='#fff';
                this.style.color ='#000';
            })

        })

    }) 
}













