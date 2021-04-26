import React from 'react'
import {Button, Card} from 'react-bootstrap'
import uline_blanket from '../images/uline_blanket.jpg'




const data = {
    "ulineProducts" : [
        {"name":"Uline Blanket", "description": "warm blanket"},
        {"name": "Uline Scarf", "description": "warm scarf"},
        {"name": "Uline Socks", "description": "warm socks"}
    ]
}

const RaggleItems = () => {
  return (
      <div>
          <h2 className="raggleTitle">Prizes</h2>
          <div className="card-deck">
          {data.ulineProducts.map((item, i) => {
              return(
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
              )
            
          })}
          </div>
          
          
      </div>
  )
    
}




export default RaggleItems
