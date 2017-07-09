(function(){
    'use strict';
    
    Vue.component('movieCard', {
        props:[
            'title',
            'year',
            'link',
            'backgroundImage',
            'removeAction',
            'isSelectable'
        ],
        template: '<div class="movie-card-wrapper mb-4"><a v-bind:href="link" class="movie-card"><div class="background-image" v-bind:style="{ backgroundImage: \'url(\' + backgroundImage +\')\' }"></div><h6 class="title">{{title}} ({{year}})</h6></a><button class="btn btn-danger btn-sm remove-action" v-if="removeAction" v-on:click="remove">Delete</button><b-form-checkbox v-if="isSelectable" value="false" class="select-movie"></b-form-checkbox></div>',
        methods: {
            remove: function(){
                var scope = this;
                scope.$swal({
                    title: 'Are you sure?',
                    type: 'warning',
                    showCancelButton: true
                }).then(function(){
                    scope.$http.delete(scope.removeAction)
                    .then(function(response){
                        window.location.reload();
                    }); 
                });                              
            }
        }        
    });    
})();