import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Veggie() {

  const [ veggies, setVeggies ] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);
  const getVeggies = async () => {
    const api = await fetch('')
    const data = await api.json();

    setVeggies(data.recipes);
  }
  return (
    <div>Veggie</div>
  )
}

export default Veggie