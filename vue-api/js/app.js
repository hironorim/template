var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            items: [],
            keyword: ''
        }
    },
    mounted: function() {
        this.getData();
    },
    methods: {
        getData: function() {
            v = this;
            axios.get('./data/gen1-jp.json').then(function(response) {
                items = response.data;
                if (v.keyword.length > 0) {
                    items = items.filter(function(item) {
                        return (item.name.indexOf(v.keyword) > -1);
                    });    
                }

                v.items = items;
            })
        }
    }
})
