const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: []
        };
    },
    created() {
        this.generateEmails();
    },
    methods: {
        generateEmails() {
            this.emails = [];
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    this.emails.push(resp.data.response);
                });
            }
        }
    }
}).mount('#app');
