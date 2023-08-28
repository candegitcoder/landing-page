import 'bootstrap/dist/css/bootstrap.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup
  .object({
    message: yup
      .string()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .max(200, "El mensaje debe tener como maximo 200 caracteres"),
    fullName: yup.string().min(10).max(25),
    phone: yup.string().min(9).max(15),
    email: yup.string().required().email("Este input debe ser un email"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

function Help() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("form data", data);
    reset();
  };

  console.log("email", watch("email"));

  return (
    <main id='help'>
      <section className='todoformulario'>
      <section className='textformulario'>
        <h2>¡Podes dejarnos tu mensaje aca!</h2>
      </section>

      <section className='formulario'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input className='inputs' placeholder="Ingresa tu nombre" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <input className='inputs' placeholder="Ingresa tu email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input className='inputmensaje' placeholder="Dejanos tu mensaje!" {...register("message")} />
        <p>{errors.message?.message}</p>
        <input className='inputtelefono' placeholder="Ingresa tu numero de telefono" {...register("phone")} />
        <p>{errors.phone?.message}</p>
        <button type="button" className="btn btn-outline-danger getboton">Enviar</button>
        </form>
      </section>
      </section>

    <footer className='footer'>
      <section className='infofooter'>
      <img className='logofooter' src="src/assets/img/logo-entero.jpeg" alt="" />
      <p className='abajodelogofooter'> <b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
      <div>
      <img className='logosredesociales' src="src/assets/img/imgfb.jpeg" alt="" />
      <img className='logosredesociales' src="src/assets/img/imgtwitter.jpeg" alt="" />
      <img className='logosredesociales' src="src/assets/img/imginstagram.jpeg" alt="" />
      </div>
      <p>©2020LaslesVPN</p>
      </section>

      <section className='columnasfooter'>
        <div className='columnafooter'>
          <p className='titulosfooter' >Product</p>
          <p>Download</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>

        <div className='columnafooter'>
          <p className='titulosfooter'>Engage</p>
          <p>LaslesVPN ?</p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className='columnafooter'>
          <p className='titulosfooter'>Earn Money</p>
          <p>Affiliate ?</p>
          <p>Become Partner</p>
        </div>
        
      </section>
    </footer>
    </main>
  );
}

export default Help;



