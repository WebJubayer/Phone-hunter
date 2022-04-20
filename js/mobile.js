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

    }
}