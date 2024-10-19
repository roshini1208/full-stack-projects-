import React, { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Homepage.css';
import Navbar from './Navbar.jsx';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const footerRef =useRef(null);

  const itemData = [
    {
      img: 'https://lh3.googleusercontent.com/LHtrAtag8E57570X8ZzS1S4syhd528uefD9P4fbB6_liqpPRiT8OPjl5tQEA5-qNgXOliPMBfaE5pDY5VuScaME=w1500-h1000-l95-e31',
      title: 'Image 1',
      width: 400,
      height: 300,
    },
    {
      img: 'https://lh3.googleusercontent.com/Dptw0SzkrrPGG8Q0xW_Fn6OXTiyTbojwdUhx8lH6ntsNnQAeWq5bQjztP01O8RXkxQoFQJknAZioCqzxDGgRWCTd=w744-h496-n-rw-c0xffffffff-l95-e31',
      title: 'Books',
      width: 400,
      height: 100,
    },
    {
      img: 'https://lh3.googleusercontent.com/nwq7kUUQgWmaVlXHHsmo9YJqYgLzIoks6RF8RIw01MaXd4myYTDtGFnXoHIQPemNo862LnZqDMOXZPgxIS-F6Dg-1A=w744-h496-n-rw-c0xffffffff-l95-e31',
      title: 'Sink',
      width: 300,
      height: 400,
    },
    {
      img: 'https://lh3.googleusercontent.com/Vbg9FDpGCxW4aJ3qgD-Nx8FxRVCY3aj7ZyXfEcaFLq6NadzU2p-QYIGlSGxbjIW4ZjK4D7afsMu_TC8tC3NUwVDc=w744-h496-n-rw-c0xffffffff-l95-e31',
      title: 'Kitchen',
      width: 300,
      height: 200,
    },
    {
      img: 'https://lh3.googleusercontent.com/0v_IVS4oSjklavsmJnsOow7pZejM-UachsIANohS5ffGN6K3-dNHRXDwvriwXevCIaWa7-1y6MNlMNd0R_z9TCN8bQ=w1500-h1000-l95-e31',
      title: 'Blinds',
      width: 300,
      height: 200,
    },
  ];
  const itemData1 = [
    {
      img: 'https://cdn0.weddingwire.in/vendor/1761/3_2/960/jpg/881d192f-dd0a-477e-b71e-cad1e5074ae4_15_361761-163514271369642.jpeg',
      title: 'Image 1',
      width: 400,
      height: 300,
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/1761/3_2/960/jpg/7366d7a9-a4d1-4229-b810-f4f9f07b0fb6_15_361761-163514271390600.jpeg',
      title: 'Books',
      width: 400,
      height: 100,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRl8kLmgUpM7mAFKIxKXAtcz4D9DGPF1xG4yugmuy1hdprWr7bqVz78i2-Qe2eg9e2rA&usqp=CAU',
      title: 'Sink',
      width: 300,
      height: 400,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7Z4g7_eBWNBTJrT7xheJMhrp_4BD9dUSdu1v10IcmeP9PL74LmQFYwszPbhkfVPWq3I&usqp=CAU',
      title: 'Kitchen',
      width: 300,
      height: 200,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTFzIkGldz0TXO9NkhI2rUINasN9cGey22A&s',
      title: 'Blinds',
      width: 300,
      height: 200,
    },
  ];
  const itemData2 = [
    {
      img: 'https://cdn0.weddingwire.in/vendor/3239/original/1280/jpg/1000105444_15_363239-171293333462139.webp',
      title: 'Image 1',
      width: 400,
      height: 100,
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/3239/original/1280/jpg/file-1680531400002_15_363239-168053140956077.webp',
      title: 'Boks',
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/3239/original/1280/jpg/file-1680531410985_15_363239-168053141741221.webp',
      title: 'Sink',
      width: 300,
      height: 300,
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/3239/original/1280/jpg/file-1680531425588_15_363239-168053142980441.webp',
      title: 'Kitchen',
      width: 300,
      height: 100,
    },
    
  ];
  const itemData4 = [
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-Venue-qualia-Prestigious-Venues.jpg',
      title: 'Image 1',
      width: 400,
      height: 500,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Outdoor-Private-Dining-Venue-qualia-Prestigious-Venues.jpg',
      title: 'Boks',
      width: 400,
      height: 600,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Best-Luxury-Island-Venue-qualia-Prestigious-Venues.jpg',
      title: 'Sink',
      width: 300,
      height: 500,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Corporate-Events-qualia-Prestigious-Venues.jpg',
      title: 'Kitchen',
      width: 300,
      height: 100,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Long-Pavilion-Space-qualia-Prestigious-Venues.jpg',
      title: 'Kitchen',
      width: 300,
      height: 500,
    },
    
  ];
  const itemData5 = [
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Atlantis-The-Palm-Dubai-Event-Destination-Prestigious-Venues.jpg',
      title: 'Image 1',
      width: 400,
      height: 500,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/White-Beach-Restaurant-Atlantis-The-Palm-Prestigious-Venues.jpg',
      title: 'Boks',
      width: 400,
      height: 600,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Private-Dining-Venue-In-Dubai-Atlantis-The-Palm-Dubai-Prestigious-Venues.jpg',
      title: 'Sink',
      width: 300,
      height: 500,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2020/04/Asateer-Wedding-Venue-Atlantis-The-Palm-Prestigious-Venues.jpg',
      title: 'Kitchen',
      width: 300,
      height: 100,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Top-Hotel-For-Events-Atlantis-The-Palm-Dubai-Prestigious-Venues.jpg',
      title: 'Kitchen',
      width: 300,
      height: 500,
    },
    
  ];
  const itemData6 = [
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/5-Star-Resort-Maldives-Shangri-La-Maldives-Prestigious-Venues.jpg',
      title: 'Image 1',
      width: 400,
      height: 500,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Dine-By-Design-Shangri-La-Maldives-Prestigious-Venues.jpg',
      title: 'Boks',
      width: 400,
      height: 600,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Gourmet-Dining-at-Dr.Alis-Shangri-La-Maldives-Prestigious-Venues.jpg',
      title: 'Sink',
      width: 300,
      height: 500,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Wedding-On-The-Beach-Shangri-La-Maldives-Prestigious-Venues.jpg',
      title: 'Kitchen',
      width: 300,
      height: 100,
    },
    {
      img: 'https://prestigiousvenues.com/wp-content/uploads/2017/03/Reception-Event-Venue-Shangri-La-Maldives-Prestigious-Venues.jpg',
      title: 'Kitchen',
      width: 300,
      height: 500,
    },
    
  ];
  const itemData7 = [
    {
      img: 'https://lh3.googleusercontent.com/OUYrD4Rc8YPWUbRXCliLOqzFXiMFYJYvuazoGyzEXEKvG8Yy73nq1tyl8pxuVenQ5bqxlTjKSFY0NMnq2ocJ5wntpw=w778-h496-n-rw-c0xffffffff-l95-e31',
      title: 'Image 1',
      width: 400,
      height: 500,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7vsrZKRk7JsPcAh3Aqdbyq2Wcmp4yyIO_g&s',
      title: 'Boks',
      width: 400,
      height: 600,
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/7559/3_2/960/jpg/kayal2_15_227559-1562915694.jpeg',
      title: 'Sink',
      width: 300,
      height: 500,
    },
    {
      img: 'https://bookwedgo-prod.s3.amazonaws.com/Mandapam%20Images/Kayal/Exterior/temp.jpg',
      title: 'Kitchen',
      width: 300,
      height: 100,
    },
    {
      img: 'https://media.weddingz.in/photologue/images/kayal-kayal.jpg',
      title: 'Kitchen',
      width: 300,
      height: 500,
    },
    
  ];

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const value = 3.5;
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
       <Navbar onAllVenuesClick={scrollToFooter} />
      <div className="background-container">
        <div className="content">
          <h3 style={{ fontSize: '50px', fontStyle: 'italic' }}>Party Event Management</h3>
        </div>
      </div>
      <li></li>
      <li></li>
      <div ref={footerRef}>
      <div style={{ paddingLeft: '500px' }}>
        <Stack spacing={5}>
          <Pagination count={7} color="secondary" page={currentPage} onChange={handlePageChange} />
        </Stack>
      </div>
      <li></li>
      <li></li>
      {currentPage === 1 && (
        <div className="one">
          <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="340" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluO1wqrL085gGshL8HcsDktjC1VhMeIFQGVQCdH4uCtnpnl0AAHwE5FYgCJiW0vi2UUc&usqp=CAU" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ruby and Diamond Hall
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Ruby hall is a wide space spread across 2350 sq. ft. It is an ideal location for a host of social occasions like small group parties
              <div><LocationOnIcon/>Coimbatore</div>

              </Typography>
            </CardContent>
            <CardActions>
              <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'100px',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>

            </CardActions>
          </Card>
          </div>
          <div>
          <Box sx={{ width: 800, height: 600 }}>
            <ImageList variant="masonry" cols={2} gap={10}>
              {itemData.slice(0, 5).map((item) => (
                <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          </div>
        </div>
      )}
      {currentPage === 2 && (
        <div className="one">
          <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="340" image="https://lediamonds.com/assets/images/outside/outside8.JPG" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Lee Diamond Party Hall
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Birthday Party Decorators in Coimbatore offered by Wow Entertainment Magic Show. Get Best Price, MOQ for Birthday Party Decorators along with Contact
              <div><LocationOnIcon/>Coimbatore</div>

</Typography>
</CardContent>
<CardActions>
<Box
sx={{
width: 200,
display: 'flex',
alignItems: 'center',
paddingLeft:'100px',
}}
>
<Rating
name="text-feedback"
value={value}
readOnly
precision={0.5}
emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
<Box sx={{ ml: 2 }}>{labels[value]}</Box>
</Box>
            </CardActions>
          </Card>
          </div>
          <div>
          <Box sx={{ width: 800, height: 600 }}>
            <ImageList variant="masonry" cols={2} gap={15}>
              {itemData1.slice(0,5).map((item) => (
                <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          </div>
        </div>
      )}
      {currentPage === 3 && (
        <div className="one">
        <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="340" image="https://image.wedmegood.com/resized/800X/uploads/member/1188660/1586445210_82218345_2754286391325624_2957888790720413696_n.jpg" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            WoW Palace
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Birthday Party Decorators in Coimbatore offered by Wow Entertainment Magic Show. Get Best Price, MOQ for Birthday Party Decorators along with Contact
            <div><LocationOnIcon/>Coimbatore</div>

</Typography>
</CardContent>
<CardActions>
<Box
sx={{
width: 200,
display: 'flex',
alignItems: 'center',
paddingLeft:'100px',
}}
>
<Rating
name="text-feedback"
value={value}
readOnly
precision={0.5}
emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
<Box sx={{ ml: 2 }}>{labels[value]}</Box>
</Box>
          </CardActions>
        </Card>
        </div>
        <div>
        <Box sx={{ width: 800, height: 600 }}>
          <ImageList variant="masonry" cols={2} gap={10}>
            {itemData2.slice(0,5).map((item) => (
              <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        </div>
      </div>
      )}
      {currentPage === 4 && (
        <div className="one">
          <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="340" image="https://i.ytimg.com/vi/N3WBhGf3g5s/maxresdefault.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Qualia Party Beach
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Birthday Party Decorators in Coimbatore offered by Wow Entertainment Magic Show. Get Best Price, MOQ for Birthday Party Decorators along with Contact
              <div><LocationOnIcon/>Coimbatore</div>
      
      </Typography>
      </CardContent>
      <CardActions>
      <Box
      sx={{
      width: 200,
      display: 'flex',
      alignItems: 'center',
      paddingLeft:'100px',
      }}
      >
      <Rating
      name="text-feedback"
      value={value}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
            </CardActions>
          </Card>
          </div>
          <div>
          <Box sx={{ width: 800, height: 600 }}>
            <ImageList variant="masonry" cols={2} gap={15}>
              {itemData4.slice(0,5).map((item) => (
                <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          </div>
        </div>
      )}
      {currentPage === 5 && (
        <div className="one">
          <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="340" image="https://prestigiousvenues.com/wp-content/uploads/2017/09/Beach-Dining-In-Dubai-Atlantis-The-Palm-Dubai-Prestigious-Venues.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Royal Beach
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Marriage Party Decorators in Coimbatore offered by Wow Entertainment Magic Show. Get Best Price, MOQ for Marriage Party Decorators along with Contact
              <div><LocationOnIcon/>Dubai</div>
      
      </Typography>
      </CardContent>
      <CardActions>
      <Box
      sx={{
      width: 200,
      display: 'flex',
      alignItems: 'center',
      paddingLeft:'100px',
      }}
      >
      <Rating
      name="text-feedback"
      value={value}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
            </CardActions>
          </Card>
          </div>
          <div>
          <Box sx={{ width: 800, height: 600 }}>
            <ImageList variant="masonry" cols={2} gap={15}>
              {itemData5.slice(0,5).map((item) => (
                <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          </div>
        </div>
      )}
      {currentPage === 6 && (
        <div className="one">
          <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="340" image="https://prestigiousvenues.com/wp-content/uploads/2017/03/Luxury-Water-Villas-Shangri-La-Maldives-Prestigious-Venues.jpg" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Shangri-La Maldives
              </Typography>
              <Typography variant="body2" color="text.secondary">
             Wedding Party Decorators in Maldives offered by Wow Entertainment Magic Show. Get Best Price, MOQ for Wedding Party Decorators along with Contact
              <div><LocationOnIcon/>Maldives</div>
      
      </Typography>
      </CardContent>
      <CardActions>
      <Box
      sx={{
      width: 200,
      display: 'flex',
      alignItems: 'center',
      paddingLeft:'100px',
      }}
      >
      <Rating
      name="text-feedback"
      value={value}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
            </CardActions>
          </Card>
          </div>
          <div>
          <Box sx={{ width: 800, height: 600 }}>
            <ImageList variant="masonry" cols={2} gap={15}>
              {itemData6.slice(0,5).map((item) => (
                <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          </div>
        </div>
      )}
      {currentPage === 7 && (
        <div className="one">
          <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="340" image="https://image.wedmegood.com/resized/1000X/uploads/member/782229/1722256133__MG_4628.jpg?crop=13,103,1339,753" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Kayal Hall 
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Wedding Party Decorators in Coimbatore offered by Wow Entertainment Magic Show. Get Best Price, MOQ for Wedding Party Decorators along with Contact
              <div><LocationOnIcon/>Coimbatore</div>
      
      </Typography>
      </CardContent>
      <CardActions>
      <Box
      sx={{
      width: 200,
      display: 'flex',
      alignItems: 'center',
      paddingLeft:'100px',
      }}
      >
      <Rating
      name="text-feedback"
      value={value}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
            </CardActions>
          </Card>
          </div>
          <div>
          <Box sx={{ width: 800, height: 600 }}>
            <ImageList variant="masonry" cols={2} gap={15}>
              {itemData7.slice(0,5).map((item) => (
                <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          </div>
        </div>
      )}
      </div>
      <br/>
      <br/>
      <br/>
        {/* <Navbar footSectionRef={footSectionRef} /> */}
      <div className="foot"  style={{backgroundColor:'grey'}}>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We are a premier event management company dedicated to making your events unforgettable. From weddings to corporate gatherings, we handle it all.
          </p>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: roshini87@partyeventmanagement.com</p>
          <p>Phone: 8148339609</p>
          <p>Coimbatore</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Party Event Management | Designed by Your Company
      </div>
    </footer>
      </div>
    </div>
  );
};

export default Homepage;
