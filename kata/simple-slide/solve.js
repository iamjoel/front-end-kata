(function (global) {
  var template = `
    <div class="slider" style="overflow:hidden;position:relative;">
      <div class="slider__imgs" style="position:absolute;left:0;top:0;width:99999999px">
      </div>
    </div>
  `
	function Main($el, opts) {
    this.opts = Object.assign({}, opts)
    this.curr = 1
    this.total = this.opts.data.length
    
    this.opts.width = this.opts.width ? this.opts.width : $el.width()
    this.opts.height = this.opts.height ? this.opts.height : $el.height()
    var $slider = makeSlider(this.opts.data)

    $slider
      .width($el.width())
      .height($el.height())

    $slider.find('.slider__img')
      .width(this.opts.width)
      .height(this.opts.height)

    this.$sliderImgs = $slider.find('.slider__imgs')
    $el.html($slider)
  }

  Main.prototype.prev = function() {
    if(this.curr !== 1) {
      this.curr--
      this.$sliderImgs.animate({
        left: `+=${this.opts.width}`
      })
    }
  }

  Main.prototype.next = function() {
    if(this.curr !== this.total) {
      this.curr++
      this.$sliderImgs.animate({
        left: `-=${this.opts.width}`
      })
    }
  }

  function makeSlider(data) {
    var $slider = $(template)
    var itemsHTML = data.map(item => {
      return `<img src="${item}" class="slider__img" style="float:left;"/>`
    }).join('')
    $slider.find('.slider__imgs').html(itemsHTML)
    return $slider
  }

  $.fn.slider = function (opts) {
    return new Main($(this), opts)
  }
})(this);