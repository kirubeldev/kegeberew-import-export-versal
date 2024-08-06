import Card from 'react-bootstrap/Card';
import card1 from "../componet/assets/picFi/3.jpg"
import card2 from "../componet/assets/picFi/oil.jpg"
import card3 from "../componet/assets/picFi/spice.jpg"
import card4 from "../componet/assets/picFi/fruts.jpg"
import { Link } from 'react-router-dom';

const BasicExample = () => {



  return (
  
  

    <div className='centerr' style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(3rem, 1fr))", gap: "40px",   paddingRight:" 25px"}}>
    <Card className='upp'  style={{ width: '19em' }}>
        <Card.Img variant="top" src={card2} style={{ height: "255px" }} />
        <Card.Body style={{ backgroundColor: "#212529" }}>
          <Card.Title style={{ color: "white" }}>Coffee</Card.Title>
          <Card.Text className='justify' style={{ color: "white" }}>
           
          Savor our expertly crafted coffee blends, delivering a rich and aromatic experience with every sip.
          </Card.Text>
          <br />
          <a href="/contact" className="grdeen-btn main-header__btn" style={{ backgroundColor: "#d7a022" }}>
            <span>Read More</span>
          </a>
        </Card.Body>
      </Card>

      <Card className='upp'  style={{ width: '19em' }}>
        <Card.Img variant="top" src={card2} style={{ height: "255px" }} />
        <Card.Body style={{ backgroundColor: "#212529" }}>
          <Card.Title style={{ color: "white" }}>Oil and seed</Card.Title>
          <Card.Text className='justify' style={{ color: "white" }}>
            Pure goodness from field to table - our oils and seeds are carefully cultivated for rich flavor and essential nutrients
          </Card.Text>
          <br />
          <a href="/contact" className="grdeen-btn main-header__btn" style={{ backgroundColor: "#d7a022" }}>
            <span>Read More</span>
          </a>
        </Card.Body>
      </Card>

      <Card className='upp'  style={{ width: '19em' }}>
        <Card.Img variant="top" src={card2} style={{ height: "255px" }} />
        <Card.Body style={{ backgroundColor: "#212529" }}>
          <Card.Title style={{ color: "white" }}>Spice and Herbal</Card.Title>
          <Card.Text className='justify' style={{ color: "white" }}>
          Explore the world of spices and herbs, blending aromatic flavors and healing properties for culinary delight and well-being.
          </Card.Text>
          <br />
          <a href="/contact" className="grdeen-btn main-header__btn" style={{ backgroundColor: "#d7a022" }}>
            <span>Read More</span>
          </a>
        </Card.Body>
      </Card>

      <Card className='upp'  style={{ width: '19em' }}>
        <Card.Img variant="top" src={card2} style={{ height: "255px" }} />
        <Card.Body style={{ backgroundColor: "#212529" }}>
          <Card.Title style={{ color: "white" }}>Fruits</Card.Title>
          <Card.Text className='justify' style={{ color: "white" }}>
          Discover the juiciest fruits from top orchards, offering nature's bounty for a vibrant, healthy lifestyle.
          </Card.Text>
          <br />
          <a href="/contact" className="grdeen-btn main-header__btn" style={{ backgroundColor: "#d7a022" }}>
            <span>Read More</span>
          </a>
        </Card.Body>
      </Card>
    </div>

  );
}

export default BasicExample;
