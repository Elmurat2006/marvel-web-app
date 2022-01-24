import { Helmet } from "react-helmet"
import img from './tenor.gif';


const errorMessage =()=>{
    return(
        <>
        <Helmet>
        <meta
              name="description"
              content="404 page not found"
        />
             <title>404 page not found</title>
        </Helmet>

        <img style ={{display: 'block',width: '200',height: '200',
        objectFit:'contain',margin: '0 auto'}}
         src={img} alt="spider-man 404" />
        </>
        
    )
}

export default errorMessage