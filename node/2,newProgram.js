/**
 * Created by Administrator on 2017/7/31 0031.
 */
// 一，NodeJs里新增的语法或者一些新的思想
// （1）NodeJs采用模块化结构，按照commonJs规范定义和使用模块，
// 模块与文件是一一对应的，即一个js文件就是一个模块，可以根据项目的实际需求在某个模块中引用其他模块

// （2）模块之间是相互独立的，一个模块就是一个作用域（相当于函数作用域），
// 两个模块内可以有相同的变量名，互不冲突

// （3）模块间的关联通信是通过require()
//require('指定要加载的模块路径，script')，加载的时候可以省略模块的.js后缀

// (4)全局的声明global 以及module.exports接口

// 二，模块之间相互变量传递的方式
// 第一种方式：
// （1）在firs.js里面定义变量a=100，然后通过module.exports.newA=a抛出该变量
// (2)在second.js里面通过require('./first.js')引入first.js,并保存为一个对象mod下面，
// first.js里面需要传递的变量就可以通过mod.newA来获取
// 第二种方式（避免使用）：
// （1）first.js通过global.a=200定义一个变量
// （2）在second.js里面通过require引入first.js，然后可以直接使用变量a
//（3）需要注意，这种情况下second.js里新定义的a变量，会影响global.a变量的值