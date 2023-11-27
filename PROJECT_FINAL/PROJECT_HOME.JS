import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import ProductCard from './CardFlippingAbt';
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from './Footer';
import StaticContent from './StaticContent'; // Import StaticContent component
import Search from './Search'; // Import the Search component
import { SearchResultsList } from './SearchResultsList';
const categories = ['Speciality', 'Appointment', 'Dashboard', 'Insurance Policy', 'Membership Id'];
const backgroundImageUrl = 'https://wallpaperaccess.com/full/741800.jpg';

const languages = [
  { name: 'English', subdivisions: ['US', 'UK', 'Australia'] },
  { name: 'Hindi', subdivisions: ['India'] },
  { name: 'Malayalam', subdivisions: ['Kerala'] },
  { name: 'Telugu', subdivisions: ['Andhra Pradesh', 'Telangana'] },
  // Add more languages as needed
];

const nodalOfficers = [
  'DR. B.B. PRASAD',
  'SH L R SINGH',
  'DR. SARITA KUMARI',
  'DR. SUMITA KULSHRESTHA',
  'DR MD ZUBAIR',
];

const contactOptions = [
  'Post a Query',
  'Consult Online Doctors',
  'Book Physical Appointment',
  'Lifeline',
];

const Home = ({setResults}) => {
  const navigate = useNavigate();
  
  const [showCards, setShowCards] = useState(false);

  
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);
  const [nodalOfficersMenuAnchor, setNodalOfficersMenuAnchor] = useState(null);
  const [contactMenuAnchor, setContactMenuAnchor] = useState(null);
 
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleLoginClick = () => {
    console.log('Clicked on login');
    // Redirect to the login page (if needed)
  };
  
  const handleCategoryClick = (category) => {
    console.log(`Clicked on category: ${category}`);
    if (category === 'Speciality') {
      navigate('/speciality');
    }
    // Add logic to handle category click
  };

  const handleContactClick = (event) => {
    setContactMenuAnchor(event.currentTarget);
  };

  const handleContactMenuClose = () => {
    setContactMenuAnchor(null);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchor(null);
  };

  const handleNodalOfficersMenuOpen = (event) => {
    setNodalOfficersMenuAnchor(event.currentTarget);
  };

  const handleNodalOfficersMenuClose = () => {
    setNodalOfficersMenuAnchor(null);
  };
  const handleAboutUsClick = () => {
    console.log('About Us button clicked');
    navigate('/about-us'); 
  };
  

  return (
    
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight:'100vh',
        background: `url(${backgroundImageUrl}) center/cover fixed`,
        
      }}
    >
      
      {/* Header */}
      <AppBar position="static" style={{ background: 'darkblue', paddingTop: '6px' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px', color: 'white' }}>
            <Button color="inherit"  style={{ fontSize: '16px', display: 'flex', alignItems: 'center' }}>
              HOSPITAL RECORD MANAGEMENT
            </Button>
          </Typography>
          
          <Button
  color="inherit"
  onClick={handleAboutUsClick}
  style={{ marginRight: '10px', fontSize: '16px' }}>
  About Us
</Button>

          <Button
            color="inherit"
            onClick={handleLoginClick}
            component={Link}
            to="/login"
            style={{ marginRight: '10px', fontSize: '16px' }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={handleLoginClick}
            style={{ marginRight: '10px', fontSize: '16px' }}
          >
            Search
          </Button>
          <Button
            color="inherit"
            onClick={handleNodalOfficersMenuOpen}
            style={{ marginRight: '10px', fontSize: '16px' }}
          >
            Nodal Officers
          </Button>
          {/* Nodal Officers Menu */}
          <Menu
            anchorEl={nodalOfficersMenuAnchor}
            open={Boolean(nodalOfficersMenuAnchor)}
            onClose={handleNodalOfficersMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {nodalOfficers.map((officer, index) => (
              <MenuItem key={index}>{officer}</MenuItem>
            ))}
          </Menu>
          <Button
            color="inherit"
            onClick={handleLanguageMenuOpen}
            style={{ marginRight: '10px', fontSize: '16px' }}
          >
            Language
          </Button>
          {/* Language Menu */}
          <Menu
            anchorEl={languageMenuAnchor}
            open={Boolean(languageMenuAnchor)}
            onClose={handleLanguageMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {languages.map((language, index) => (
              <MenuItem key={index}>
                {language.name}
                {language.subdivisions && language.subdivisions.length > 0 && (
                  <Menu>
                    {language.subdivisions.map((subdivision, subIndex) => (
                      <MenuItem key={subIndex}>{subdivision}</MenuItem>
                    ))}
                  </Menu>
                )}
              </MenuItem>
            ))}
          </Menu>
          <Button
            color="inherit"
            onClick={handleContactClick}
            style={{ fontSize: '16px' }}
          >
            Contact
          </Button>
          {/* Contact Menu */}
          <Menu
            anchorEl={contactMenuAnchor}
            open={Boolean(contactMenuAnchor)}
            onClose={handleContactMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {contactOptions.map((option, index) => (
              <MenuItem key={index}>{option}</MenuItem>
            ))}
          </Menu>
        </Toolbar>
      

      {/* Navigation Bar */}
      {/* Navigation Bar */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
          <List>
            <ListItem>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={() => console.log('Hospital Structure')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Hospital Structure" />
            </ListItem>
            <ListItem button onClick={() => console.log('Outpatient Clinic Management')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Outpatient Clinic Management" />
            </ListItem>
            <ListItem button onClick={() => console.log('Inpatient Clinic Management')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Inpatient Clinic Management" />
            </ListItem>
            <ListItem button onClick={() => console.log('Inpatient Cases')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Inpatient Cases" />
            </ListItem>
            <ListItem button onClick={() => console.log('Outpatient Cases')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Outpatient Cases" />
            </ListItem>
            <ListItem button onClick={() => console.log('Patients Medical Record List')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Patients Medical Record List" />
            </ListItem>
            <ListItem button onClick={() => console.log('Temporary Medical Record Organization')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Temporary Medical Record Organization" />
            </ListItem>
            <ListItem button onClick={() => console.log('Status of Medical Records')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Status of Medical Records" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>

      <AppBar position="relative" color="default" style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: 'none', borderBottom: '10px solid #ddd' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3 style={{ color: 'red', fontWeight: 'bold' }}>ONLINE REGISTRATION SYSTEM</h3>
          <div>
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <Button onClick={() => handleCategoryClick(category)} style={{ marginLeft: '8px', fontSize: '17px', paddingBottom: '5px', color: '#333', fontWeight: 'bold' }}>
                  {category}
                </Button>
                {index === 0 && (
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180"
                    alt="Profile Image"
                    style={{ marginLeft: '8px', height: '50px', width: '50px', paddingTop: '10px' }}
                  />
                )}
                {index === 1 && (
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.qs9g-wXXXkf4FW9Lstc9OwHaH1&pid=Api&P=0&h=180"
                    alt="Profile Image"
                    style={{ marginLeft: '8px', height: '50px', width: '50px' }}
                  />
                )}
                {index === 2 && (
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.9qm8adf6xIHyFST5IdfQyAHaHa&pid=Api&P=0&h=180"
                    alt="Profile Image"
                    style={{ marginLeft: '8px', height: '50px', width: '50px' }}
                  />
                )}
                {index === 3 && (
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.FNNra12u8TEw_49AaMZ7BwHaGA&pid=Api&P=0&h=180"
                    alt="Profile Image"
                    style={{ marginLeft: '8px', height: '50px', width: '50px' }}
                  />
                )}
                {index === 4 && (
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.3cgpQCFvAv6pnZab56kU0QHaHa&pid=Api&P=0&h=180"
                    alt="Profile Image"
                    style={{ marginLeft: '8px', height: '50px', width: '50px' }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      

      {/* Static Content Link */}
      <div style={{ flex: 1, padding: '20px', color: 'white', textAlign: 'center' }}>
        <h2>
          <Link to="/static-content" style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer',fontWeight:'bold',fontSize:'40px' }}>
          <motion.h1
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        MEDICAL RECORDS MANAGEMENT
      </motion.h1>
            
          </Link>
        </h2>
      </div>

      {/* Footer */}
      <Footer onClick={() => {}} style={{ flexShrink: 0 }} />
    </div>
    
  );
};

export default Home;
