
import { Link, useParams } from "react-router-dom"

const DetailPage = () => {
    const { id } = useParams();

    return (
        <section>
            <h2>The product id is: { id }</h2>
           
            
            <Link to ='/gallery'>Back to Gallery</Link>
        </section>
    );
}

export default DetailPage;



