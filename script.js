let rowNumberSection=document.querySelector(".row-number-section")

let lastcell=document.querySelector(".cell-section"); 

let formulaBarSelectedArea=document.querySelector(".selected-cell-div")

let columnTagSection=document.querySelector(".column-tag-section")
let cellSection=document.querySelector(".cell-section");
//transfrom cell header move with cell movement
cellSection.addEventListener("scroll",function(e){
    rowNumberSection.style.transform=`translateY(-${e.currentTarget.scrollTop}px)`
    columnTagSection.style.transform=  `translateX(-${e.currentTarget.scrollLeft}px)`
})
for(let i=1;i<100;i++){
    let div=document.createElement("div")
    div.innerText=i;
    div.classList.add("row-number")
    rowNumberSection.append(div);
}
columnTagSection=document.querySelector(".column-tag-section")
for(let i=0;i<26;i++){
    let ascii=65+i;
    let reqAlphabet =String.fromCharCode(ascii);

    let div=document.createElement("div")
    div.innerText=reqAlphabet;
    div.classList.add("column-tag")
    columnTagSection.append(div);
}

     cellSection=document.querySelector(".cell-section");

    for(let i=1;i<=100;i++){
       let rowDiv= document.createElement("div")
       rowDiv.classList.add("row-address")

        for(let j=0;j<26;j++){
            let ascii=65+j;
            let reqAlphabet =String.fromCharCode(ascii);

            let cellAddress=reqAlphabet+i;
            let cellDiv=document.createElement("div");
            cellDiv.contentEditable=true
            cellDiv.classList.add("cell")
            
            cellDiv.setAttribute("data-address",cellAddress)

            cellDiv.addEventListener("click",function(e){
                if(lastcell){
                    lastcell.classList.remove("cell-selected")
                }
                    e.currentTarget.classList.add("cell-selected")
                    lastcell=e.currentTarget;
                   let currentCellAdd= e.currentTarget.getAttribute("data-address")
                   formulaBarSelectedArea.innerText=currentCellAdd
            });

            rowDiv.append(cellDiv);
        }
        cellSection.append(rowDiv);
    }