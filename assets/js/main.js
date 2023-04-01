jQuery(document).ready(function(){
    let brandsInner = jQuery('.brands-inner');
    let itemWidth = brandsInner.find('div:first-child').outerWidth();
    let itemsCount = brandsInner.find('div').length;
    let scrollAmount = itemWidth * 5;

    brandsInner.css('width', itemWidth * itemsCount);
});


