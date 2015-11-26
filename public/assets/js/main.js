
$(document).ready(function () {

var url = 'http://www.freecodecamp.com/news/hot'

$.getJSON(url,formatJson);

})


var loaderHtml = '<div class="cssload-container pull-left"><div class="cssload-zenith"></div></div>'



function formatJson(json)
{	
	for (var i=0; i<json.length; i++)
{
	var row = $(".row");
	html='';
	var profilImage = json[i].author.picture;
	var username = json[i].author.username;
	var descriptionImage = json[i].image;
	var upVotes = json[i].rank;
	var headline = json[i].headline;
	var timePosted = json[i].timePosted;
	var description = json[i].metaDescription;
	var link = json[i].link;
	var headImage = json[i].image;
	var colSm = 4; 
	var styleProfilImage = '';
	var colorStyle = '';
	if (upVotes>=10 && upVotes<20){
			colSm = 8;
			colorStyle = 'orange';
		}
	if (upVotes>=20){
			colSm = 12;
			colorStyle = 'red';
		}
	if (Boolean(profilImage)===true)
		styleProfilImage = "style=\'background-image: url(\""+profilImage+"\");\'";

	var timeNow = new Date();
	var timeHtml = '';
	timePosted = Math.abs(timeNow.getTime()-timePosted);
	var diffrenceInHours = (timePosted/1000/3600);
	if (diffrenceInHours>=48)
	{	
	timePosted = Math.floor(diffrenceInHours/24);
	timeHtml = timePosted + ' days ago'
	}
	
	if (diffrenceInHours>=24 && diffrenceInHours<48)
	{	
	timePosted = Math.floor(diffrenceInHours/24);
	timeHtml = 'a day ago'
	}
	if (diffrenceInHours<24 && diffrenceInHours>1){
	timePosted = Math.floor(diffrenceInHours);
	timeHtml = timePosted + ' hours ago'
	}
	if (diffrenceInHours<=1)
	{
			timePosted = Math.floor(diffrenceInHours);
			timeHtml = 'a hour ago'
	}

	var descriptionHtml = '';
	if (Boolean(description)!==false)
		descriptionHtml = '<div class="description"><p>'+description+'</p></div>';

		styleBackgroundImage = "style=\'background-image: url(\""+headImage+"\");\'";
		var divImage= "";
		if (Boolean(headImage)===true)
			divImage = '<div class="media-image" '+styleBackgroundImage+'></div>';
			var imgAlternative = '<img class="media-image-alternative" src="'+headImage+'">'; //image with <img> tag
// '<h3 class="pull-left"><span class="rank">5</span><i class="glyphicon glyphicon-fire red--hearth"></i></h3>'
var itemHtml = '<div class="item col-sm-'+colSm+' col-xs-12">'
				+'<div class="media-head">'
				+'<div class="media-left"'+styleProfilImage+'>'
				+'	</div>'
				+'			<div class="media-headline">'
				+'				<a href="'+link+'"><h3 class="pull-left"><span class="rank">'+upVotes+'</span>'+
						'<i class="glyphicon glyphicon-fire '+colorStyle+'"></i></h3><h4>'+headline+'</h4></a>'
				+'			'+divImage+descriptionHtml+'</div>'
				+'		<div class="media-byline">'
				+'			<span class="media-byline__time">'+timeHtml+'</span>'
				+'				<span class="media-byline__author">by @'+username+'</span>'
				+'			<div class="pull-right">'
				
				+'		</div>'
				+'			</div>'
				+'		</div>'
				// +descriptionHtml
				+'	</div>'


	row.append(itemHtml);
}

 	$('.wrap-load').fadeOut(1000, function() {
 		 	$('.wrap-load').remove();
 	});

}


/* 

<img class="media-image" src="'+headImage+'">

to-do
timePosted decoded
'posted' + hourly-time % 24 + 'day ago'

headline: "Become a Programmer, Motherfucker",
timePosted: 1448219443441,
metaDescription: "",
description: "undefined",
rank: 13,

author: {
picture: "https://avatars.githubusercontent.com/u/449874?v=3",
username: "storbeck"
}
image: "",

    background-image: url("https://i.kinja-img.com/gawker-media/image/upload/s--9L2JbiDq--/c_fill,fl_progressive,g_north,h_358,q_80,w_636/1350289244899804964.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 300px;

*/