//Event Handling Mouseover,Mousemove, Mouseout
var eventhandling = new Vue({
    el: "#event_handling",
    data: {
        message: "Iam Vue Handlings",
        x: 0,
        y: 0,
    },
    methods: {
        movefunction: function(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;

        },
        mousefunction: function() {
            console.log("Working");
        },
        mouseoutfunction: function() {
            console.log("I am Out");
        }


    }




});