!(function (e) {
  e(window).on("load", function () {
    e(".preloader").fadeOut(),
      e(".tournament-style2").each(function () {
        var s = e(this),
          t = s.find(".tournament-bottom").height(),
          n = s.find(".tournament-img").height();
        s.css({
          "--toggle-height": t + "px",
          "--img-height": n + "px",
        }).addClass("toggle-active");
      });
  }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (s) {
          s.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.vsmobilemenu = function (s) {
      var t = e.extend(
        {
          menuToggleBtn: ".vs-menu-toggle",
          bodyToggleClass: "vs-body-visible",
          subMenuClass: "vs-submenu",
          subMenuParent: "vs-item-has-children",
          subMenuParentToggle: "vs-active",
          meanExpandClass: "vs-mean-expand",
          appendElement: '<span class="vs-mean-expand"></span>',
          subMenuToggleClass: "vs-open",
          toggleSpeed: 400,
        },
        s
      );
      return this.each(function () {
        var s = e(this);
        function n() {
          s.toggleClass(t.bodyToggleClass);
          var n = "." + t.subMenuClass;
          e(n).each(function () {
            e(this).hasClass(t.subMenuToggleClass) &&
              (e(this).removeClass(t.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(t.subMenuParentToggle));
          });
        }
        s.find("li").each(function () {
          var s = e(this).find("ul");
          s.addClass(t.subMenuClass),
            s.css("display", "none"),
            s.parent().addClass(t.subMenuParent),
            s.prev("a").append(t.appendElement),
            s.next("a").append(t.appendElement);
        });
        var a = "." + t.meanExpandClass;
        e(a).each(function () {
          e(this).on("click", function (s) {
            var n;
            s.preventDefault(),
              (n = e(this).parent()),
              e(n).next("ul").length > 0
                ? (e(n).parent().toggleClass(t.subMenuParentToggle),
                  e(n).next("ul").slideToggle(t.toggleSpeed),
                  e(n).next("ul").toggleClass(t.subMenuToggleClass))
                : e(n).prev("ul").length > 0 &&
                  (e(n).parent().toggleClass(t.subMenuParentToggle),
                  e(n).prev("ul").slideToggle(t.toggleSpeed),
                  e(n).prev("ul").toggleClass(t.subMenuToggleClass));
          });
        }),
          e(t.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              n();
            });
          }),
          s.on("click", function (e) {
            e.stopPropagation(), n();
          }),
          s.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".vs-menu-wrapper").vsmobilemenu();
  var s = "",
    t = ".scrollToTop";
  e(window).on("scroll", function () {
    var n, a, o, i, r;
    (n = e(".sticky-active")),
      (a = "active"),
      (o = "will-sticky"),
      (i = e(window).scrollTop()),
      (r = n.css("height")),
      n.parent().css("min-height", r),
      e(window).scrollTop() > 100
        ? (n.parent().addClass(o), i > s ? n.addClass(a) : n.addClass(a))
        : (n.parent().css("min-height", "").removeClass(o), n.addClass(a)),
      (s = i),
      e(this).scrollTop() > 500
        ? e(t).addClass("show")
        : e(t).removeClass("show");
  }),
    e(t).each(function () {
      e(this).on("click", function (t) {
        return (
          t.preventDefault(),
          e("html, body").animate({ scrollTop: 0 }, s / 3),
          !1
        );
      });
    }),
    e("[data-bg-src]").length > 0 &&
      e("[data-bg-src]").each(function () {
        var s = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + s + ")"),
          e(this).removeAttr("data-bg-src").addClass("background-image");
      }),
    e(".vs-hero-carousel").each(function () {
      var s = e(this);
      function t(e) {
        return s.data(e);
      }
      s.layerSlider({
        allowRestartOnResize: !0,
        maxRatio: t("maxratio") ? t("maxratio") : 1,
        type: t("slidertype") ? t("slidertype") : "responsive",
        pauseOnHover: !!t("pauseonhover"),
        navPrevNext: !!t("navprevnext"),
        hoverPrevNext: !!t("hoverprevnext"),
        hoverBottomNav: !!t("hoverbottomnav"),
        navStartStop: !!t("navstartstop"),
        navButtons: !!t("navbuttons"),
        loop: !1 !== t("loop"),
        autostart: !!t("autostart"),
        height: t("height") ? t("height") : 1080,
        responsiveUnder: t("responsiveunder") ? t("responsiveunder") : 1220,
        layersContainer: t("container") ? t("container") : 1220,
        showCircleTimer: !!t("showcircletimer"),
        skinsPath: "layerslider/skins/",
        thumbnailNavigation: !1 !== t("thumbnailnavigation"),
      });
    }),
    e(".vs-carousel").each(function () {
      var s = e(this);
      function t(e) {
        return s.data(e);
      }
      var n =
          '<button type="button" class="slick-prev"><i class="' +
          t("prev-arrow") +
          '"></i></button>',
        a =
          '<button type="button" class="slick-next"><i class="' +
          t("next-arrow") +
          '"></i></button>';
      e("[data-slick-next]").each(function () {
        e(this).on("click", function (s) {
          s.preventDefault(), e(e(this).data("slick-next")).slick("slickNext");
        });
      }),
        e("[data-slick-prev]").each(function () {
          e(this).on("click", function (s) {
            s.preventDefault(),
              e(e(this).data("slick-prev")).slick("slickPrev");
          });
        }),
        1 == t("arrows") &&
          (s.closest(".arrow-wrap").length ||
            s.closest(".container").parent().addClass("arrow-wrap")),
        s.slick({
          dots: !!t("dots"),
          fade: !!t("fade"),
          arrows: !!t("arrows"),
          speed: t("speed") ? t("speed") : 1e3,
          asNavFor: !!t("asnavfor") && t("asnavfor"),
          autoplay: (t("autoplay"), !1),
          infinite: 0 != t("infinite"),
          slidesToShow: t("slide-show") ? t("slide-show") : 1,
          adaptiveHeight: !!t("adaptive-height"),
          centerMode: !!t("center-mode"),
          autoplaySpeed: t("autoplay-speed") ? t("autoplay-speed") : 8e3,
          centerPadding: t("center-padding") ? t("center-padding") : "0",
          focusOnSelect: 0 != t("focuson-select"),
          pauseOnFocus: !!t("pauseon-focus"),
          pauseOnHover: !!t("pauseon-hover"),
          variableWidth: !!t("variable-width"),
          vertical: !!t("vertical"),
          verticalSwiping: !!t("vertical"),
          prevArrow: t("prev-arrow")
            ? n
            : '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
          nextArrow: t("next-arrow")
            ? a
            : '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
          rtl: "rtl" == e("html").attr("dir"),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                arrows: !!t("xl-arrows"),
                dots: !!t("xl-dots"),
                slidesToShow: t("xl-slide-show")
                  ? t("xl-slide-show")
                  : t("slide-show"),
                centerMode: !!t("xl-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 1400,
              settings: {
                arrows: !!t("ml-arrows"),
                dots: !!t("ml-dots"),
                slidesToShow: t("ml-slide-show")
                  ? t("ml-slide-show")
                  : t("slide-show"),
                centerMode: !!t("ml-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                arrows: !!t("lg-arrows"),
                dots: !!t("lg-dots"),
                slidesToShow: t("lg-slide-show")
                  ? t("lg-slide-show")
                  : t("slide-show"),
                centerMode: !!t("lg-center-mode") && t("lg-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: !!t("md-arrows"),
                dots: !!t("md-dots"),
                slidesToShow: t("md-slide-show") ? t("md-slide-show") : 1,
                centerMode: !!t("md-center-mode") && t("md-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 767,
              settings: {
                arrows: !!t("sm-arrows"),
                dots: !!t("sm-dots"),
                slidesToShow: t("sm-slide-show") ? t("sm-slide-show") : 1,
                centerMode: !!t("sm-center-mode") && t("sm-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 576,
              settings: {
                arrows: !!t("xs-arrows"),
                dots: !!t("xs-dots"),
                slidesToShow: t("xs-slide-show") ? t("xs-slide-show") : 1,
                centerMode: !!t("xs-center-mode") && t("xs-center-mode"),
                centerPadding: 0,
              },
            },
          ],
        });
    });
  var n,
    a,
    o,
    i = ".ajax-contact",
    r = "is-invalid",
    l = '[name="email"]',
    d = '[name="name"],[name="email"],[name="subject"],[name="message"]',
    c = e(".form-messages");
  function p() {
    var s,
      t = e(i).serialize();
    (s = (function () {
      var s,
        t = !0;
      function n(n) {
        n = n.split(",");
        for (var a = 0; a < n.length; a++)
          (s = i + " " + n[a]),
            e(s).val()
              ? (e(s).removeClass(r), (t = !0))
              : (e(s).addClass(r), (t = !1));
      }
      n(d),
        e(l).val() &&
        e(l)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(l).removeClass(r), (t = !0))
          : (e(l).addClass(r), (t = !1));
      return t;
    })()),
      s &&
        jQuery
          .ajax({ url: e(i).attr("action"), data: t, type: "POST" })
          .done(function (s) {
            c.removeClass("error"),
              c.addClass("success"),
              c.text(s),
              e(i + ' input:not([type="submit"]),' + i + " textarea").val("");
          })
          .fail(function (e) {
            c.removeClass("success"),
              c.addClass("error"),
              "" !== e.responseText
                ? c.html(e.responseText)
                : c.html(
                    "Oops! An error occured and your message could not be sent."
                  );
          });
  }
  e(i).on("submit", function (e) {
    e.preventDefault(), p();
  }),
    (n = ".sidemenu-wrapper"),
    (a = ".sideMenuCls"),
    (o = "show"),
    e(".sideMenuToggler").on("click", function (s) {
      s.preventDefault(), e(n).addClass(o);
    }),
    e(n).on("click", function (s) {
      s.stopPropagation(), e(n).removeClass(o);
    }),
    e(n + " > div").on("click", function (s) {
      s.stopPropagation(), e(n).addClass(o);
    }),
    e(a).on("click", function (s) {
      s.preventDefault(), s.stopPropagation(), e(n).removeClass(o);
    }),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".filter-active").imagesLoaded(function () {
      var s = ".filter-active",
        t = ".filter-menu-active";
      if (e(s).length > 0) {
        var n = e(s).isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: { columnWidth: 1 },
        });
        e(t).on("click", "button", function () {
          var s = e(this).attr("data-filter");
          n.isotope({ filter: s });
        }),
          e(t).on("click", "button", function (s) {
            s.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (s) {
      s.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (s) {
      s.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (s) {
      s.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (s) {
        s.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    });
  var v = e(".slick-3d-active");
  v
    .on("init", function (s, t, n) {
      var a = e(t.$slides[t.currentSlide]),
        o = a.next(),
        i = a.next().next(),
        r = a.next().next().next(),
        l = a.prev(),
        d = a.prev().prev(),
        c = a.prev().prev().prev();
      l.addClass("slick-3d-prev"),
        o.addClass("slick-3d-next"),
        d.addClass("slick-3d-prev2"),
        c.addClass("slick-3d-prev3"),
        i.addClass("slick-3d-next2"),
        r.addClass("slick-3d-next3"),
        a
          .removeClass("slick-3d-next")
          .removeClass("slick-3d-prev")
          .removeClass("slick-3d-next2")
          .removeClass("slick-3d-prev2")
          .removeClass("slick-3d-next3")
          .removeClass("slick-3d-prev3"),
        (t.$prev = l),
        (t.$next = o);
    })
    .on("beforeChange", function (s, t, n, a) {
      var o = e(t.$slides[a]);
      t.$prev.removeClass("slick-3d-prev"),
        t.$next.removeClass("slick-3d-next"),
        t.$prev.prev().removeClass("slick-3d-prev2"),
        t.$next.next().removeClass("slick-3d-next2"),
        t.$prev.prev().prev().removeClass("slick-3d-prev3"),
        t.$next.next().next().removeClass("slick-3d-next3");
      var i = o.next(),
        r = o.prev();
      r.addClass("slick-3d-prev"),
        i.addClass("slick-3d-next"),
        r.prev().addClass("slick-3d-prev2"),
        i.next().addClass("slick-3d-next2"),
        r.prev().prev().addClass("slick-3d-prev3"),
        i.next().next().addClass("slick-3d-next3"),
        (t.$prev = r),
        (t.$next = i),
        o
          .removeClass("slick-next")
          .removeClass("slick-3d-prev")
          .removeClass("slick-next2")
          .removeClass("slick-3d-prev2")
          .removeClass("slick-next3")
          .removeClass("slick-3d-prev3");
    }),
    v.slick({
      speed: 1e3,
      arrows: !1,
      dots: !1,
      focusOnSelect: !0,
      infinite: !0,
      centerMode: !0,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "0",
      swipe: !0,
      autoplay: !1,
      asNavFor: ".player-slider1",
    }),
    e(".player-slider1").slick({
      speed: 1300,
      arrows: !1,
      dots: !1,
      focusOnSelect: !0,
      infinite: !0,
      centerMode: !0,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "0",
      swipe: !0,
      autoplay: !1,
      fade: !0,
      asNavFor: "#playeravater1",
    });
  let u = "#tournamentslide1",
    h = ".tournament-menu2";
  e(h).each(function () {
    var s = 0;
    e(this)
      .find(".tab-btn")
      .each(function () {
        var t = e(this);
        t.attr("data-goto", s),
          s++,
          t.on("click", function () {
            e("#tournamentslide1").slick("slickGoTo", t.data("goto"));
          });
      });
  }),
    e(u)
      .on("init", function (s, t, n) {
        var a = e(t.$slides[t.currentSlide]),
          o = a.data("slick-index"),
          i = a.prev().data("slick-index"),
          r = a.next().data("slick-index");
        e(`${h} .tab-btn[data-goto="${o}"]`).addClass("active"),
          e(`${h} .tab-btn[data-goto="${r}"]`).addClass("next"),
          e(`${h} .tab-btn[data-goto="${i}"]`).addClass("prev"),
          (t.$prevIndex = i),
          (t.$nextIndex = r);
      })
      .on("beforeChange", function (s, t, n, a) {
        var o = e(t.$slides[a]),
          i = o.data("slick-index");
        e(`${h} .tab-btn[data-goto="${t.$prevIndex}"]`).removeClass("prev"),
          e(`${h} .tab-btn[data-goto="${t.$nextIndex}"]`).removeClass("next");
        var r = o.prev().data("slick-index"),
          l = o.next().data("slick-index");
        e(`${h} .tab-btn[data-goto="${l}"]`).addClass("next"),
          e(`${h} .tab-btn[data-goto="${r}"]`).addClass("prev"),
          (t.$prevIndex = r),
          (t.$nextIndex = l),
          e(`${h} .tab-btn[data-goto="${i}"]`)
            .addClass("active")
            .removeClass("next")
            .removeClass("prev")
            .siblings()
            .removeClass("active");
      }),
    e(u).slick({
      speed: 600,
      arrows: !1,
      fade: !0,
      dots: !0,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: !1,
      responsive: [{ breakpoint: 992, settings: { dots: !1 } }],
    }),
    e("#tournament4554").slick({
      speed: 800,
      arrows: !1,
      fade: !1,
      dots: !1,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: !0,
      centerPadding: "475px",
      centerMode: !0,
      responsive: [
        { breakpoint: 1500, settings: { centerPadding: "300px" } },
        { breakpoint: 1366, settings: { centerPadding: "200px" } },
        { breakpoint: 992, settings: { centerPadding: "50px" } },
        { breakpoint: 767, settings: { centerPadding: "0" } },
      ],
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (s) {
        s.preventDefault();
        var t = e(this).siblings(".qty-input"),
          n = parseInt(t.val());
        isNaN(n) || t.val(n + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (s) {
        s.preventDefault();
        var t = e(this).siblings(".qty-input"),
          n = parseInt(t.val());
        !isNaN(n) && n > 1 && t.val(n - 1);
      });
    }),
    new WOW({
      boxClass: "wow",
      animateClass: "wow-animated",
      offset: 0,
      mobile: !1,
      live: !0,
      scrollContainer: null,
      resetAnimation: !1,
    }).init(),
    e(window).on("load", function () {
      if (e(".switch-plate")) {
        var s = e(location).attr("href"),
          t = e("title").html().split("-"),
          n = s.split("/").pop(),
          a = e.trim(t[0].toLowerCase()),
          o = "https://html.vecurosoft.com/",
          i = o + a + "/light/" + n,
          r = o + a + "/dark/" + n;
        e(".switch-btn.light").each(function () {
          e(this).attr("href", i);
        }),
          e(".switch-btn.dark").each(function () {
            e(this).attr("href", r);
          });
      }
    });
})(jQuery);
