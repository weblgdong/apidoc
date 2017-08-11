define({ "api": [
  {
    "type": "get/post",
    "url": "/home/image",
    "title": "图片路径接口",
    "name": "home_image",
    "version": "0.0.1",
    "group": "Home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>图片路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n  \"path\": \"http://×××××/5U99L68Ud3.png\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/home/01-home.coffee",
    "groupTitle": "Home"
  },
  {
    "type": "get/post",
    "url": "/home/list",
    "title": "列表数据接口",
    "name": "home_list",
    "version": "0.0.1",
    "group": "Home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>起始下标</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "max",
            "defaultValue": "10",
            "description": "<p>页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>总数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>下面数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "starNum",
            "description": "<p>难度星级数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>图片</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200 OK\n{\n  \"total\": 12,\n  \"data\": [\n    {\n      \"id\": 48,\n      \"title\": \"功能性训练的优势\",\n      \"image\": \"http://×××××/uU2k4Jt9Sg.jpg\",\n      \"starName\": \"中级难度\"\n    },\n    {\n      \"id\": 47,\n      \"image\": \"http://×××××/uU2k4Jt9Sg.jpg\",\n      \"title\": \"FMS测试\",\n      \"starName\": \"高级难度\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>未找到参数或参数值非法</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\": \"未找到参数或参数值非法\"\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\":\"数据加载错误，请重试\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/home/01-home.coffee",
    "groupTitle": "Home"
  }
] });
