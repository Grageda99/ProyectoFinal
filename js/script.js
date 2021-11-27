$(document).ready(function()
{
    //Clase al primer enlace 
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

    //Fitrado de los elementos 
    $('.category_item').click(function(){
        var catElemto = $(this).attr('category');
        console.log(catElemto);

        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //ocultar elementos 
        $('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

        //mostrar elementos 
        function showProduct(){
			$('.product-item[category="'+catElemto+'"]').show();
			$('.product-item[category="'+catElemto+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
    });

    //Mostrar todo
    $('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});

});