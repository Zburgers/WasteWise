# Previous Themes

This document outlines some of the themes that were previously used in the application.

## Emoji Background Theme

This theme implemented a dynamic background using emojis that appeared to float across the screen. It was applied application-wide.

**Implementation Details:**

- **`.emojis-background` class:** This class was applied to the main container element to set the background. It utilized the `background-image` CSS property to create a repeating pattern of emojis. The specific emojis and their arrangement were defined within the `background-image` value.
- **`@keyframes floatEmojisBackground`:** This keyframes rule defined an animation that caused the background image to move subtly, creating the floating effect. The animation typically involved translating the background position over a period of time. This keyframes rule was then referenced within the `.emojis-background` class using the `animation` CSS property.

This theme provided a visually engaging, albeit potentially performance-intensive, background for the application. It was removed for a simpler, more performant background.