import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { link, useParams } from 'react-router-dom'

function Cuisine() {
  const getCuisine = async (name) => {
    const data = await fetch(``)
  }

  return (
    <div>Cuisine</div>
  )
}

export default Cuisine