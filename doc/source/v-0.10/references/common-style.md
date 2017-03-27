---
title: Common Style
type: references
order: 1.6
version: 0.10
---

# Common Style

All of weex tags share some common style rules

## Box Model

![box model](./images/css-boxmodel.png)

Weex box model based on the CSS box model, all of weex elements can be considered as boxes.  The term "box model" is used when talking about design and layout. The box model is essentially a box that wraps around every HTML element. It consists of margins, borders, paddings, and the actual content.

you can use the definition below in weex box model.

- `width`: `length` type, default value `0`
- `height`: `length` type, default value `0`
- `padding`: `length` type, default value `0`, (space around content, between element content and the element border)
  - `padding-left`: `length` type, default value `0`
  - `padding-right`: `length` type, default value `0`
  - `padding-top`: `length` type, default value `0`
  - `padding-bottom`: `length` type, default value `0`
- `margin`: `length` type, default value `0`, (space around elements, outside the border)
  - `margin-left`: `length` type, default value `0`
  - `margin-right`: `length` type, default value `0`
  - `margin-top`: `length` type, default value `0`
  - `margin-bottom`: `length` type, default value `0`
- `border`
  - `border-style`: values `solid` | `dashed` | `dotted`, default value `solid`
    - `border-left-style`: values `solid` | `dashed` | `dotted`, default value `solid`
    - `border-top-style`: values `solid` | `dashed` | `dotted`, default value `solid`
    - `border-right-style`: values `solid` | `dashed` | `dotted`, default value `solid`
    - `border-bottom-style`: values `solid` | `dashed` | `dotted`, default value `solid`
  - `border-width`: `length` type, non-negative, default value `0`
    **DO NOT** use `border-width:1`. There is a default viewport `<viewport width="750">`, if the actual width of a device is 720px, then `border-width:1` will be `border-width:0.96`. As weex **do not** support sub-pixel, this border would not be rendered.
    - `border-left-width`: `length` type, non-negative, default value `0`
    - `border-top-width`: `length` type, non-negative, default value `0`
    - `border-right-width`: `length` type, non-negative, default value `0`
    - `border-bottom-width`: `length` type, non-negative, default value `0`
  - `border-color`: `color` type, default value `#000000`
    - `border-left-color`: `color` type, default value `#000000`
    - `border-top-color`: `color` type, default value `#000000`
    - `border-right-color`: `color` type, default value `#000000`
    - `border-bottom-color`: `color` type, default value `#000000`
  - `border-radius`: `length` type, default value `0`, (rounded borders to elements , default value is 0 meaning right angle )

  Although the the default overflow style is `overflow:hidden` in android, a view will not be clipped by its parents' `border-radius`. This only happens on Android, it works fine on iOS.
    - `border-bottom-left-radius`: `length` type, non-negative, default value `0`
    - `border-bottom-right-radius`: `length` type, non-negative, default value `0`
    - `border-top-left-radius`: `length` type, non-negative, default value `0`
    - `border-top-right-radius`: `length` type, non-negative, default value `0`

Notes: The rule of border-radius for a specific corner such as `border-top-left-radius` is not currently supported for component `<image>` and `<text>`.

Weex box model uses `border-box` as the default value of `box-sizing`, meaning the width and height properties includes content, padding and border, but not the margin.

example:

```html
<template>
  <div>
    <image src="..." style="width: 400; height: 200; margin-left: 20;"></image>
  </div>
</template>
```

## Flexbox

Weex box style model based on the CSS flexbox, ensures that elements behave predictably and the page layout can accommodates to different screen sizes and different display devices.

Flexbox consists of flex containers and flex items. If a weex element can containing other elements, it is a flex container.

Notice that the old version of flexbox specification has differences with the new ones, such as whether or not to support wrapping. This is described at w3c's working drafts, and you should notice the differences among them. Also notice that the old version is only supported below the 4.4 version of android.

### Flex container

Flexbox is the default and only style model in Weex, so you don't have to add `display: flex;` in a container.

- `flex-direction`: values `row` | `column`, default value `column`

The flex-direction property specifies the direction of the flexible items inside the flex container. Default value is `column` (top-to-bottom).

- `justify-content`: values `flex-start` | `flex-end` | `center` | `space-between`, default value `flex-start`

The justify-content property horizontally aligns the flexible container's items when the items do not use all available space on the main-axis. Default value is `flex-start` meaning the flex items are positioned at the beginning of the container. `flex-end` means the items are positioned at the end of the container. `center` means the items are positioned at the center of the container. `space-between` means the items are positioned with space between the lines.

![justify-content](./images/css-flexbox-justify.svg)

- `align-items`: values `stretch` | `flex-start` | `center` | `flex-end`, default value `stretch`

The align-items property vertically aligns the flexible container's items when the items do not use all available space on the cross-axis. Default value is `stretch` meaning the items are stretched to fit the container. `flex-start` means the items are positioned at the top of the container; `flex-end` means the items are positioned at the bottom of the container; `center` means items are positioned at the center of the container (vertically).

![align-items](./images/css-flexbox-align.jpg)

### Flex item

- `flex`: `number` type, default value `0`

the flex property specifies the length of the flex item, relative to the rest of the flex items inside the same container.  If all of the flex items set `flex: 1`, they will have equal width or height on direction of flex container's `flex-direction`. If there are two flex items, with one setting `flex: 1`, and the other setting `flex: 2`, the first one will take 1/3 container space, and the second one will take 2/3 container space. If all of flex items don't set `flex`, they will be aligned depending on the container's `justify-content` property.


## Examples

a list of images with equal scales align at the vertical axis:

```html
<template>
  <div style="width: 300; height: 100;">
    <image src="..." style="flex: 1;"></image>
    <image src="..." style="flex: 1;"></image>
    <image src="..." style="flex: 1;"></image>
  </div>
</template>
```

a image with fixed width aligns with a stretched text:

```html
<template>
  <div style="width: 300; height: 100;">
    <image src="..." style="width: 100; height: 100;"></image>
    <text style="flex: 1;">...</text>
  </div>
</template>
```

mixed direction alignment:

```html
<template>
  <div style="width: 100;">
    <image src="..." style="width: 100; height: 100;"></image>
    <div style="flex-direction: row;">
      <text style="flex: 2; font-size: 32;">title</text>
      <text style="flex: 1; font-size: 16;">$100</text>
    </div>
  </div>
</template>
```

one text align left , the other float right:

![one text align left , the other float right](./images/css-flexbox-sample.png)

```html
<template>
<div style="flex-direction: row; justify-content: space-between;">
   <text>WEEX</text>
   <text>2016-05-08</text>
</div>
</template>
```

## Position

we can use properties below to control placement of weex tag

- `position`: values `relative` | `absolute` | `fixed` | `sticky`, default value `relative`

`relative` means the item is positioned relative to its normal position. `absolute` means the item is positioned relative to its container. `fixed` keeps the elements position fixed when the page is scrolling. `sticky` keeps elements positioned inside the viewport as "stuck" at the top or "relative" at its original place depending on whether does it about to scroll out of the view.

- `top`: `number` type, default value `0`, upward offset value
- `bottom`: `number` type, default value `0`, downward offset value
- `left`: `number` type, default value `0`, leftward offset value
- `right`: `number` type, default value `0`, rightward offset value

### Examples

```html
<template>
  <div style="flex-direction: column;">
    <div style="height: 3000;">
      <image src="..." style="top: 50; left: 50; ..."></image>
    </div>
    <div style="height: 3000;">
      <image src="..." style="position: sticky; ..."></image>
    </div>
    <div style="height: 3000;">
      <image src="..." style="position: absolute; top: 50; left: 50; ..."></image>
    </div>
  </div>
</template>
```

## Other Common Style

- `opacity`
- `background-color`

## Type of Style Value

- `length` type
- `number` type
- `color` type (*[The list of color keywords.](./color-names.html)*)
- enumerated type

## Simple Step

These up-to-down steps may help you to plan the whole style of weex pages.

1. overall style: divide the whole page to different parts
2. flex alignment: align boxes in every part of page
3. position box: place box, set offset
4. element specific style: set styles for certain element if needed
