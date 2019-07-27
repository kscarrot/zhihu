# react zhihu page
    基于react函数式组件和hooks实现的对zhihu首页的复制

## 使用
```
npm run dev
```
svg转换成react组件了,图片从源站直接获取,因为没有token会被图床挡,图片不能显示完整

## 几个问题
    1.Portal组件中 hooks和 class组件并不完全等效,useEffect是等待渲染完成后再延迟调用的,画面会闪烁
    2.文本截断比我预想中要复杂,只是做了简单的字符串截取.实际上富文本是带标签的字符串,不能直接截取
      观察页面也能发现截取的并不是定长.猜想是把字符串解析成dom树然后计算长度,再做对应截取
    3.TopstoryItem内容不同显示也不同,感觉属于重复劳动,偷懒没做,包括Popover和Commet
    4.zhihu首屏来自ssr,mock.json来自下拉刷新
    5.有class-names 和 types没用  本以为是个小玩具没上  然后  :(
    6.css因为要复习相关知识点所以拆开了,实际上引入zhihu整个的css import一下就几乎不用考虑css的问题了,所有的变化都是 class change

## plan
    1.改Typescript
    2.组件内通用的状态控制抽成hooks
    3.完善webpack的配置

> 所有图标页面样式以及内容版权都归知乎所有,本项目仅供学习交流用
