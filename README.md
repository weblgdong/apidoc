官网 [http://apidocjs.com/](http://apidocjs.com/)

预览 [http://apidocjs.com/example/](http://apidocjs.com/example/)

temp  [https://github.com/apidoc/apidoc](https://github.com/apidoc/apidoc)

### 注意事项
#### apidoc测边栏显示中文
如果在apiGroup用中文,导航的测边栏会显示乱码。   
解决方法：   
修改 api_group.js    
找到apidoc npm目录下的 workers/api_group.js     
默认在 C:\Users\Administrator\AppData\Roaming\npm\node_modules\apidoc\node_modules\apidoc-core\lib\workers    
83行 注释和删除replace(/[^\w]/g, '_');       
```js
 group = group//.replace(/[^\w]/g, '_');
```
