

// initialize array to hold a few ads
var adOptions = [];

// define an object to hold metadata from ads endpoint and renditoins from submit endpoint
function ad(metadata, renditions){
    this.metadata = metadata
  this.renditions = renditions
  
}

//--------Start Data-----------------
// store sample data in variables
var adMetadata = 
{
    "id": 20,
    "adid": "17745442.139877008236992",
    "creativeId": "90187735",
    "uuid": "4946eef4d2b6e0f32c75dd092b9c756a",
    "dateRead": 1501074294000,
    "dateCreated": 1501074294000,
    "url": "https://gcdn.2mdn.net/videoplayback/id/84fea2fb130e2413/itag/37/source/doubleclick_dmm/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3637657083/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/1775B2CF956E448A194374A0543085FEBCE014C6.6B52DAA615188C9BD2DBD2D01BDF0C12CB3BA7CC/key/ck2/file/file.mp4",
    "bitrate": 2998,
    "width": 1920,
    "height": 1080,
    "aspectRatio": "AR_16_9",
    "errorUrls": null
};

// The status data from submit post
var adStatus =
{
    "msg": null,
    "status": "READY",
    "adDatas": [
        {
            "profile": {
                "id": 10,
                "bitrate": 1028,
                "height": 360,
                "width": 640,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/1028_640_360_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/1028_640_360_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/1028_640_360_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5038,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/1028_640_360_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 7,
                "bitrate": 3128,
                "height": 720,
                "width": 1280,
                "frameRate": "29.97",
                "profile": "high",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/3128_1280_720_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/3128_1280_720_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/3128_1280_720_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5038,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/3128_1280_720_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 8,
                "bitrate": 2128,
                "height": 540,
                "width": 960,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/2128_960_540_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/2128_960_540_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/2128_960_540_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5038,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/2128_960_540_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 11,
                "bitrate": 498,
                "height": 288,
                "width": 512,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/498_512_288_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/498_512_288_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/498_512_288_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5038,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/498_512_288_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 12,
                "bitrate": 450,
                "height": 252,
                "width": 448,
                "frameRate": "29.97",
                "profile": "baseline",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/450_448_252_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6029,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/450_448_252_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/450_448_252_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5038,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/450_448_252_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 9,
                "bitrate": 1528,
                "height": 432,
                "width": 768,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/1528_768_432_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/1528_768_432_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/1528_768_432_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5038,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/49/4/4946eef4d2b6e0f32c75dd092b9c756a/1528_768_432_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        }
    ]
}
//pull out renditions array
var adRenditions = adStatus["adDatas"];

// add a new option to array 
adOptions[0] = new ad(adMetadata, adRenditions);

//--------End Data------------------


//--------Start Data-----------------
// store sample data in variables
var adMetadata = 
{
      "id": 199,
        "adid": "14954663.140644762026496",
        "creativeId": "14954663",
        "uuid": "c990a4c86b61a8e1a343429c2e854ebd",
        "dateRead": 1470737164000,
        "dateCreated": 1470737164000,
        "url": "http://asmassets.mtvnservices.com/asmstor/asm/2016/03/11/RHD18512-02/RHD18512-02_1280x720_3500_h32.mp4",
        "bitrate": 2869,
        "width": 1280,
        "height": 720,
        "aspectRatio": "AR_16_9"
};

// The status data from submit post
var adStatus =
{
    "msg": null,
    "status": "READY",
    "adDatas": [
        {
            "profile": {
                "id": 12,
                "bitrate": 450,
                "height": 252,
                "width": 448,
                "frameRate": "29.97",
                "profile": "baseline",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/450_448_252_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6029,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/450_448_252_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/450_448_252_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/450_448_252_29.97/stream00002.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/450_448_252_29.97/stream00003.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/450_448_252_29.97/stream00004.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/450_448_252_29.97/stream00005.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 11,
                "bitrate": 498,
                "height": 288,
                "width": 512,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/498_512_288_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/498_512_288_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/498_512_288_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/498_512_288_29.97/stream00002.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/498_512_288_29.97/stream00003.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/498_512_288_29.97/stream00004.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/498_512_288_29.97/stream00005.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 10,
                "bitrate": 1028,
                "height": 360,
                "width": 640,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1028_640_360_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1028_640_360_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1028_640_360_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1028_640_360_29.97/stream00002.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1028_640_360_29.97/stream00003.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1028_640_360_29.97/stream00004.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1028_640_360_29.97/stream00005.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 8,
                "bitrate": 2128,
                "height": 540,
                "width": 960,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/2128_960_540_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/2128_960_540_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/2128_960_540_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/2128_960_540_29.97/stream00002.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/2128_960_540_29.97/stream00003.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/2128_960_540_29.97/stream00004.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/2128_960_540_29.97/stream00005.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 7,
                "bitrate": 3128,
                "height": 720,
                "width": 1280,
                "frameRate": "29.97",
                "profile": "high",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/3128_1280_720_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/3128_1280_720_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/3128_1280_720_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/3128_1280_720_29.97/stream00002.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/3128_1280_720_29.97/stream00003.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/3128_1280_720_29.97/stream00004.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/3128_1280_720_29.97/stream00005.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 9,
                "bitrate": 1528,
                "height": 432,
                "width": 768,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1528_768_432_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1528_768_432_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1528_768_432_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1528_768_432_29.97/stream00002.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1528_768_432_29.97/stream00003.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6006,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1528_768_432_29.97/stream00004.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/62/d/62dc84c1eefd8f0aa465f6e27322f92f/1528_768_432_29.97/stream00005.ts?isAd=true"
                    }
                ],
                "options": null
            }
        }
    ]
}
//pull out renditions array
var adRenditions = adStatus["adDatas"];

// add a new option to array 
adOptions[1] = new ad(adMetadata, adRenditions);

//--------End Data------------------

//--------Start Data-----------------
// store sample data in variables
var adMetadata = 
{
    "id": 159,
    "adid": "19864999.140654880086656",
    "creativeId": "90843812",
    "uuid": "d59100c7582d7dcf18880cc3c9d39bdb",
    "dateRead": 1502100219000,
    "dateCreated": 1502100219000,
    "url": "https://gcdn.2mdn.net/videoplayback/id/4667aefc089a892e/itag/37/source/doubleclick_dmm/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3642937867/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/66E9D57331564B8F1DB0B444E4039A30776C37F9.9DCADF1B8303A47C2C29A9E3B4C917B823D26D83/key/ck2/file/file.mp4",
    "bitrate": 3060,
    "width": 1920,
    "height": 1080,
    "aspectRatio": "AR_16_9",
    "errorUrls": null
};

// The status data from submit post
var adStatus =
{
    "msg": null,
    "status": "READY",
    "adDatas": [
        {
            "profile": {
                "id": 11,
                "bitrate": 498,
                "height": 288,
                "width": 512,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/498_512_288_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/498_512_288_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/498_512_288_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/498_512_288_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 10,
                "bitrate": 1028,
                "height": 360,
                "width": 640,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/1028_640_360_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/1028_640_360_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/1028_640_360_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/1028_640_360_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 8,
                "bitrate": 2128,
                "height": 540,
                "width": 960,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/2128_960_540_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/2128_960_540_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/2128_960_540_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/2128_960_540_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 12,
                "bitrate": 450,
                "height": 252,
                "width": 448,
                "frameRate": "29.97",
                "profile": "baseline",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/450_448_252_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6029,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/450_448_252_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/450_448_252_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/450_448_252_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 9,
                "bitrate": 1528,
                "height": 432,
                "width": 768,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/1528_768_432_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/1528_768_432_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/1528_768_432_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/1528_768_432_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 7,
                "bitrate": 3128,
                "height": 720,
                "width": 1280,
                "frameRate": "29.97",
                "profile": "high",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/3128_1280_720_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/3128_1280_720_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/3128_1280_720_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/d5/9/d59100c7582d7dcf18880cc3c9d39bdb/3128_1280_720_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        }
    ]
}
//pull out renditions array
var adRenditions = adStatus["adDatas"];

// add a new option to array 
adOptions[2] = new ad(adMetadata, adRenditions);

//--------End Data------------------

//--------Start Data-----------------
// store sample data in variables
var adMetadata = 
{
     "id": 179,
    "adid": "19864999.140261082901952",
    "creativeId": "90843824",
    "uuid": "22380f94e2554b189a8fbc7eadb01e53",
    "dateRead": 1502100354000,
    "dateCreated": 1502100354000,
    "url": "https://gcdn.2mdn.net/videoplayback/id/0cdcb40ecdd0692e/itag/37/source/doubleclick_dmm/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3642937865/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/797298C3C45924186AAEAD72FE83A9BE20C77339.925413EBF03B079583190F0884B914C92955A1A/key/ck2/file/file.mp4",
    "bitrate": 3478,
    "width": 1920,
    "height": 1080,
    "aspectRatio": "AR_16_9",
    "errorUrls": null
};

// The status data from submit post
var adStatus =
{
    "msg": null,
    "status": "READY",
    "adDatas": [
        {
            "profile": {
                "id": 11,
                "bitrate": 498,
                "height": 288,
                "width": 512,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/498_512_288_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/498_512_288_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/498_512_288_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/498_512_288_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 10,
                "bitrate": 1028,
                "height": 360,
                "width": 640,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/1028_640_360_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/1028_640_360_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/1028_640_360_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/1028_640_360_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 12,
                "bitrate": 450,
                "height": 252,
                "width": 448,
                "frameRate": "29.97",
                "profile": "baseline",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/450_448_252_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6029,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/450_448_252_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/450_448_252_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/450_448_252_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 7,
                "bitrate": 3128,
                "height": 720,
                "width": 1280,
                "frameRate": "29.97",
                "profile": "high",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/3128_1280_720_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/3128_1280_720_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/3128_1280_720_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/3128_1280_720_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 8,
                "bitrate": 2128,
                "height": 540,
                "width": 960,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/2128_960_540_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/2128_960_540_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/2128_960_540_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/2128_960_540_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        },
        {
            "profile": {
                "id": 9,
                "bitrate": 1528,
                "height": 432,
                "width": 768,
                "frameRate": "29.97",
                "profile": "main",
                "parameters": null
            },
            "filePath": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/1528_768_432_29.97/video.m3u8",
            "playlist": {
                "chunks": [
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 6039,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/1528_768_432_29.97/stream00000.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 4004,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/1528_768_432_29.97/stream00001.ts?isAd=true"
                    },
                    {
                        "key": {
                            "method": "NONE",
                            "uri": null,
                            "iv": null
                        },
                        "duration": 5005,
                        "src": "http://seamless.viacom.com/tmp/seamless/slots/live/22/3/22380f94e2554b189a8fbc7eadb01e53/1528_768_432_29.97/stream00002.ts?isAd=true"
                    }
                ],
                "options": null
            }
        }
    ]
}
//pull out renditions array
var adRenditions = adStatus["adDatas"];

// add a new option to array 
adOptions[3] = new ad(adMetadata, adRenditions);

//--------End Data------------------

// assign selector element to variable
var selector; 

// on change create players
$( document ).ready(function() {
	selector = document.getElementById("selector")
	selector.onchange = function(){
		
		var value = this.options[this.selectedIndex].value
		console.log(value);
		createPlayers(value);
	};
});


function createPlayers(value){
    console.log(value)
        
//clear the page
document.getElementById("players").innerHTML="";

//Populate configs, render players for selected ad

var selectedAd = adOptions[value];
console.log(selectedAd)

adMetadata = selectedAd.metadata;
adRenditions = selectedAd.renditions;

function playerConfig(name, src){
    this.name = name;
  this.src = src;
}

function renderPlayer(item, index){
    var players = document.getElementById("players");
  var container = document.createElement("DIV")
  var nameElement = document.createElement("P")
  //var nameText = document.createTextNode(item.name);
  
  var video = document.createElement("VIDEO");
  var source = document.createElement("SOURCE");
  video.setAttribute("width", "640");
  video.setAttribute("height", "360");
  video.setAttribute("controls", "");
  video.setAttribute("allowFullScreen", "");
  source.setAttribute("src", item.src);
    nameElement.innerHTML =item.name + "<br>" + item.src;
 //nameElement.appendChild(nameText);
  container.appendChild(nameElement)
  video.appendChild(source);
  container.appendChild(video);
  players.appendChild(container);
  //players.innerHTML = item.name + "<br>" + item.src;
}

function renditionConfigs(item, index){
    playerConfigs[index+1] = new playerConfig("Rendition " + (index+1) + ": " + item.profile.width + "w " + item.profile.height + "h " + item.profile.bitrate + "Kbps", item.filePath)
}

var playerConfigs = [];

playerConfigs[0] = new playerConfig("Source MP4: " + adMetadata.width + "w " + adMetadata.height + "h " + adMetadata.bitrate + "Kbps", adMetadata.url);

adRenditions.forEach(renditionConfigs);

playerConfigs.forEach(renderPlayer);


}