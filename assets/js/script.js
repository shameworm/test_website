var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.link = link;
	this.id = "slide" + slideIndex;
	slideIndex++;
	slideArray.push(this);
}

var slide1 = new Slide(
	"",
	"Мем какой-то<br> хотите спою?",
	"public/images/slide1.png",
	"http://lurkmore.to/Мем"
);
var slide2 = new Slide(
	"Она и так была некрасивой",
	"Фантазер<br> ты меня называла",
	"public/images/slide2.png",
	"https://uk.wikipedia.org/wiki/Євдокимов_Ярослав_Олександрович"
);
var slide3 = new Slide(
	":3",
	"А мы с тобою<br> не пара",
	"public/images/slide3.png",
	"https://uk.wikipedia.org/wiki/Франц_Кафка"
);
var slide4 = new Slide(
	"Беляш",
	"Я получше ее пою, поверьте",
	"public/images/slide4.jpg",
	"https://ru.wikipedia.org/wiki/Айлиш,_Билли"
);



function buildSlider(){
	var myHTML;
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='" + slideArray[i].id +
			"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
				"<div class='slideOverlay'>" +
					"<h1 class='titleSlide'>" + slideArray[i].title + "</h1>" +
				"</div>" +
			"</div>";
	}

	document.getElementById("mySlider").innerHTML = myHTML;
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

function buildReverseSlider(){
	var myHTML;
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='r" + slideArray[i].id +
			"' class='singleSlide reverse' style='background-image:url(" + slideArray[i].background + ");'>" +
				"<div class='slideOverlay'>" +
					"<h4>" + slideArray[i].subtitle + "</h4>" +
					"<a class='slider' href='" + slideArray[i].link + "' target='_blank'><span>Open</span></a>" +
				"</div>" +
			"</div>";
	}

	document.getElementById("myReverseSlider").innerHTML = myHTML;
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;
}

buildSlider();
buildReverseSlider();

function prevSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = (slideArray.length - 1);
	} else {
		nextSlideIndex = currentSlideIndex - 1;
	}

	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	document.getElementById("rslide" + nextSlideIndex).style.left = "100%";
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
	document.getElementById("rslide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight reverse");
	document.getElementById("rslide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft reverse");

	currentSlideIndex = nextSlideIndex;
}

function nextSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
		nextSlideIndex = currentSlideIndex + 1;
	}

	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	document.getElementById("rslide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
	document.getElementById("rslide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft reverse");
	document.getElementById("rslide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight reverse");

	currentSlideIndex = nextSlideIndex;
}
