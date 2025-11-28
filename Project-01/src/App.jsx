import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    companyName: "Basecamp",
    role: "Product Manager",
    tag: "Management",
    location: "Remote",
    pay: "$80-100/hr",
    brandLogo: "https://i.pinimg.com/1200x/a0/91/2c/a0912c722a250c6fd58387c0a8fb5bf6.jpg"
  },
  {
    companyName: "Dropbox",
    role: "Software Engineer",
    tag: "Engineering",
    location: "Remote",
    pay: "$85-110/hr",
    brandLogo: "https://i.pinimg.com/1200x/bf/37/89/bf37890103f17074d4848ea14be6aea5.jpg"
  },
  {
    companyName: "Google",
    role: "UX Designer",
    tag: "Design",
    location: "California, USA",
    pay: "$70-100/hr",
    brandLogo: "https://i.pinimg.com/1200x/60/41/99/604199df880fb029291ddd7c382e828b.jpg"
  },
  {
    companyName: "Airbnb",
    role: "Frontend Developer",
    tag: "Engineering",
    location: "Remote",
    pay: "$60-90/hr",
    brandLogo: "https://i.pinimg.com/1200x/56/5c/2a/565c2a824c7c184e326c751a0fb7e73e.jpg"
  },
  {
    companyName: "Spotify",
    role: "Backend Developer",
    tag: "Engineering",
    location: "Remote",
    pay: "$90-120/hr",
    brandLogo: "https://i.pinimg.com/736x/10/9c/e1/109ce1a27f8a7f0a7107564512132a19.jpg"
  },
  {
    companyName: "Stripe",
    role: "Product Analyst",
    tag: "Analytics",
    location: "Remote",
    pay: "$65-85/hr",
    brandLogo: "https://i.pinimg.com/736x/9a/3c/4d/9a3c4d07dc0afb6a0f2c95809a9b1749.jpg"
  },
  {
    companyName: "Meta",
    role: "Data Scientist",
    tag: "Data",
    location: "USA",
    pay: "$100-140/hr",
    brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg"
  },
  {
    companyName: "Figma",
    role: "UI Designer",
    tag: "Design",
    location: "Remote",
    pay: "$70-95/hr",
    brandLogo: "https://i.pinimg.com/1200x/e5/6e/6d/e56e6d8e55bde22f45e80aad8a90a5e4.jpg"
  },
  {
    companyName: "Netflix",
    role: "DevOps Engineer",
    tag: "Engineering",
    location: "USA",
    pay: "$95-130/hr",
    brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg"
  },
  {
    companyName: "Amazon",
    role: "Cloud Architect",
    tag: "Cloud",
    location: "Remote",
    pay: "$110-150/hr",
    brandLogo: "https://i.pinimg.com/736x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg"
  }
];

  return (
    <>
      <div className='cards'>
        {jobs.map((elem, idx) => {
          return (
            <Card 
            key={idx}
            companyName={elem.companyName}
            role={elem.role}
            tag={elem.tag}
            location={elem.location}
            pay={elem.pay}
            brandLogo={elem.brandLogo}
          />
          )
        })}
      </div> 
    </>
  )
}

export default App
