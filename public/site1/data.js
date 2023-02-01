var APP_DATA = {
  "scenes": [
    {
      "id": "0-dnevni-boravak",
      "name": "Dnevni Boravak",
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
        "yaw": -2.5718246653840247,
        "pitch": 0.13603222281052574,
        "fov": 1.3074507059741394
      },
      "linkHotspots": [
        {
          "yaw": 0.6199035393155743,
          "pitch": 0.25830537652276675,
          "rotation": 0,
          "target": "1-kuhinja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kuhinja",
      "name": "Kuhinja",
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
        "yaw": -0.06982370715968855,
        "pitch": 0.017053704860529706,
        "fov": 1.3074507059741394
      },
      "linkHotspots": [
        {
          "yaw": 2.798008630837753,
          "pitch": 0.2340900021569432,
          "rotation": 0,
          "target": "0-dnevni-boravak"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
