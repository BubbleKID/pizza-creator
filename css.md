# CSS

## What is CSS

- Cascading Style Sheets (CSS) is a style sheet language used for describing the *look* and *formatting* of a document written in a markup language.

- CSS describes *how HTML elements are to be displayed on screen, paper, or in other media*.

## How does browser actually work?

DOM Tree

## External CSS link

```html
<head>
  <link rel="stylesheet" type="text/css" href="./style.css" />
</head>
```

[link](https://www.w3schools.com/tags/tag_link.asp)

The ```<link>``` tag defines a link between a document and an external resource.

```html
<link rel="icon" href="favicon.ico">
<link rel="preload" href="myFont.woff2" as="font" type="font/woff2">
```

## Inline style sheet

```html
<style>
  h1 {
    display: none;
  }
</style>
```

## Inline style

```html
<h1 style="display: none">Bad boy</h1>
```

## DevTools

![inline](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/imgs/elements-panel.png)

## DevTools

- 在 Elements 面板中检查和实时编辑 DOM 树中的任何元素。
- 在 Styles 窗格中查看和更改应用到任何选定元素的 CSS 规则。
- 在 Computed 窗格中查看和修改选定元素的框模型。

## Style rules

Web 浏览器将 CSS 规则应用于文档以影响它们的显示方式。一个 CSS 规则由以下组成：

- 一个 *选择器*，它选择元素，这（些）元素是你想应用这些最新的属性值于其上的元素。
- 一组 *属性* ，属性的值更新了 HTML 的内容的显示方式。

## Selectors

- 简单选择器（Simple selectors）：通过元素类型、class 或 id 匹配一个或多个元素。
- 属性选择器（Attribute selectors）：通过 属性 / 属性值 匹配一个或多个元素。

## Selectors

- 伪类（Pseudo-classes）：匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素，或当前被选中或未选中的复选框，或元素是DOM树中一父节点的第一个子节点。

```css
a:hover {}
a:focus {}
div:first-child {}
div:nth-child(2) {}
div:nth-child(odd) {}
div:last-child {}
```

*child* 和 *type* 的区别

## Selector

- 伪元素（Pseudo-elements）:匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字，或者某个元素之前生成的内容。 

```css
div::after {}
div::before {}
```

## CSS Box modal

![inline](https://i0.wp.com/complete-concrete-concise.com/wp-content/uploads/2018/04/17-css-flow.png?ssl=1)

## Selectors

- 组合器（Combinators）：这里不仅仅是选择器本身，还有以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，你可以只选择div的直系子节点的段落，或者直接跟在headings后面的段落。
- 多重选择器（Multiple selectors）：这些也不是单独的选择器；这个思路是将以逗号分隔开的多个选择器放在一个CSS规则下面， 以将一组声明应用于由这些选择器选择的所有元素。

## Units

- 像素 (px) 是一种绝对单位（absolute units）， 因为无论其他相关的设置怎么变化，像素指定的值是不会变化的。其他的绝对单位如下：
- mm, cm, in
- pt, pc: 点（Points (1/72 of an inch)）， 十二点活字（ picas (12 points.)）

## Units 

- vw, vh
- %
- 0
- auto

## Units

*em*
1em与当前元素的字体大小相同（更具体地说，一个大写字母M的宽度）。CSS样式被应用之前，浏览器给网页设置的默认基础字体大小是16像素，这意味着对一个元素来说1em的计算值默认为16像素。但是要小心—em单位是会继承父元素的字体大小，所以如果在父元素上设置了不同的字体大小，em的像素值就会变得复杂。

## Units

*rem*
REM（root em）和em以同样的方式工作，但它总是等于默认基础字体大小的尺寸；继承的字体大小将不起作用，所以这听起来像一个比em更好的选择

## Well used properties

- width and height (min- and max- )
- margin and padding
- font
- border
- background and color
- text-align
- display

## Less used properties

- visibility
- text-shadow
- box-shadow
- outline
- cursor
- text-decoration
- transform
- overflow

## Other properties

- word-wrap
- word-break
- content

## Normalize

[Normalize.css](https://github.com/necolas/normalize.css/) makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

## Style a button

```css
button {
  padding: 0;
  outline: 0;
  border: 0;
  background: transparent;
}
```

## Block, Inline, Inline-block

![inline](https://i0.wp.com/complete-concrete-concise.com/wp-content/uploads/2018/04/17-css-flow.png?ssl=1)

## Block, Inline, Inline-block

![inline](https://thecodingzone.com/wp-content/uploads/2017/11/CSS-Display-Property.png)

height, width, padding, margin

## Position

![inline](https://i0.wp.com/complete-concrete-concise.com/wp-content/uploads/2018/04/17-css-flow.png?ssl=1)

## Position

- static, 该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。*此时 top, right, bottom, left 和 z-index 属性无效*。
- relative, 该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下*空白*）

## Position

- absolute, *不为元素预留空间*，通过指定元素相对于*最近的非 static 定位祖先元素的偏移，来确定元素位置*。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
- fixed, *不为元素预留空间*，而是通过指定元素相对于*屏幕视口（viewport）的位置来指定元素位置*。元素的位置在屏幕滚动时不会改变。

## Position

[demo](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

## Position

- top
- bottom
- right
- left
- z-index

## Styling from top to bottom

```html
<div class="container">
  <div class="big">Big width</div>
  <div class="small">Small width</div>
</div>
```

```css
.container {
  width: 500px;
}
.container > .big {
  width: 80%;
}

.container > .small {
  width: 20%;
}
```

## Flex

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Grid

[A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Responsive

![inline](http://image.slidesharecdn.com/responsivewebdesignworkshopantoniodepasquale-140416133209-phpapp02/95/responsive-webdesign-38-638.jpg?cb=1397675450)

[Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

## CSS PreProcessor

- SCSS
- *SASS*
- LESS
