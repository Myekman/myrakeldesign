
import { Link, useParams } from "react-router-dom"

const DetailPage = () => {
    const {DetailId} = useParams();

    return (
        <section>
            <h2>The product id is: { DetailId }</h2>
           
            
            <Link to ='/galleri'>Back to Gallery</Link>
        </section>
    );
}

export default DetailPage;



