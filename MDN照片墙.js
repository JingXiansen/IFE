

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised. :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'] ;
var insertY = ['the soup kitchen','Disneyland','the White House'] ;
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'] ;

document.getElementById('cn').onclick = function (){
  document.title = 'Ц��������';
  document.getElementById('lbl-customname').textContent = '�������Զ�������֣�';
  document.getElementById('lbl-cn').textContent = '�й�';
  document.getElementById('lbl-us').textContent = '����';
  document.getElementById('lbl-uk').textContent = 'Ӣ��';
  document.getElementById('customname').placeholder = '����';
  document.querySelector('.randomize').textContent = '�������Ц��';
};

document.getElementById('us').onclick =
document.getElementById('uk').onclick = function () {
  document.title = 'Silly story generator';
  document.getElementById('lbl-customname').textContent = 'Enter custom name:';
  document.getElementById('lbl-cn').textContent = 'CN';
  document.getElementById('lbl-us').textContent = 'US';
  document.getElementById('lbl-uk').textContent = 'UK';
  document.getElementById('customname').placeholder = 'Bob';
  document.querySelector('.randomize').textContent = 'Generate random story';};
randomize.addEventListener('click', result, false);

function result() {

var newStory = storyText;
var newStory = storyText;
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);


 if(customName.value !== '') {
 var name = customName.value;
 newStory.replace('Bob',name);
  }
  	var newStory = newStory.replace(/:insertx:/g,xItem);
	var newStory = newStory.replace(':inserty:',yItem);
	var newStory = newStory.replace(':insertz:',zItem);
	var newStory = newStory.replace('94 fahrenheit',temperature);
	var newStory = newStory.replace('300 pounds',weight);


  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.071429) + 'stones';
    var temperature = Math.round(94);
	

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}