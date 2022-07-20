// const users = [
//    {username: "User1", password: user1 , email: "email1@email.com", createdAt: Date.now() },
//    {username: "User2", password: user12 , email: "email2@email.com", createdAt: Date.now() },
//    {username: "User3", password: user123 , email: "email3@email.com", createdAt: Date.now() },
//    {username: "User4", password: user1234 , email: "email4@email.com", createdAt: Date.now() },
//    ]
 
 
 const books = [
    {name: "A Fine Gift from Lakshmi", genre: "Short Stories", id: "1", authorId:"628b510eafc88b7e1f73ed58" },
    {name: "Gandhi - The Man of the Millions", genre: "Historical Drama", id: "2",authorId:"628b510eafc88b7e1f73ed58"  },
    {name: "Water on a Lotus Leaf", genre: "Novella", id: "3",authorId:"628b510eafc88b7e1f73ed58"  },
    {name: "The Blue Convertible", genre: "Short Stories", id: "628b5550c3d7458e93b55b5d",authorId:"628b510eafc88b7e1f73ed58"  },
    {name: "Shivaji", genre: "Historical Drama", id: "5",authorId:"628b510eafc88b7e1f73ed58"  },
    {name: "Dravida Purvankkala Kataikal", genre: "Short Stories", id:"6", authorId:"628b52c1ae7208b7254e209d"},
    {name: "Famous Findings of Police Officer Thanavan", genre: "Short Stories", id:"7", authorId:"628b52c1ae7208b7254e209d"},
    {name: "Dravida Mattiyakalakkataikal", genre: "Short Stories", id:"8", authorId:"628b52c1ae7208b7254e209d"},
    {name: "Valmiki Prathiba", genre: "Historical Drama", id:"8", authorId:"628b521cae7208b7254e209b"},
    {name: "Gora", genre: "Novella", id:"8", authorId:"628b521cae7208b7254e209b"},
    {name: "YogaYog", genre: "Novella", id:"8", authorId:"628b521cae7208b7254e209b"},
];

 const authors = [
    {name: "Prema Sastri", century: 20 , id: "628b510eafc88b7e1f73ed58" },
    {name: "Pandit Natesa Sastri", century: 19, id: "628b52c1ae7208b7254e209d" },
    {name: "Ravindranath Tagore", century: 19 , id: "628b521cae7208b7254e209b" },
    {name: "Kalki", century: 21, id: "628b52e5ae7208b7254e209f" },
    ]

// Projects
const bookProjects = [
   {
     id: '1',
     clientId: '1',
     name: 'eCommerce Website',
     description:
       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
     status: 'In Progress',
   },
   {
     id: '2',
     clientId: '2',
     name: 'Dating App',
     description:
       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
     status: 'In Progress',
   },
   {
     id: '3',
     clientId: '3',
     name: 'SEO Project',
     description:
       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
     status: 'In Progress',
   },
   {
     id: '4',
     clientId: '4',
     name: 'Design Prototype',
     description:
       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
     status: 'Done',
   },
   {
     id: '5',
     clientId: '5',
     name: 'Auction Website',
     description:
       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
     status: 'In Progress',
   },
 ];
 
 // Clients
 const bookClients = [
   {
     id: '1',
     name: 'Tony Stark',
     email: 'ironman@gmail.com',
     phone: '343-567-4333',
   },
   {
     id: '2',
     name: 'Natasha Romanova',
     email: 'blackwidow@gmail.com',
     phone: '223-567-3322',
   },
   {
     id: '3',
     name: 'Thor Odinson',
     email: 'thor@gmail.com',
     phone: '324-331-4333',
   },
   {
     id: '4',
     name: 'Steve Rogers',
     email: 'steve@gmail.com',
     phone: '344-562-6787',
   },
   {
     id: '5',
     name: 'Bruce Banner',
     email: 'bruce@gmail.com',
     phone: '321-468-8887',
   },
 ];
 
 module.exports = { bookProjects, bookClients };