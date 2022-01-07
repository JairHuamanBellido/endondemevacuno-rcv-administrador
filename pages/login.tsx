import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FormLogin from "../src/module/Login/Application/FormLogin";

const Login: NextPage = () => {
  return (
    <div className="login-page">
      <Head>
        <title>Administrador - En Donde Me Vacuno</title>
        <meta name="description" content="En donde me vacuno" />{" "}
      </Head>
      <main className=" login-container">
        <div className="left-panel">
          <header>
            <Image
              width={64}
              height={64}
              src="/icon.svg"
              alt="En Donde Me Vacuno"
            />
            <h1 className="font-bold text-3xl">En Donde Me Vacuno</h1>
          </header>
          <div className="title-container">
            <h3 className="font-medium">Login</h3>
            <p>Ingrese sus credenciales</p>
          </div>
          <FormLogin />
        </div>
        <div className="right-panel">
          <Image
            width={779}
            height={595.81}
            src="https://endondemevacuno.s3.us-east-2.amazonaws.com/panel-login-illustration.png"
            alt="image"
          />
        </div>
      </main>
    </div>
  );
};

export default Login;
