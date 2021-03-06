
# `<Box />`

Use the `<Box />` component to control width, margin, padding, and color.

```jsx
// 50% width
<Box width={1/2} />

// Padding of `theme.space[3]` (16px)
<Box p={3} />

// Margin of `theme.space[2]` (8px)
<Box m={2} />

// Color blue from the theme's color palette
<Box color='blue' />

// Background color green from the theme's color palette
<Box bg='green' />
```

Prop | Type | Description
---|---|---
width | number, string, or array | Sets the width of the element
color | string | Sets color based on the theme's color palette
bg | string | Sets background-color based on the theme's color palette
m | number, string, or array | Sets margin based on the `theme.space` scale
mt | number, string, or array | Sets margin-top
mr | number, string, or array | Sets margin-right
mb | number, string, or array | Sets margin-bottom
ml | number, string, or array | Sets margin-left
mx | number, string, or array | Sets margin-left and margin-right
my | number, string, or array | Sets margin-top and margin-bottom
p | number, string, or array | Sets padding based on the `theme.space` scale
pt | number, string, or array | Sets padding-top
pr | number, string, or array | Sets padding-right
pb | number, string, or array | Sets padding-bottom
pl | number, string, or array | Sets padding-left
px | number, string, or array | Sets padding-left and padding-right
py | number, string, or array | Sets padding-top and padding-bottom


## Responsive Widths

The `width` prop accepts an array value to set different widths at different breakpoints with a mobile-first approach.

```jsx
<Box
  width={[
    1,    // Sets width 100% at the smallest breakpoint
    1/2,  // Sets width 50% at the next breakpoint
    1/4,  // Sets width 25% at the next breakpoint
  ]}
/>
```

See [styled-system](https://github.com/jxnblk/styled-system) for more documentation.

