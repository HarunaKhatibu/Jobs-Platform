const categories = Array.from(jCategory);

document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase()
    const filterData = categories.filter((item)=>
        item.title.toLocaleLowerCase().includes(searchData)
    );
    displayItems(filterData);
});

const displayItems =(items) =>{
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = '';
// creating templates
    items.forEach((item) =>{
        const {index, image, title, rate, av} = item;
        const jList = document.createElement("div");
        jList.className ="jList";
        jList.innerHTML =`
         <img src="${image}" alt="">
         <h3>${title}</h3>
         <p>${rate}</p>
         <span id="key">${av}</span>
        
        `;

        rootElement.appendChild(jList);

        // add eventListener

        jList.addEventListener('click', () =>{
            window.location.href=`job-detail.html?id=${index}`;
        });
    });
};

displayItems(categories);