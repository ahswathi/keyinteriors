import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      '/images/index3.png',
  },
  {
    imgPath:'/images/index4.png',
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  }; 

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 , position: 'relative', 
    backgroundColor: '#0C0B0A',}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '500px',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                  
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper sx={{
            position: 'absolute',
            top: '86%',
            left: '43%',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            '& .MuiMobileStepper-dot': {
              width: theme.spacing(1.5),
              height: theme.spacing(1.5),
              backgroundColor: '#FFFFFF',
          
            },
            '& .MuiMobileStepper-dotActive': {
              width: theme.spacing(1.6),
              height: theme.spacing(1.6),
              border: '2px solid #FFFFFF',
              backgroundColor: 'transparent',
            },
            '& .MuiMobileStepper-progress': {
              height: theme.spacing(2.5),
            },
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
      />
    </Box>
  );
}

export default Slider;
