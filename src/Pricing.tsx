import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { BASE_URL } from "./main.tsx";

type Suscription = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S" | "$ARG";
  type: "/mo" | "daily" | "weekly";
};

const Subscription = () => {
  const [subcriptions, setSubcriptions] = useState<Suscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/api/subscription`)
      .then((response) => {
        response.json().then((result) => {
          console.log("resultados",result)
          setSubcriptions(result);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main id='pricing'>
         <section className='pricingroup'>
                <div className='textpricing'>
                    <h1 className='chose'>Choose Your Plan</h1> 
                    <p className='subchose'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
        </section>

        <section className='sectionpricing'>      
        <div className='cartaaaaa'>
            {subcriptions.map((subscription) => (
            <div className='cardpricing' key={subscription.title}>
              <div className='box'>
                <img className='imgpricing' src="src/assets/img/pricing.jpeg" alt="" />
                <p className='titlepricing'>{subscription.title}</p>
              </div>
            {subscription.benefits.map((benefit) => (
                <div className='itemspricing'>
                    <img className='imgitems' src="src/assets/img/items.jpeg" alt="" />
                    <p className='carapricing' key={`${subscription.title + benefit}`}>{benefit}</p>
                </div>
            ))}
            <div className='preciomes'>
            <p className='price'>{subscription.price}</p>
            <p>/{subscription.type}</p>
            </div>
            <button type="button" className="btn btn-outline-danger select">Select</button>
            </div>
      ))}
        </div>
        </section>
    </main>
  );
};

export default Subscription;


