import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    { img: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop& ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia, expedita nobis tempore quae nisi?",
      tag: "Satisfied"
    },
    { img: "https://plus.unsplash.com/premium_photo-1686244745026-98fc15ad3400?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur possimus porro dolorum, voluptas sint exercitationem?",
      tag: "Underserved"
    },
    { img: "https://images.unsplash.com/photo-1724627559656-9652a42c7e91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum autem nesciunt, deserunt vero tenetur.",
      tag: "Underbanked"
    }
  ]

  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  )
}

export default App
