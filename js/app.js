new Vue({
    el: '#vue_component',
    data: {
        message: "Hello iam a Vue Component GoodMorning",
        name: "Abhijit Biswas",
        mobile: 8101318835
    },

    methods: {
        run: function(message) {
            return "hello Iam Vue Js Methods Objects\n" + message;
        },

        wellcome: function() {
            return "Iam the Vue Js Function";
        },

        ValueAccess: function() {
            //access data value in method function using this keyword....
            return this.name + " " + this.mobile;
        }

    }

});

var myapp = new Vue({
    el: "#my-app",
    data: {
        name: 'Abhijit biswas',
        address: 'Chandkheda',
        job: 'WebDeveloper',
        mobile: 8101318835,
        ulink: "https://www.tutorialspoint.com/vuejs/vuejs_overview.htm",
        alt: "images",
        image: "https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg",
        inTxt: "Abhijit Biswas",
        intEmail: "abhijit@gmail.com",
        htmlContent: "<p>Iam The Html Content Hello There.</p>"
    }

});

var counter = new Vue({
    el: "#counter",
    data: {
        counter: 0,
    },
    methods: {
        increment: function(inc) {
            this.counter = this.counter + inc;
            // We also write in shortern method use  this.counter +=inc;
        },
        decrement: function(desc) {
            // We also write in shortern method use  this.counter -=desc;
            this.counter = this.counter - desc;
        }
    }

});