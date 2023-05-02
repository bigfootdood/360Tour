var APP_DATA = {
  "scenes": [
    {
      "id": "0-suprema",
      "name": "Suprema",
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
        "yaw": 0.056829090000004356,
        "pitch": 0,
        "fov": 1.4450773171985711
      },
      "linkHotspots": [
        {
          "yaw": -2.629508790447373,
          "pitch": 0.6758219780019434,
          "rotation": 0,
          "target": "1-suprema-market"
        },
        {
          "yaw": 0.5053578157138823,
          "pitch": 0.035652100259918384,
          "rotation": 0,
          "target": "7-kitchenprep"
        },
        {
          "yaw": 0.14811235344595453,
          "pitch": 0.00879965251654724,
          "rotation": 0,
          "target": "6-restroomregister"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-suprema-market",
      "name": "Suprema Market",
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
          "yaw": -3.1054358243275217,
          "pitch": 0.706423011668921,
          "rotation": 0,
          "target": "0-suprema"
        },
        {
          "yaw": -0.7270308332519182,
          "pitch": 0.2821800369114733,
          "rotation": 0,
          "target": "3-grabandgo"
        },
        {
          "yaw": 0.05993634282612881,
          "pitch": 0.1770375919215592,
          "rotation": 0,
          "target": "2-counter"
        },
        {
          "yaw": 0.9630856541571369,
          "pitch": 0.09591173666253106,
          "rotation": 0,
          "target": "4-butcher"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-counter",
      "name": "Counter",
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
          "yaw": -2.567188891304731,
          "pitch": 0.06642139359396992,
          "rotation": 0,
          "target": "3-grabandgo"
        },
        {
          "yaw": 2.5701487280006257,
          "pitch": 0.11770165250121245,
          "rotation": 0,
          "target": "4-butcher"
        },
        {
          "yaw": -3.1360214016051984,
          "pitch": 0.21539859579523224,
          "rotation": 0,
          "target": "1-suprema-market"
        },
        {
          "yaw": -0.5588720251184824,
          "pitch": 0.05527567719962789,
          "rotation": 0,
          "target": "5-work-tables"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-grabandgo",
      "name": "GrabAndGo",
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
          "yaw": 1.4532359046146572,
          "pitch": 0.7104193886708163,
          "rotation": 0,
          "target": "1-suprema-market"
        },
        {
          "yaw": 1.3313170433608796,
          "pitch": 0.09930366155803227,
          "rotation": 0,
          "target": "4-butcher"
        },
        {
          "yaw": 0.4246467588906473,
          "pitch": 0.16103586516090118,
          "rotation": 0,
          "target": "2-counter"
        },
        {
          "yaw": -0.0683668676218332,
          "pitch": 0.027465556564942872,
          "rotation": 0,
          "target": "5-work-tables"
        },
        {
          "yaw": 2.428174282827716,
          "pitch": 0.3780527240211491,
          "rotation": 0,
          "target": "0-suprema"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-butcher",
      "name": "Butcher",
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
          "yaw": -1.20448575688512,
          "pitch": 0.5183125466220915,
          "rotation": 0,
          "target": "1-suprema-market"
        },
        {
          "yaw": -1.2133478899294374,
          "pitch": 0.037337809230205465,
          "rotation": 0,
          "target": "3-grabandgo"
        },
        {
          "yaw": -0.09062137911220525,
          "pitch": 0.22397539718237525,
          "rotation": 0,
          "target": "2-counter"
        },
        {
          "yaw": -0.05185809680790676,
          "pitch": -0.0030847642667168884,
          "rotation": 0,
          "target": "5-work-tables"
        },
        {
          "yaw": -1.8044861132965266,
          "pitch": 0.2883797280507743,
          "rotation": 0,
          "target": "0-suprema"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-work-tables",
      "name": "Work Tables",
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
          "yaw": -0.025077993239865037,
          "pitch": 0.24457431367519433,
          "rotation": 0,
          "target": "2-counter"
        },
        {
          "yaw": 0.6470505239888631,
          "pitch": 0.07603528736407483,
          "rotation": 0,
          "target": "3-grabandgo"
        },
        {
          "yaw": 0.3334541712524306,
          "pitch": 0.1085372451028892,
          "rotation": 0,
          "target": "1-suprema-market"
        },
        {
          "yaw": 0.06071798416723517,
          "pitch": 0.012296213760350838,
          "rotation": 0,
          "target": "4-butcher"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-restroomregister",
      "name": "Restroom/Register",
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
          "yaw": -0.846095956729668,
          "pitch": 0.08598087073315952,
          "rotation": 0,
          "target": "7-kitchenprep"
        },
        {
          "yaw": 0.45572888368726794,
          "pitch": 0.029827870333125617,
          "rotation": 0,
          "target": "0-suprema"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchenprep",
      "name": "Kitchen/Prep",
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
          "yaw": 1.134774771923631,
          "pitch": 0.017391966713592666,
          "rotation": 0,
          "target": "6-restroomregister"
        },
        {
          "yaw": -0.26302698789718804,
          "pitch": 0.06717418102072159,
          "rotation": 0,
          "target": "0-suprema"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Suprema Market",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
