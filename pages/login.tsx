import { NextPage } from "next";
import Head from "next/head";
import FormLogin from "../src/module/Login/FormLogin";

const Login: NextPage = () => {
  return (
    <div className="login-page">
      <Head>
        <title>Administrador - En Donde Me Vacuno</title>
        <meta name="description" content="En donde me vacuno" />{" "}
      </Head>
      <main className=" login-container">
        <div className="left-panel">
          <header className="head">
            <h1>En Donde Me Vacuno</h1>
            <p>Gestiona tu centor de vacunación</p>
          </header>
          <FormLogin />
        </div>
        <div className="right-panel"></div>
      </main>
    </div>
  );
};

export default Login;
