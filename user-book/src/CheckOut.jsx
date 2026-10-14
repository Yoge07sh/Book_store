import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function CheckOut () {
  const { products, totalCost } = useSelector(state => state.cart)
  return (
    <Container>
      <Row>
        <Col>
          <h4 className='text-center text-danger mt-5'>Shipping Details</h4>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email'></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <h5 className='mt-3 text-primary'>Shipping Address</h5>
            <Row className='mt-2'>
              <Col>
                <Form.Group>
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col>
                <Form.Group>
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col>
          <h4 className='text-center text-danger mt-5'>Product Summary</h4>
          <table className='table mt-2'>
            <thead>
              <tr>
                <th>Book Image</th>
                <th>Book Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr>
                  <td>
                    <img
                      src={product.bookImage}
                      heigth='30px'
                      width='30px'
                    ></img>
                  </td>
                  <td>{product.bookTittle}</td>
                  <td>₹ {product.originalPrice}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>Total Cost</td>
                <td colSpan={2}>₹ {totalCost}</td>
              </tr>
            </tbody>
          </table>
          <Button
            style={{ width: '180px', float: 'right' }}
            size='lg'
            variant='warning'
            className='mt-2'
          >
            Pay Now
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckOut
