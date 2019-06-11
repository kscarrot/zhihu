# react zhihu page
    基于react函数式组件和hooks实现的对zhihu首页的复制

## 几个问题
    1.Portal组件中 hooks和 class组件并不完全等效,useEffect是等待渲染完成后再延迟调用的,画面会闪烁
    2.文本截断比我预想中要复杂,只是做了简单的字符串截取.实际上富文本是带标签的字符串,不能直接截取
      观察页面也能发现截取的并不是定长.猜想是把字符串解析成dom树然后计算长度,再做对应截取
    3.TopstoryItem内容不同显示也不同,感觉属于重复劳动,偷懒没做,包括Popover和Commet
    4.zhihu首屏来自ssr,mock.json来自下拉刷新

> 所有图标页面样式以及内容版权都归知乎所有,本项目仅供学习交流用
