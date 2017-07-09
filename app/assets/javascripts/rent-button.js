(function(){
    'use strict';

    Vue.component('rentButton', {
        props: [
            'link'
        ],
        template: '<button v-on:click="finishRent" class="btn btn-primary btn-lg float-right mb-5">Rent!</button>',
        methods: {
            finishRent: function(){
                var scope = this;

                scope.$http.post(scope.link)
                .then(function(response){
                    scope.$swal({
                        title: response.data.message,
                        type: 'success'
                    })
                }, function(response){
                    scope.$swal({
                        title: response.data.message,
                        type: 'error'
                    });
                });
            }
        }
    });
})();