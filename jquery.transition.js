(function($) {
  let transitionSettings = {};

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

    const settings = $.extend(true, {}, defaults, options);

    return this.each(function() {
      const $element = $(this);
      const elementId = this.id || 'element-' + Math.random().toString(36).substr(2, 9);
      
      if (!this.id) {
        this.id = elementId;
      }
      
      transitionSettings[elementId] = settings;
      
      $element.css({
        'transition-property': 'all',
        'transition-timing-function': settings.enter.timing,
        'transition-duration': settings.enter.duration + 'ms'
      });
    });
  };

  $.fn.transitionShow = function() {
    return this.each(function() {
      const $element = $(this);
      const settings = transitionSettings[this.id];
      
      if (!settings) return;
      
      $element.css({
        'transition-timing-function': settings.enter.timing,
        'transition-duration': settings.enter.duration + 'ms',
        'display': 'block'
      });
      
      $element
        .removeClass(settings.leave.end)
        .removeClass(settings.enter.end)
        .addClass(settings.enter.start);
      
      this.offsetHeight;

      requestAnimationFrame(() => {
        $element
          .removeClass(settings.enter.start)
          .addClass(settings.enter.end);
      });
    });
  };

  $.fn.transitionHide = function() {
    return this.each(function() {
      const $element = $(this);
      const settings = transitionSettings[this.id];
      
      if (!settings) return;
      
      $element.css({
        'transition-timing-function': settings.leave.timing,
        'transition-duration': settings.leave.duration + 'ms'
      });
      
      $element
        .removeClass(settings.enter.end)
        .removeClass(settings.leave.end)
        .addClass(settings.leave.start);
      
      this.offsetHeight;

      requestAnimationFrame(() => {
        $element
          .removeClass(settings.leave.start)
          .addClass(settings.leave.end);
      });

      setTimeout(() => {
        $element.css('display', 'none');
      }, settings.leave.duration);
    });
  };
})(jQuery);
