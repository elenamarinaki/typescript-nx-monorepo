import { useEffect, useState } from 'react';
import styles from './index.module.css';

export function Index() {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  });

  return <div className={styles.page}>Hello Elena!</div>;
}

export default Index;
