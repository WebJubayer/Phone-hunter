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
            div.innerHTML
        })

    }


}














