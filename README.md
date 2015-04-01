# bone-act-uglify
> bone的uglify处理器

### 安装及使用

通过npm安装

```sh
$ npm install bone-act-uglify 
```

安装后在`bonefile.js`文件内通过`act()`加载

```js
var bone = require('bone');
var uglify = require('bone-act-uglify');

bone.dest('dist')
	.src('~/src/main.js')
	.act(uglify);
```

传递参数的调用方法

```js
bone.dest('dist')
	.src('~/src/main.js')
	.act(uglify({
		ieCompat: false
	}));
```

bone-act-uglify是将uglify编译器包装成bone可用的处理器，参数查询请参考[uglify](https://github.com/uglify/uglify.js)

### 其他

处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)