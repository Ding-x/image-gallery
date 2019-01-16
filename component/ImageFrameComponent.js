import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , Container, Row, Col} from 'reactstrap';
import ImageComponent from './ImageComponent'

const GET_PRODUCTS_BY_ID = gql`
query {
  
    products(first: 0) {
      edges {
        node {
          title
          id
          images(first: 250) {
            edges {
              node {
                id
                src
              }
            }
          }
        }
      }
    }
  }
`;



 class ImageFrameComponent extends React.Component {
   constructor(props){
     super(props)
     this.state={
      selectId:[]
     }
   }



       render() {

        const rowstyle = {
          margin:"20px auto",
          padding:"20px",
          height:"450px",
          borderBottom:"1px solid black"
        }

        const producttitle = {
          fontSize:"36px",
          margin:"20px auto"
        }

        const colstyle={
          float:"left",
          width:"20%",
          margin:"20px",
        }

         return (
           <Query query={GET_PRODUCTS_BY_ID} >
             {({ data, loading, error }) => {
               if (loading) return <div>Loading…</div>;
               if (error) return <div>{error.message}</div>;
               return (
                   <div>

                 {data.products.edges.map(product=>{
                   
                     return(
                         <Container>
                           {product.node.images.edges.length>0?
                            <Row style={rowstyle}>
                                <Col style={producttitle}>{product.node.title}</Col>
                                {product.node.images.edges.map(image=>{
                                  image.node.clicked=false;
                                  image.node.productId=product.node.id;
                                  return(
                                  <Col style={colstyle}> <ImageComponent data={image.node}/></Col>
                                    )
                                })}
          
                              </Row>: null}
 
                         </Container>

                     )
                 })}
                   </div>
                 
               );
             }}
           </Query>
         );
       }
     }
    
     export default ImageFrameComponent;