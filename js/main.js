var navBar = (function(){
	var $navB = $('#navBar1');
	var $ul = $navB.find('ul');
	var $navTabs = $navB.find('.tab');
	var $activeTab = $navB.find('.active');
	var $body = $('#pageBody');
	var $activeDiv = $body.find('.activeD');

	$navTabs.on('click', swapNavTab);

	render();

	function render() {
		$activeTab = $navB.find('.active');
		$activeDiv = $body.find('.activeD')
	}

	function swapNavTab() {
		$activeTab.removeClass('active');
		var $targetTab = $(event.target).closest('.tab');
		var $valInfo = $targetTab.attr('value');
		$targetTab.addClass('active');
		swapBody($activeDiv, $body, $valInfo);
		render();
	}

	function swapBody($active, $area, val) {
		var $target = $area.find(val);
		$active.toggleClass('activeD nonActive');
		$target.toggleClass('nonActive activeD');
	}

})()

var moreAboutMe= (function(){
	var $mDiv = $('#moreAboutMeDiv');
	var $sections = $mDiv.find('.btn');

	$sections.on('click', swapSection);

	function swapSection() {
		var $targetSection = $(event.target).closest('.btn');
		var $href = $targetSection.attr('href');
		$($href).tab('show');
		console.log("hello");
	}
})()