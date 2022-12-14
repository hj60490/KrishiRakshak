import { Box, Typography } from "@material-ui/core";
import Profile from "../../Assets/images/profile.jpeg";
import "./RightBar.scss";
const RightBar = () => {
  return (
    <>
      <a href="https://agrimp.com/" target="_blank" rel="noreferrer">
        <Box className="Friends">
          <Box
            className="title"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            paddingY="10px"
          >
            <Box>
              <Typography variant="h6" color='primary'>BUY AND SELL CROPS</Typography>
            </Box>
          </Box>
          <Box className="Content" display="flex" flexWrap="wrap">
            <Box display="flex">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944__480.jpg"
                width="500px"
                height="300px"
                alt="friendName"
              />
            </Box>
          </Box>
        </Box>
      </a>
      <a href="https://indiaagronet.com/farm-machinery/Farm-Equipment-Classifieds/" target="_blank" rel="noreferrer">
        <Box className="Friends">
          <Box
            className="title"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            paddingY="10px"
          >
            <Box>
              <Typography variant="h6"  color='primary'>BUY/SELL FARMING MACHINERY</Typography>
            </Box>
          </Box>
          <Box className="Content" display="flex" flexWrap="wrap">
            <Box display="flex">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/14/02/10/farm-5402555__480.jpg"
                width="500px"
                height="300px"
                alt="friendName"
              />
            </Box>
          </Box>
        </Box>
      </a>
      <a href="https://www.bighaat.com/collections/insecticides?utm_source=WEB&utm_medium=CATEGORY+TILE&utm_campaign=Insecticides+Web+CATEGORY+Tile%2831-05-22%29" target="_blank" rel="noreferrer">
        <Box className="Friends">
          <Box
            className="title"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            paddingY="10px"
          >
            <Box>
              <Typography variant="h6"  color='primary'>BUY PLANT PESTICIDES/CHEMICALS</Typography>
            </Box>
          </Box>
          <Box className="Content" display="flex" flexWrap="wrap">
            <Box display="flex">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/03/16/49/herbicide-587589__480.jpg"
                width="500px"
                height="300px"
                alt="friendName"
              />
            </Box>
          </Box>
        </Box>
      </a>
      <a href="https://www.bighaat.com/collections/tractors" target="_blank" rel="noreferrer">
        <Box className="Friends">
          <Box
            className="title"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            paddingY="10px"
          >
            <Box>
              <Typography variant="h6"  color='primary'>BUY/SELL TRACTORS</Typography>
            </Box>
          </Box>
          <Box className="Content" display="flex" flexWrap="wrap">
            <Box display="flex">
              <img
                src="https://cdn.pixabay.com/photo/2018/07/30/00/05/tractor-3571452__480.jpg"
                width="500px"
                height="300px"
                alt="friendName"
              />
            </Box>
          </Box>
        </Box>
      </a>
    </>
  );
};

export default RightBar;
