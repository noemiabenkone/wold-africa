import "./style.css";
import React, { useState, useEffect } from "react";

const ListPais = () => {
  const [countries, setCountries] = useState([]);
  const [presidents, setPresidents] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Requisição para dados dos países
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const africanCountries = data.filter(country => country.region === "Africa");
        setCountries(africanCountries);
        setLoading(false);
      })
      .catch(error => console.error("Erro ao buscar dados:", error));
    
    // Requisição para dados dos presidentes (exemplo de API)
    fetch('URL_DA_API_DE_PRESIDENTES') // Substitua pela URL correta
      .then(response => response.json())
      .then(data => {
        const presidentData = {}; 
        data.forEach(item => {
          // Normalizando o nome do país (tudo em minúsculas)
          const countryNameNormalized = item.country.toLowerCase();
          presidentData[countryNameNormalized] = item.president; 
        });
        setPresidents(presidentData);
      })
      .catch(error => console.error("Erro ao buscar presidentes:", error));
  }, []);

  if (loading) {
    return <p>Carregando dados...</p>;
  }

  // Função para normalizar o nome do país
  const normalizeName = (name) => {
    return name
      .normalize("NFD") // Remove acentos
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  return (
    <main className="container-af">
      <section className="content-lista-pais">
        {countries.map((country, index) => {
          const countryNameNormalized = normalizeName(country.name.common);
          const president = presidents[countryNameNormalized];

          return (
            <div key={index} className="cartao-pais">
              <img src={country.flags.png} alt={`Bandeira de ${country.name.common}`} className="bandeira" />
              <h2>{country.name.common}</h2>
              <p><strong>Presidente:</strong> {president || "Informação não disponível"}</p>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default ListPais;