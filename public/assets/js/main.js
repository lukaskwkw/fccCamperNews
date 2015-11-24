
$(document).ready(function () {

var url = 'http://www.freecodecamp.com/news/hot'

$.getJSON(url,formatJson);


 $('.media-head').click(function(){
 	$('.cssload-container').remove();
 	$('.media-left').fadeIn(1000);
 })
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
	var colSm = 4;
	var styleProfilImage = '';
	if (upVotes>=10 && upVotes<20)
		colSm = 8;
	if (upVotes>=20)
		colSm = 12;
	if (Boolean(profilImage)===true)
		styleProfilImage = "style=\'background-image: url(\""+profilImage+"\");\'"

var itemHtml = '<div class="item col-sm-'+colSm+' col-xs-12">'+
				'<div class="media-head">'
				+'<div class="media-left"'+styleProfilImage+'>'
				+'	</div>'
				+'			<div class="media-headline">'
				+'				<h4>'+headline+'</h4>'
				+'			</div>'
				+'		<div class="media-byline">'
				+'			<span class="media-byline__time">'+timePosted+'</span>'
				+'				<span class="media-byline__author">by @'+username+'</span>'
				+'			<div class="pull-right"><i class="glyphicon glyphicon-heart red--hearth"></i>'
				+'		<span class="rank">'+upVotes+'</span>'
				+'		</div>'
				+'			</div>'
				+'		</div>'
				+'		<div class="description">'
				+'		<p>'+description+'</p>'
				+'		</div>'
				+'	</div>'


	row.append(itemHtml);
}

}


/* 

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

*/