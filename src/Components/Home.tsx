import React, { useState } from 'react';

interface Comic {
  id: number;
  title: string;
  description: string;
  image: string; // URL da imagem
}

interface Character {
  id: number;
  name: string;
  superpower: string;
  image: string; // URL da imagem
}

const Home: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([]); // Lista de quadrinhos
  const [characters, setCharacters] = useState<Character[]>([]); // Lista de personagens

  // Estados para formulário de quadrinhos
  const [comicTitle, setComicTitle] = useState('');
  const [comicDescription, setComicDescription] = useState('');
  const [comicImage, setComicImage] = useState<File | null>(null);

  // Estados para formulário de personagens
  const [characterName, setCharacterName] = useState('');
  const [characterSuperpower, setCharacterSuperpower] = useState('');
  const [characterImage, setCharacterImage] = useState<File | null>(null);

  // Adicionar um novo quadrinho
  const handleAddComic = (e: React.FormEvent) => {
    e.preventDefault();

    if (!comicTitle || !comicDescription || !comicImage) {
      alert('Preencha todos os campos do quadrinho e envie uma imagem.');
      return;
    }

    const newComic: Comic = {
      id: comics.length + 1,
      title: comicTitle,
      description: comicDescription,
      image: URL.createObjectURL(comicImage),
    };

    setComics((prevComics) => [...prevComics, newComic]);
    setComicTitle('');
    setComicDescription('');
    setComicImage(null);
  };

  // Adicionar um novo personagem
  const handleAddCharacter = (e: React.FormEvent) => {
    e.preventDefault();

    if (!characterName || !characterSuperpower || !characterImage) {
      alert('Preencha todos os campos do personagem e envie uma imagem.');
      return;
    }

    const newCharacter: Character = {
      id: characters.length + 1,
      name: characterName,
      superpower: characterSuperpower,
      image: URL.createObjectURL(characterImage),
    };

    setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
    setCharacterName('');
    setCharacterSuperpower('');
    setCharacterImage(null);
  };

  return (
    <div>
      <h2>Bem-vindo à Marvel Comics</h2>

      {/* Lista de Quadrinhos */}
      <h3>Quadrinhos</h3>
      {comics.length > 0 ? (
        <ul>
          {comics.map((comic) => (
            <li key={comic.id} style={{ marginBottom: '20px' }}>
              <h4>{comic.title}</h4>
              <p>{comic.description}</p>
              <img
                src={comic.image}
                alt={comic.title}
                style={{ width: '150px', height: 'auto', borderRadius: '8px' }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum quadrinho cadastrado ainda.</p>
      )}

      {/* Lista de Personagens */}
      <h3>Personagens</h3>
      {characters.length > 0 ? (
        <ul>
          {characters.map((character) => (
            <li key={character.id} style={{ marginBottom: '20px' }}>
              <h4>{character.name}</h4>
              <p>Poder: {character.superpower}</p>
              <img
                src={character.image}
                alt={character.name}
                style={{ width: '150px', height: 'auto', borderRadius: '8px' }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum personagem cadastrado ainda.</p>
      )}

      {/* Formulário para adicionar quadrinhos */}
      <form onSubmit={handleAddComic} style={{ marginTop: '20px' }}>
        <h3>Adicionar Novo Quadrinho</h3>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={comicTitle}
            onChange={(e) => setComicTitle(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={comicDescription}
            onChange={(e) => setComicDescription(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Imagem:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setComicImage(e.target.files ? e.target.files[0] : null)}
            required
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Adicionar Quadrinho
        </button>
      </form>

      {/* Formulário para adicionar personagens */}
      <form onSubmit={handleAddCharacter} style={{ marginTop: '20px' }}>
        <h3>Adicionar Novo Personagem</h3>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Poder:</label>
          <input
            type="text"
            value={characterSuperpower}
            onChange={(e) => setCharacterSuperpower(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Imagem:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCharacterImage(e.target.files ? e.target.files[0] : null)}
            required
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Adicionar Personagem
        </button>
      </form>
    </div>
  );
};

export default Home;
