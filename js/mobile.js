// Data load function 
const loadData = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';
    if (searchValue == ''){
        document.getElementById('empty-string').style.display = 'block';
        document.getElementById('error-input').style.display = 'none';
    }
    else{
        document.getElementById('empty-string').style.display = 'none';
        document.getElementById('error-input').style.display = 'none';
        const url = 'https://openapi.programming-hero.com/api/phones?search=${searchValue}'
        fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data.slice(0,20)))
    }

}



// Display Result Function 
const displayResult = (phones) => {
    const result = document.getElementById('display-result');
    result.textContent = '';
    if (phones.length == 0){
        document.getElementById('error-input').style.display = 'block';
        document.getElementById('empty-string').style.display = 'none';
    }
    else{
        document.getElementById('empty-string').style.display = 'none';
        document.getElementById('error-input').style.display = 'none';
        phones.forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML =
                `<div class="card border border-info rounded shadow-lg p-3 mb-5 bg-body rounded"> <img src="${phone.image}" class="card-img-top img-fluid p-5" alt="..."> 
                <div class="card-body">
                <h5 class="card-title px-5">${phone.brand}</h5> 
                <p class="card-text px-5">${phone.phone_name}</P>
                <a href="#details-output" onclick="loadDetails('${phone.slug}')" class="btn btn-info px-5 mx-5 w-75">
                </div>
             </div>`
             result.appendChild(div);
        });

    }

}















