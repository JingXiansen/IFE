

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
  document.title = '笑话生成器';
  document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
  document.getElementById('lbl-cn').textContent = '中国';
  document.getElementById('lbl-us').textContent = '美国';
  document.getElementById('lbl-uk').textContent = '英国';
  document.getElementById('customname').placeholder = '李雷';
  document.querySelector('.randomize').textContent = '随机生成笑话';
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