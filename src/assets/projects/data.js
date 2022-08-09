import mealapp from './images/mealapp.PNG'
import gpt3 from './images/gpt3.PNG'
import ecommerece from './images/ecommerce.PNG'
export const data = [{
    image: mealapp,
    name: "Pappito Meals",
    overview: "This is one of my first React projects. Here user has listed available meals, and he can add them to the cart. After that he can pay the order. Some of the things I focused on here are conditional rendering, state management, using ContextAPI, etc.",
    technologies: ['React', 'Javascript', 'ContextAPI'],
    githubLink: 'https://github.com/mr-am2k/MealApp',
    websiteLink: 'https://astounding-pie-a9131c.netlify.app/'
},
{
    image: gpt3,
    name: "GPT-3",
    overview: "For this project, I wanted to focus on building UI based on Figma design. The project doesn't have some complex logic in the background since the main focus was building  UI. For the project, I used React and CSS without any frameworks and libraries.",
    technologies: ['React', 'Javascript', 'CSS'],
    githubLink: 'https://github.com/mr-am2k/modern-ui',
    websiteLink: 'https://gpt3-figma.vercel.app/'
},
{
    image: ecommerece,
    name: "Sat na ruci",
    overview: "Sat na ruci is an e-commerce site where you can buy watches that are listed on it. It is connected with commerce.js so if you want to add new watches or edit current you can easily do it on their website. Also, for payments is used Stripe. For this project, I've also used typescript and MaterialUI.",
    technologies: ['React', 'Typescript', 'CommerceJS', 'Stripe', 'MaterialUI'],
    githubLink: 'https://github.com/mr-am2k/ecommerce-app',
    websiteLink: 'https://ecommerce-app-am2k.vercel.app/'
}
]