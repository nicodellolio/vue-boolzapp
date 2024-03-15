const { createApp } = Vue

const contacts = [
    {
        name: 'Michele',
        avatar: './assets/img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '14/03/2024',
                time: '15:30',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '14/03/2024',
                time: '16:40',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '14/03/2024',
                time: '16:49',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './assets/img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020',
                time: '16:30',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020',
                time: '16:30',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020',
                time: '16:35',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './assets/img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020',
                time: '10:10',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020',
                time: '16:21',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020',
                time: '16:15',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './assets/img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '14/03/2024',
                time: '15:30',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '14/03/2024',
                time: '15:50',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './assets/img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '14/03/2024',
                time: '09:30',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '14/03/2024',
                time: '15:24',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './assets/img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '14/03/2024',
                time: '08:30',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '14/03/2024',
                time: '14:50',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '14/03/2024',
                time: '15:01',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './assets/img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '14/03/2024',
                time: '10:30',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '14/03/2024',
                time: '14:23',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './assets/img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '14/03/2024',
                time: '11:31',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '14/03/2024',
                time: '11:50',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '14/03/2024',
                time: '14:11',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]

const optionsMenu = [
    'Rispondi',
    'Inoltra',
    'Preferiti',
    'Fissa in alto',
    'Copia',
    'Elimina'
]

const now = new Date();
let day = now.getDay();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

createApp({
    data() {
        return {
            activeChat: 0,
            activeMessage: 0,
            contacts: contacts,
            optionsMenu: optionsMenu,
            inputMessage: '',
            searchTerm: ''
        }
    },
    computed: {
        filterByTerm() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchTerm);
            });
        }
    },
    methods: {
        addToChat() {

            const newMessage = {
                date: `${day}/${month}/${year}`,
                time: `${hours}:${minutes}`,
                message: this.inputMessage,
                status: 'sent'
            }

            this.contacts[this.activeChat].messages.push(newMessage);
            this.inputMessage = ''
        },
        okOutput() {
            setTimeout(() => {

                const okOutputMessage = {
                    date: `${day}/${month}/${year}`,
                    time: `${hours}:${minutes}`,
                    message: 'Ok',
                    status: 'received'
                }

                this.contacts[this.activeChat].messages.push(okOutputMessage);

                setTimeout(() => {

                    const okOutputMessage = {
                        date: `${day}/${month}/${year}`,
                        time: `${hours}:${minutes}`,
                        message: 'A dopo',
                        status: 'received'
                    }

                    this.contacts[this.activeChat].messages.push(okOutputMessage);
                }, 1500);

            }, 1000);

        },
    },

}).mount('#app')

// Mi serve recuperare l'inidice del messaggio sul quale clicco, attraverso un [activeMessage] per esempio. Si potrebbe assegnare al menu-drop-down un @click="index === [activeMessage]". Dopo di che attraverso il ternariocreare la condizione per assegnare al options-menu la classe options-menu-show. Qualcosa come= :class="{index === [activeMessage] ? dropdown-show : dropdown-no}"