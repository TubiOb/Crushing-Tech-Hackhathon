function changeBorderColor(isFocused) {
    var searchBox = document.querySelector('.search-box');
    searchBox.style.borderColor = isFocused ? '4px solid #F0F0F0' : '1px solid #616161';
}