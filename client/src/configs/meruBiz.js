import { FaBeer } from 'react-icons/fa';
import priority from '../assets/diagnostic.png'
import employeeCommute from '../assets/meru-biz/Employee-Commute.jpg'
import airoplaneImg from '../assets/meru-biz/airoplane-miru-biz.jpg'
import rentalCarImg from '../assets/meru-biz/rental-car.jpeg'



const meruBizAdvantages=[
{
    icon:priority,
    title:'Cab Allocation on Priority'
},
{
    icon:priority,
    title:'Chauffeur. Verification.'
},
{
    icon:priority,
    title:'Safety. Features.'
},
{
    icon:priority,
    title:'Assured Cab. Availability'
},
{
    icon:priority,
    title:'Preferential. Pricing.'
},{
    icon:priority,
    title:'Fixed. Rate'
},{
    icon:priority,
    title:'GST. Billing'
},

]

const meruComprehensiveBusiness=[
    {
        title:'Employee Commute',
        description:`your gateway to a wide-ranging array of tailored, expertly designed, and client-focused offerings that address
         the multifaceted needs of corporate travel. With our meticulously crafted suite of services, we provide a holistic approach 
         to streamline, enhance, and manage every aspect of your business travel requirements, ensuring cost-efficiency and employee
          well-being are at the forefront of our commitment to your success..`,
        imagePath:employeeCommute
    },
    {
        title:'Airport Transfers',
        description:`Discover the ultimate in reliability with our airport pickup and drop-off
         services. Our experienced chauffeurs, real-time flight tracking, and well-maintained 
         vehicles guarantee punctuality and peace of mind. We prioritize your comfort, safety, and convenience,
          ensuring that your airport transfers are a seamless and stress-free part of your travel experience. 
          Choose us for dependable, hassle-free transportation to and from the airport.`,
        imagePath:airoplaneImg
    },
    {
        title:'Car Rentals',
        description:`Secure a premium fleet of chauffeured cars for rent, at your beck and call, 
        regardless of your location. Our flexible and comprehensive car rental service is here to meet your diverse travel needs, 
        be it for business or leisure. With a well-maintained range of vehicles, we aim to ensure your journey is not just
         comfortable and reliable but also stress-free, giving you peace of mind.`,
        imagePath:rentalCarImg
    },
    {
        title:'Customized Business Travel',
        description:`Welcome to our world of Travel Concierges. We go beyond ordinary travel services by offering 
        a comprehensive suite of transportation solutions. From coordinating coach bookings for group travel to 
        facilitating smooth and efficient nodal transfers, ensuring your journey is seamless and hassle-free is our top priority. 
        Additionally, we embrace modernity with electric ride options, ensuring that your transportation experience aligns with 
        environmental sustainability.`,
        imagePath:employeeCommute
    }

]

const merBizWhy = [
 {
    title:'Optimize your savings.',
    description:[
        `Billing from one designated point to another`
        , 'Special pricing'
         ,'Generating invoices that adhere to GST requirements',
         'A single dashboard for tracking all spending'
    ]
 },
 {
    title:'Absolutely peerless convenience',
    description:[
        `Booking made easy: three steps.`
        ,'Guaranteed taxi availability'
         ,'Driver denials eliminated',
         'Payment through company billing'
    ]
 },
 {
    title:'Complete financial transparency',
    description:[
        `incitant receipts`
        , 'Dynamic real-time reporting.'
         ,'Each ride is traceable.',
         'No Surprises,fixed rate'
    ]
 }, {
    title:'Transportation for all events.',
    description:[
        `Typical sedans and hatchbacks.`
        , 'Premium sedans'
         ,'Elegant automobiles and SUVs.',
         'Vans (TT) and buses'
    ]
 }
 , {
    title:'Guaranteed security.',
    description:[
        `Strict driver screening process`
        , 'ICE alert and trip status sharing '
         ,'Real-time GPS tracking',
         'In-vehicle camera.'
    ]
 },
 {
    title:'Achieve full control',
    description:[
        `User-friendly dashboard.`
        , 'Monitor and control rides remotely.'
         ,'Establish policies and instructions.',
         'Fully technology-driven.'
    ]
 },
 {
    title:'Continuous support',
    description:[
        `Dedicated round-the-clock support.`
        , 'Tailorable and versatile services.'
         ,'Highly skilled and polite customer support.',
         'Regular maintenance and feedback..'
    ]
 },
 {
    title:'Optimize your savings.',
    description:[
        `Billing from one designated point to another`
        , 'Special pricing'
         ,'Generating invoices that adhere to GST requirements',
         'A single dashboard for tracking all spending'
    ]
 },
 {
    title:'Achieve full control',
    description:[
        `User-friendly dashboard.`
        , 'Monitor and control rides remotely.'
         ,'Establish policies and instructions.',
         'Fully technology-driven.'
    ]
 },
]


const meruBizVersus = [
    {name:'Allocating cabs based on priority', meruBuz:'Yes',appBased:'No',traditional:'Not All'},
    {name:'Guaranteed cab availability', meruBuz:'Yes',appBased:'Not Always',traditional:'No'},
    {name:'Special pricing', meruBuz:'Yes',appBased:'No',traditional:'Yes'},
    {name:'Fixed Rates', meruBuz:'Yes',appBased:'No',traditional:'No'},
    {name:'GST-compliant billing', meruBuz:'Yes',appBased:'Yes',traditional:'Not All'},
    {name:'Adherence to regulatory requirements', meruBuz:'Yes',appBased:'Not All',traditional:'Not All'},
    {name:'Driver background checks.', meruBuz:'Yes',appBased:'Not Always',traditional:'Yes'},
    {name:'Safety enhancements',meruBuz:'Yes',appBased:'Yes',traditional:'Not Always'},
    {name:'Around-the-clock helpline.',meruBuz:'Yes',appBased:'Not All	',traditional:'No'},
]




export {meruBizAdvantages,meruComprehensiveBusiness,merBizWhy,meruBizVersus}