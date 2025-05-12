import FutureNosticsLogo from '../assets/svgs/futureNosticsLogo';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import LoginForm from '../components/LoginForm/LoginForm';
import loginPageImage from "../assets/pngs/loginpageImg.png"
const Login = () => {
  return (
    <main className="flex min-h-screen bg-white">
      <section
        className="flex flex-col items-start px-15 py-30 font-urbanist bg-white w-login-left-section"
        aria-label="Login Section"
      >
        <div className="flex flex-col pb-5">
          <FutureNosticsLogo />
        </div>
        <SectionHeader
          containerClassName="flex flex-col items-start gap-4 text-left"
          titleClassName="text-5xl font-bold"
          descriptionClassName="font-light text-base text-charcoal-blue"
          title="Welcome back!"
          description="Sign in to manage your store, track orders, and grow your business."
        />
        <LoginForm />
      </section>

      <section className="relative bg-teal-green overflow-hidden flex flex-col gap-10 items-center justify-center w-login-right-section">
        <div className="absolute rounded-full w-login-circle-width h-login-circle-height top-offset-top-neg-300 right-offset-right-neg-250 bg-gradient-login-circle" />
        {/* temporary img */}
        <img src={loginPageImage} className='w-[608px] h-[433px]' />
        <SectionHeader
          containerClassName="flex flex-col items-center gap-2 text-center font-urbanists px-34"
          titleClassName="text-4xl font-medium text-gray-50"
          descriptionClassName="font-light text-xl text-light-steel"
          title="Your Business, At a Glance"
          description="Track sales, manage inventory, and stay on top of orders—all from a powerful, easy-to-use dashboard built for growth."
        />
      </section>
    </main>
  );
};

export default Login;
