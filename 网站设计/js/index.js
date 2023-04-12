var slideIndex=0;//幻灯片的索引
showSlides();
//播放幻灯片
function showSlides()
{
    //获取幻灯片元素
    var slides=document.getElementsByClassName('mySlides');
    //获取点元素
    var dots=document.getElementsByClassName('dot');

    //遍历所有的幻灯片元素，并使它们的display属性为none
    for(var i=0;i<slides.length;i++)
    {
        slides[i].style.display='none';
    }

    // 不知道为什么slideIndex要先自加才能后续不报错！
    slideIndex++;
    // 如果索引大于幻灯片数，从头开始播放幻灯片
    if(slideIndex>slides.length)
    {
        slideIndex=1;
    }
    //遍历所有的dot元素，并移除active类
    for(var i=0;i<dots.length;i++)
    {
        dots[i].classList.remove('active');
    }

    slides[slideIndex-1].style.display='block';
    dots[slideIndex-1].classList.add('active');
    setTimeout(showSlides,3000);
}


//实现点击dot播放对应的幻灯片
function currentSlide(index)
{
    //获取幻灯片元素
    var slides=document.getElementsByClassName('mySlides');
    //获取点元素
    var dots=document.getElementsByClassName('dot');

    //遍历所有的幻灯片元素，并使它们的display属性为none
    for(var i=0;i<slides.length;i++)
    {
        slides[i].style.display='none';
    }
    //遍历所有的dot元素，并移除active类
    for(var i=0;i<dots.length;i++)
    {
        dots[i].classList.remove('active');
    }
    slideIndex=index;
    slides[slideIndex].style.display='block';
    dots[slideIndex].classList.add("active");
}

//点击下一张 上一张切换幻灯片  失败了
// function plusSlides(n)
// {
//     //传进来的参数为-1 或者 1

//     // 获取所有的幻灯片元素
//     var slides=document.getElementsByClassName("mySlides");
//     //获取点元素
//     var dots=document.getElementsByClassName('dot');
//     console.log("当前索引为："+slideIndex);
//     //下一张照片的索引
//     var nextindex=slideIndex+n;
//     if(nextindex>slides.length)
//     {
//         // 如果下一张照片的索引大于幻灯片的个数时，
//         nextindex=1;
//     }
//     else if(nextindex==0)
//     {
        
//         nextindex=slides.length;
//     }
//     console.log("经过条件判断之后索引为:"+nextindex);
//     slides[nextindex-1].style.display='block';
//     dots[nextindex-1].classList.add("active");
// }


// 手风琴功能
var acc=document.getElementsByClassName('accordion');
for(var i=0;i<acc.length;i++)
{
    //给每个按钮添加函数
    acc[i].onclick=function()
    {
        //toggle()  若有该类则删除，没有则添加该类
        this.classList.toggle("active");
        // nextElementSibling只返回元素节点之后的兄弟元素节点（不包括文本节点、注释节点）
        var panel=this.nextElementSibling;

        //不懂这个if条件
        if(panel.style.maxHeight)
        {
            panel.style.maxHeight=null;
        }
        else
        {
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    }
}


//如何实现浏览器滚动后显示 悬浮窗（回到顶部）？

// 通过判断window.scrollY   0在顶部。即没有滚动  >0滚动了
// window.onload=function()
// {
//     // 浏览器加载的时候就一直调用该函数，每隔0.3s调用一次
//    setInterval(function(){
//         var scrollY=window.scrollY;
//         var return_top=document.getElementById("return-top");
//         var header=document.getElementById("top");
//         if(scrollY==0)
//         {
//             return_top.style.display='none';
//             header.classList.remove("nav-fixed");
//         }
//         else if(scrollY>0)
//         {
//             return_top.style.display='block';
//             header.classList.add("nav-fixed");
//         }
//    },300)
// }

// window.onscroll事件是在窗口滚动时触发
window.onscroll=function()
{
    var top=document.getElementById("top");
    var return_top=document.getElementById("return-top");
    let high=document.documentElement.scrollTop;
    
    if(high>100)
    {
        return_top.style.display='block';
        top.classList.add("nav-fixed");
    }
    else if(high==0)
    {
        return_top.style.display='none';
        top.classList.remove("nav-fixed");
    }

}
// 模拟滚动效果回到页面顶部
function pageScroll()
{
    // scrollBy() 会使元素每隔一秒从当前的滚动条位置向下滚动10px，这是一个设置相对滚动条位置的方法。
    window.scrollBy(0,-300);
    // 每隔0.1s调用一次该函数
    var scrolldelay=setTimeout(pageScroll,100);
    var high=document.documentElement.scrollTop;
    console.log(high);
    if(high==0)
    {
        clearTimeout(scrolldelay);
    }
}



