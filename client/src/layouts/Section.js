import React from 'react';

function Section({children}) {

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        {children}
      </div>
    </section>
  )
}

export default Section;
