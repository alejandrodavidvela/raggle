import React from 'react'
import {Button, Card} from 'react-bootstrap'
import image1 from '../images/uline_blanket.jpg'





const data = {
    "ulineProducts" : [
        {"name":"Uline Blanket", "description": "warm blanket", "img": image1},
        {"name": "Uline Scarf", "description": "warm scarf", "img": image1},
        {"name": "Uline Socks", "description": "warm socks", "img": image1}
    ]
}

const RaggleItems = () => {
  return (
      <div className="ragglePrizes">
          <h2 className="raggleTitle">Prizes</h2>
          <div className="card-deck">
          {data.ulineProducts.map((item, i) => {
              return(
                <Card key={i} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title >{item.name}</Card.Title>
                    <Card.Text >
                    {item.description}
                    </Card.Text >
                    <Button variant="primary">Enter</Button>
                </Card.Body>
                </Card>
              )
            
          })}
          </div>
          
          
      </div>
  )
    
}




export default RaggleItems
