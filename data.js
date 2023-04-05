var APP_DATA = {
  "scenes": [
    {
      "id": "0-tour1",
      "name": "tour1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.04910934688998658,
        "pitch": 0.2122903958912623,
        "fov": 1.4463261352387993
      },
      "linkHotspots": [
        {
          "yaw": -0.007326824051045122,
          "pitch": 0.19841247293457442,
          "rotation": 0,
          "target": "1-tour2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tour2",
      "name": "tour2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.137449673090508,
          "pitch": 0.15540947396949534,
          "rotation": 0,
          "target": "0-tour1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TestTour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
