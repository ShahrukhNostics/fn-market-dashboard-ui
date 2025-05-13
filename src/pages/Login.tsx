import FutureNosticsLogo from '../assets/svgs/futureNosticsLogo';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import LoginForm from '../components/LoginForm/LoginForm';
import loginPageImage from "../assets/pngs/loginpageImg.png"
const Login = () => {
  return (
    <main className="flex bg-white">
      <section
        className="flex flex-col items-start px-5 md:px-15 py-30 font-urbanist bg-white w-full lg:w-login-left-section"
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

      <section className="hidden lg:flex relative bg-teal-green overflow-hidden flex-col gap-10 items-center justify-center w-login-right-section">
        <div className="absolute rounded-full w-login-circle-width h-login-circle-height top-offset-top-neg-300 right-offset-right-neg-250 bg-gradient-login-circle" />
        {/* temporary img */}
        <div className='relative z-10 flex flex-col items-center gap-10 px-20 xl:px-20 lg:px-10'>
          <img src={loginPageImage} className='w-[608px] h-[433px] xl:w-[608px] xl:h-[433px] lg:w-[450px] lg:h-[320px]' />
          <SectionHeader
            containerClassName="flex flex-col items-center gap-2 text-center font-urbanists px-15 lg:px-8"
            titleClassName="text-4xl xl:text-4xl lg:text-3xl font-medium text-gray-50"
            descriptionClassName="font-light xl:text-xl lg:text-lg text-light-steel"
            title="Your Business, At a Glance"
            description="Track sales, manage inventory, and stay on top of orders—all from a powerful, easy-to-use dashboard built for growth."
          />
        </div>
      </section>
    </main>
  );
};

export default Login;
