const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
$('#controlR').click(function() {
      event.preventDefault();
      $('#content').animate({
        marginLeft: "-=400px"
      }, "fast");
   });

 $('#controlL').click(function() {
      event.preventDefault();
      $('#content').animate({
        marginLeft: "+=400px"
      }, "fast");
 });



// jQuery(document).ready(function ($) {

  
  
// 	var slideCount = $('.module-section ul li').length;
// 	var slideWidth = $('.module-section ul li').width();
// 	var slideHeight = $('.module-section ul li').height();
// 	var sliderUlWidth = slideCount * slideWidth;
	
// 	$('.module-section').css({ width: slideWidth, height: slideHeight });
	
// 	$('.module-section ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
//     $('.module-section ul li:last-child').prependTo('.module-section ul');

//     function moveLeft() {
//         $('.module-section ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('.module-section ul li:last-child').prependTo('.module-section ul');
//             $('.module-section ul').css('left', '');
//         });
//     };

//     function moveRight() {
//         $('.module-section ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('.module-section ul li:first-child').appendTo('.module-section ul');
//             $('.module-section ul').css('left', '');
//         });
//     };

//     $('.left-controls').click(function () {
//         moveLeft();
//     });

//     $('.right-controls').click(function () {
//         moveRight();
//     });

// });    








