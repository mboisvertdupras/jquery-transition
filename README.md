# jQuery Transition Plugin

A lightweight jQuery plugin for smooth CSS transitions with customizable enter and leave animations.

## Features

- Smooth fade-in/fade-out transitions
- Customizable timing, duration, and CSS classes
- Chainable jQuery methods
- Uses `requestAnimationFrame` for optimal performance
- Compatible with CSS frameworks like Tailwind CSS

## Usage

### Basic Usage

```javascript
// Initialize with default settings
$('.my-element').transition();

// Show element with fade-in animation
$('.my-element').show();

// Hide element with fade-out animation  
$('.my-element').hide();
```

### Custom Configuration

```javascript
$('.my-element').transition({
  enter: {
    start: 'opacity-0 scale-95',
    end: 'opacity-100 scale-100',
    duration: 500,
    timing: 'ease-out'
  },
  leave: {
    start: 'opacity-100 scale-100',
    end: 'opacity-0 scale-95', 
    duration: 300,
    timing: 'ease-in'
  }
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enter.start` | String | `'opacity-0'` | CSS classes applied at animation start (enter) |
| `enter.end` | String | `'opacity-100'` | CSS classes applied at animation end (enter) |
| `enter.duration` | Number | `300` | Animation duration in milliseconds (enter) |
| `enter.timing` | String | `'ease-out'` | CSS timing function (enter) |
| `leave.start` | String | `'opacity-100'` | CSS classes applied at animation start (leave) |
| `leave.end` | String | `'opacity-0'` | CSS classes applied at animation end (leave) |
| `leave.duration` | Number | `300` | Animation duration in milliseconds (leave) |
| `leave.timing` | String | `'ease-in'` | CSS timing function (leave) |

## Requirements

- jQuery 1.7+
- Modern browser with `requestAnimationFrame` support

## Installation

### npm

```bash
npm install @tamarak/jquery-transition
```

Then include the plugin after jQuery:

```javascript
// If using a module bundler
import 'jquery-transition';

// Or require in Node.js
require('jquery-transition');
```

### CDN / Direct Download

Include the plugin after jQuery:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="jquery.transition.js"></script>
```

## License

MIT License
