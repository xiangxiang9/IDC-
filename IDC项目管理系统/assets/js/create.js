!function (a) { 
    "use strict"; 
    function t() { 
        this.$body = a("body") 
    } 
    t.prototype.init = function () { 
        Dropzone.autoDiscover = !1, 
        a('[data-plugin="dropzone"]').each(function () { 
            var t = a(this).attr("action"), e = a(this).data("previewsContainer"), i = { url: t }; e && (i.previewsContainer = e); 
            var o = a(this).data("uploadPreviewTemplate"); 
            o && (i.previewTemplate = a(o).html()); 
            a(this).dropzone(i) 
        }) 
        }, 
        a.FileUpload = new t, 
        a.FileUpload.Constructor = t 
    }
    (window.jQuery), function () { 
        "use strict"; 
        window.jQuery.FileUpload.init() 
    }(), 
    $('[data-toggle="select2"]').select2()
    // $('[data-toggle="flatpicker"]').flatpickr({ altInput: !0, altFormat: "F j, Y", dateFormat: "Y-m-d" });
