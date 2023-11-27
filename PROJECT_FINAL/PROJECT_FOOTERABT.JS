import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = ({ onClick }) => {
  const footerItems = ['About Us', 'Feedback', 'Location', 'Email'];

  return (
    <AppBar position="static" style={{ marginTop: 'auto', background: 'darkblue   ' }}>
      <Toolbar style={{ justifyContent: 'space-evenly' }}>
        {footerItems.map((item, index) => (
          <Typography
            variant="subtitle1"
            color="inherit"
            style={{
              cursor: 'pointer',
              color: '#f5f5f5', // Lighter grey color for text
              fontWeight: 'bold', // Font weight
              fontSize: '20px', // Increase font size slightly
            }}
            key={index}
            onClick={() => onClick(item)}
          >
            {item}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
