var keybord_event = new Vue({
    el: "#keyboard_event",
    data: {
        message: 'Iam Working',
    },
    methods: {
        keypressFunction: function(event) {
            this.message = 'key ' + event.key + ' (' + event.keyCode + ')';
            console.log(this.message = 'key ' + event.key + ' (' + event.keyCode + ')');
        }
    }


});