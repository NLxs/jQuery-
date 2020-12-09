// const api = jQuery('.test'); // 不返回元素, 返回api对象
// api.addClass('red'); // 遍历所有刚才获取的元素, 添加.red

// const api2 = jQuery('.test2');
// api2.addClass('red').addClass('pink') //链式操作

// const x1 = jQuery('.test').find('.child')
// console.log(x1);

// jQuery('.test')
//   .find('.child')
//   .addClass('.red')
//   .addClass('.blue')
//   .addClass('green')
//   .end()
//   .addClass('yellow')

const x = jQuery('.test');

// x.each((div)=>console.log(div))
x.parent().print();

