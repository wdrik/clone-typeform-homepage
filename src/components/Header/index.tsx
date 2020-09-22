import React from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';

import { Container } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const frameOpacity = useTransform(
    scrollYProgress,
    [0.196, 0.198],
    [0, 1]
  );

  return <Container style={{ opacity: frameOpacity }} />;
}

export default Header;
