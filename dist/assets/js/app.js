function toggleList(button) {
    button.classList.toggle('active');
    const nestedList = button.closest('li').querySelector('.nested-list');
    if (nestedList) {
        nestedList.classList.toggle('active');
    }
}