/**
 * @see https://github.com/virae/we-stand-with-ukraine
 */

import React from 'react'
import styled from 'styled-components'

interface Props {
  title?: string
}

const Badge = styled.div`
  position: fixed;
  top: 20px;
  right: -80px;
  z-index: 9999;
  width: 300px;
  height: 84px;
  background: linear-gradient(-180deg, #005bbb 50%, #ffd500 50%);
  transform: rotate(45deg);
`

const Ukraine: React.FC<Props> = ({ title = `We stand with Ukraine` }) => (
  <Badge title={title} />
)

export default Ukraine
