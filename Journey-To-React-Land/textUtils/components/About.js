import React from 'react'

export default function About(props) {

    return (
    <div className='container my-3' >
      <h2 style={{color: props.mode ==="dark"? "white": "#26355D"}}>About TextUtils</h2>
      <div className="container my-4" style={{color: props.mode ==="dark"? "white": "#26355D"}}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum maiores corporis nihil deserunt sed quidem pariatur esse. Veritatis nam officia expedita quia deleniti distinctio fugit cupiditate eligendi perferendis quas repellat exercitationem sunt possimus modi similique, inventore recusandae quam maxime eaque id! Ipsam nihil mollitia hic rerum tempore recusandae beatae! Error maxime fuga harum ipsum beatae, adipisci accusamus explicabo delectus excepturi neque? Nesciunt asperiores totam recusandae! Qui, repellat. Atque, soluta, quis ut ducimus error assumenda incidunt, iste sunt voluptates dolores blanditiis hic quisquam libero ipsam sequi. Tempora ipsa qui deleniti eius facere blanditiis ratione ducimus quae, quidem eum quaerat voluptatum?
        </p>
      </div>
    </div>
  )
}
