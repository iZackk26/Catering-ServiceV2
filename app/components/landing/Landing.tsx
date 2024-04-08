import BackgroundImg from '/public/img/background.png';
import Image from 'next/image';

export default function Landing() {
    return (
    <section>
        <div className="mt-32 container mx-auto text-black bg-cover bg-center h-[100vh] flex justify-center items-center" style={{ backgroundImage: `url(${BackgroundImg})` }}><div>
        <h2 className="text-3xl font-bold flex flex-row gap-x-4 pb-5">Bienvenido a Nuestro Sitio</h2>
        <p className="text-xl opacity-50">Elevate your event with our exclusive catering service, offering a blend of quality and diverse cuisines for an unforgettable taste experience.</p>
      </div>
    </div>
    </section>
    )
}