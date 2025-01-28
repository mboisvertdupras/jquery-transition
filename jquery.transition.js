(function($) {
  $.fn.transition = function(options) {
    const defaults = {
      enter: {
        start: 'opacity-0',
        end: 'opacity-100',
        duration: 300,
        timing: 'ease-out'
      },
      leave: {
        start: 'opacity-100', 
        end: 'opacity-0',
        duration: 300,
        timing: 'ease-in'
      }
    };

    // Merge defaults with user options
    const settings = $.extend(true, {}, defaults, options);

    return this.each(function() {
      const $element = $(this);
      
      // Add transition CSS
      $element.css({
        'transition-property': 'all',
        'transition-timing-function': settings.enter.timing,
        'transition-duration': settings.enter.duration + 'ms'
      });

      // Show method
      $element.show = function() {
        $element
          .removeClass(settings.leave.end)
          .addClass(settings.enter.start)
          .show()
          .offset(); // Force reflow

        requestAnimationFrame(() => {
          $element
            .removeClass(settings.enter.start)
            .addClass(settings.enter.end);
        });
        
        return this;
      };

      // Hide method
      $element.hide = function() {
        $element
          .removeClass(settings.enter.end)
          .addClass(settings.leave.start)
          .offset(); // Force reflow

        requestAnimationFrame(() => {
          $element
            .removeClass(settings.leave.start)
            .addClass(settings.leave.end);
        });

        // Remove element after animation
        setTimeout(() => {
          $element.css('display', 'none');
        }, settings.leave.duration);
        
        return this;
      };
    });
  };
})(jQuery);
