
//
function ViacomVideo(uri){
	this.uri = uri;
	this.seamlessUrl = "http://seamless.mtvnservices.com/api/" + uri + "/package.json?proxy=true&SMADfwToS3=true&SMADfwUrl=https://s3.amazonaws.com/mtvnet-seamless/qa-artifacts/403_preroll_vmap.xml&SMSYSdebug=all&SMCRarcPlatforms=7ac7942e-6481-457f-b39a-2b1aedb29f29,b995f21c-e76f-4e58-8d0f-0964dc76efd3,6caa8f01-72e5-4707-abd6-608a0146e2ee,39dfe10c-cc2a-40f9-a20d-962d2604d543,0a16f611-d105-436a-8188-33ea8871171e,f17d0e9b-657a-4785-b3ca-dae9e78563a1";



}

function SeamlessPackage(json){
	this.json = json
	this.src =  json.package.video.item[0].rendition.src

}

function createJwPlayer(src){
	jwplayer("myDiv").setup({
		"file": src,
		"image": "http://example.com/myImage.png",
		"height": 360,
		"width": 640
	});

}


function requestMedia(url){
	
	$.get( url, function(data) {
	  
	  console.log(data);
	  response = new SeamlessPackage(data)
	  createJwPlayer(response.src);
	  
	})
	
}






var video = new ViacomVideo("mgid:arc:episode:mtv.com:c7f34e56-eaa4-11e6-bfd4-0026b9414f30")


var response;
requestMedia(video.seamlessUrl)






