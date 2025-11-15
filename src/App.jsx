import Cards from "./components/Cards"


function App() {
  
   const jobsData = [
  {
    id: 1,
    img: "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png",

    company: "Amazon",
    timeline: "2 days ago",
    role: "Frontend Developer",
    job_type: "Full-time",
    level: "Mid-level",
    amount: "$120/hr",
    location: "Bangalore, India"
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/71/7a/43/717a43bc0a1691cb9731f007a7d26417.jpg",
    company: "Google",
    timeline: "1 day ago",
    role: "UI/UX Designer",
    job_type: "Remote",
    level: "Junior",
    amount: "$90/hr",
    location: "Hyderabad, India"
  },
  {
    id: 3,
    img: "https://image.shutterstock.com/image-vector/color-square-icon-tone-red-260nw-2176011705.jpg",
    company: "Microsoft",
    timeline: "3 days ago",
    role: "Backend Developer",
    job_type: "Full-time",
    level: "Senior",
    amount: "$150/hr",
    location: "Noida, India"
  },
  {
    id: 4,
    img: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-Picture.png",
    company: "Adobe",
    timeline: "Just now",
    role: "Graphic Designer",
    job_type: "Hybrid",
    level: "Entry",
    amount: "$70/hr",
    location: "Pune, India"
  },
  {
    id: 5,
    img: 'https://freebiehive.com/wp-content/uploads/2021/10/Facebook-New-Logo-Meta-150x150.jpg',
    company: "Meta",
    timeline: "4 days ago",
    role: "React Developer",
    job_type: "Full-time",
    level: "Senior",
    amount: "$200/hr",
    location: "Delhi, India"
  },
  {
    id: 6,
    img: "https://pngimg.com/uploads/netflix/small/netflix_PNG10.png",
    company: "Netflix",
    timeline: "5 days ago",
    role: "Full Stack Developer",
    job_type: "Remote",
    level: "Expert",
    amount: "$220/hr",
    location: "Mumbai, India"
  },
  {
    id: 7,
    img: "https://freebiehive.com/wp-content/uploads/2021/10/Facebook-New-Logo-Meta-150x150.jpg",
    company: "Meta",
    timeline: "1 hour ago",
    role: "Java Developer",
    job_type: "Full-time",
    level: "Mid-level",
    amount: "$110/hr",
    location: "Kolkata, India"
  },
  {
    id: 8,
    img: "https://thumbnail.imgbin.com/2/14/1/imgbin-flipkart-e-commerce-vu-televisions-sales-gmail-logo-UxKtDpS6ZWsBEHG2srDWcSGhn_t.jpg",
    company: "Flipkart",
    timeline: "6 days ago",
    role: "Node.js Developer",
    job_type: "Hybrid",
    level: "Junior",
    amount: "$95/hr",
    location: "Bangalore, India"
  },
  {
    id: 9,
    img: "https://static.vecteezy.com/system/resources/thumbnails/056/850/705/small/swiggy-app-icon-with-transparent-background-free-png.png",
    company: "Swiggy",
    timeline: "8 days ago",
    role: "UI Designer",
    job_type: "Full-time",
    level: "Entry",
    amount: "$60/hr",
    location: "Chennai, India"
  },
  {
    id: 10,
    img: "https://www.pngall.com/wp-content/uploads/17/Myntra-Logo-Trendy-Fashion-PNG-300x225.png",
    company: "Myntra",
    timeline: "2 hours ago",
    role: "Project Engineer",
    job_type: "Full-time",
    level: "Associate",
    amount: "$80/hr",
    location: "Hyderabad, India"
  }
];

  return (
    <>
       <div className="wrapper">
      {jobsData.map((job) => (
        <Cards
          key={job.id}
          img={job.img}
          company={job.company}
          timeline={job.timeline}
          role={job.role}
          job_type={job.job_type}
          level={job.level}
          amount={job.amount}
          location={job.location}
        />
      ))}
    </div>
   
    
   
       
    </>
  )
}

export default App


