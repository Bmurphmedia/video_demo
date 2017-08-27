
//To Do: 
//Captions showing that they are off set
//Client-side ad on other JW instance 

function ViacomVideo(uri){
	this.uri = uri;
	this.seamlessUrl = "http://seamless.mtvnservices.com/api/" + uri + "/package.json?proxy=true&SMADfwToS3=true&SMADfwUrl=https://s3.amazonaws.com/mtvnet-seamless/qa-artifacts/403_preroll_vmap.xml&SMSYSdebug=all&SMCRarcPlatforms=7ac7942e-6481-457f-b39a-2b1aedb29f29,b995f21c-e76f-4e58-8d0f-0964dc76efd3,6caa8f01-72e5-4707-abd6-608a0146e2ee,39dfe10c-cc2a-40f9-a20d-962d2604d543,0a16f611-d105-436a-8188-33ea8871171e,f17d0e9b-657a-4785-b3ca-dae9e78563a1";
	this.seamlessPackage;
	this.mediaGenUrl = "https://media-utils.mtvnservices.com/services/MediaGenerator/" + uri + "?arcPlatforms=7ac7942e-6481-457f-b39a-2b1aedb29f29,b995f21c-e76f-4e58-8d0f-0964dc76efd3,6caa8f01-72e5-4707-abd6-608a0146e2ee,39dfe10c-cc2a-40f9-a20d-962d2604d543,0a16f611-d105-436a-8188-33ea8871171e,f17d0e9b-657a-4785-b3ca-dae9e78563a1&isEpisode=true&format=json&acceptMethods=hls"
	this.mediaGenPackage;



}


function SeamlessPackage(json){
	this.json = json
	this.src =  json.package.video.item[0].rendition.src

}

function MediaGenPackage(json){
	this.json = json
	this.src =  json.package.video.item[0].rendition[0].src

}

function createJwPlayer(id, src, adConfig){
	// var container = document.createElement("DIV");
 //  	container.setAttribute("id", id);
 //  	document.body.appendChild(container)
	console.log('making player ' + id)
	players[id] = jwplayer(id).setup({
		file: src,
		// "image": "http://example.com/myImage.png",
		height: 360,
		width: 640,
		autostart: false,
		advertising: adConfig
	});

}


function requestMedia(url, type, adConfig){
	
	$.get( url, function(data) {
	  
	  console.log(data);
	  if (type == "seamless"){
	  	video.seamlessPackage = new SeamlessPackage(data);
	  	createJwPlayer("ssai", video.seamlessPackage.src);

	  }
	  if (type == "mediaGen"){
	  	video.mediaGenPackage = new MediaGenPackage(data)
	  	createJwPlayer("client", video.mediaGenPackage.src, adConfig);
	  	
	  }

	  
	})
	
}






var clip = "mgid:arc:video:mtv.com:f7895ec6-2c0d-4810-8433-6b0ad1b657af"
var episode = "mgid:arc:episode:mtv.com:c7f34e56-eaa4-11e6-bfd4-0026b9414f30"
var video = new ViacomVideo(clip)
var adConfig =  {
      client: 'googima',
      offset: 'pre',
      mute: false,
      // tag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x360&iu=/6062/iab_vast_samples/skippable&ciu_szs=300x250,728x90&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]'
      tag: 'https://s3.amazonaws.com/mtvnet-seamless/qa-artifacts/403_vast.xml',

    }

var players = {};




// requestMedia(video.seamlessUrl, 'seamless')







