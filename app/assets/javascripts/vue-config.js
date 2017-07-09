(function(){
    'use strict';

    Vue.http.interceptors.push(function(request, next){
        var csrfToken = document.querySelector('[name="csrf-token"]').getAttribute('content');        
        request.headers.set('X-CSRF-TOKEN', csrfToken);
        next();
    });

    Vue.use(VueSweetAlert.default);
})();