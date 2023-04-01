import React from 'react'

const Main = () => {
 const country ='spain'
  return (
    <div>
    <main>
         <section>
           <h2>About Us</h2>
           <p>
             We are a small team of web developers based in the {country}. We
             specialise in creating modern and responsive websites for businesses
             and individuals.
           </p>
         </section>
         <section>
           <h2>Our Services</h2>
           <ul>
             <li>Web Design</li>
             <li>Web Development</li>
             <li>E-commerce Solutions</li>
             <li>Search Engine Optimization (SEO)</li>
           </ul>
         </section>
       </main>
    </div>
  )
}

export default Main