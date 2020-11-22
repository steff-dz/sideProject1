const arrows = document.querySelectorAll('.downArrow');
const answers = document.querySelectorAll('p');
const questions = document.querySelectorAll('h2');
const box = document.querySelector('#boxImg');

for (let i = 0; i < questions.length; i++) {
	questions.item(i).addEventListener('click', function() {
		if (answers.item(i).style.visibility === 'hidden' || answers.item(i).style.visibility === '') {
			for (let j = 0; j < questions.length; j++) {
				if (answers.item(j).style.visibility === 'visible') {
					questions.item(j).style.fontWeight == '400';
					answers.item(j).style.visibility = 'hidden';
					arrows.item(j).classList.remove('animateArrow');
					box.classList.remove('moveBox');
				}
			}
			questions.item(i).style.fontWeight = '700';
			answers.item(i).style.visibility = 'visible';
			answers.item(i).style.top = '0px';
			answers.item(i).style.paddingBottom = '10px';
			arrows.item(i).classList.add('animateArrow');
			box.classList.add('moveBox');
		} else {
			questions.item(i).style.fontWeight = '400';
			answers.item(i).style.visibility = 'hidden';
			answers.item(i).style.paddingBottom = '0';
			arrows.item(i).classList.remove('animateArrow');
			box.classList.remove('moveBox');
		}
	});
}
