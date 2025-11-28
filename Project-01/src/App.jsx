import Card from './components/Card'

const App = () => {
  return (
    <>
      <div className="cards">
        <Card company="Amazon" requirements="Senior UI/UX Designer" amt="120" place="San Francisco, CA" img="https://i.pinimg.com/736x/5f/e7/50/5fe7508665aed4aeab8a41d3596a09e3.jpg"/>
        <Card company="Google" requirements="Frontend Developer" amt="150" place="Mountain View, CA" img="https://i.pinimg.com/1200x/60/41/99/604199df880fb029291ddd7c382e828b.jpg"/>
        <Card company="Microsoft" requirements="Backend Developer" amt="130" place="Redmond, WA" img="https://i.pinimg.com/736x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg"/>
      </div>
    </>
  )
}

export default App
