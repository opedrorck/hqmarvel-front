import React from "react";

const Signup: React.FC = () => {
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="main">
    <div className="wrapper">
      <h2>Cadastro</h2>
      <form onSubmit={handleSignup}>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Senha" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirme sua senha" required />
        </div>
        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </div>
    </main>
  );
};

export default Signup;
