import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const HorizontalLinearStepper = (props) => {
  const { stepProps, labelProps, defaultProps } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const data = [
    {
      title: 'Step 1',
      body: <Typography className={classes.instructions}>Step 1 Body</Typography>,
      onNext: () => {},
      onBack: () => {}
    },
    {
      title: 'Step 2',
      body: <Typography className={classes.instructions}>Step 2 Body</Typography>,
      onNext: () => {},
      onBack: () => {}
    },
    {
      title: 'Step 3',
      body: <Typography className={classes.instructions}>Step 3 Body</Typography>,
      onNext: () => {},
      onBack: () => {}
    }
  ];

  const handleNext = () => {
    if (typeof data[activeStep].onNext === 'function') data[activeStep].onNext();
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (typeof data[activeStep].onBack === 'function') data[activeStep].onBack();
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root} {...defaultProps}>
      <Stepper activeStep={activeStep}>
        {data.map((step, index) => {
          if (step.isOptional) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          return (
            <Step key={index} {...stepProps} className={classes.step}>
              <StepLabel {...labelProps}>{step.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {data[activeStep].body}
        <div>
          <Button className={classes.button} disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            className={classes.button}
            color="primary"
            onClick={handleNext}
            variant="contained"
          >
            {activeStep === data.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalLinearStepper;

HorizontalLinearStepper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
  })),
  defaultProps: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  labelProps: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  stepProps: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

HorizontalLinearStepper.defaultProps = {
  data: [],
  defaultProps: {},
  labelProps: {},
  stepProps: {}
};

