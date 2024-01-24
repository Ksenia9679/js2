function getBorderStyle() {
    let elem = document.getElementById('elem');
    let computedStyle = window.getComputedStyle(elem, null);

    let borderThickness = computedStyle.getPropertyValue('border-width');
    let borderType = computedStyle.getPropertyValue('border-style');
    let borderColor = computedStyle.getPropertyValue('border-color');

    alert("Толщина границы: " + borderThickness + "\nТип границы: " + borderType + "\nЦвет границы: " + borderColor);
}