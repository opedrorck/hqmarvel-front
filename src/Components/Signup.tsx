import React, { useState } from 'react';

const Signup: React.FC = () => {


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 >Cadastro</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          required
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};



export default Signup;
