import React from 'react';
import PropTypes from 'prop-types';
import FieldLabel from '../FieldLabel';
import useStyles from './useStyles';
import { noop } from '../../../utils';
import { Grid } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
// import { useMultipleFormAddKeyword } from './useMultipleFormAddKeyword';

const MultipleFormAddKeyword = props => {
  const classes = useStyles();
  const { onChange: {
    onChangeTitle,
    onChangeMatch,
    onChangeCount,
    onChangeBefore,
    onChangeAfter
  },
  multipleValue = [],
  onClickAddForm = noop,
  onClickRemoveForm = noop } = props;
  const indexEnd = multipleValue.length - 1;
  return (
    <div>
      <div className={classes.line} />
      {multipleValue.map((value, index) => {
        const { title = '', match: { text = '', count = '' } = {}, before = '', after = '' } = value;
        const isAdd = indexEnd === index;
        return (
          <div key={index}>
            <FieldLabel label="Type title name.." margin="none" onChange={onChangeTitle(index)} value={title} />
            <FieldLabel label="Type match text.." margin="none" onChange={onChangeMatch(index)} value={text} />
            <FieldLabel label="Type count match.." margin="none" onChange={onChangeCount(index)} type="number" value={count} />
            <FieldLabel label="Type before text.." margin="none" onChange={onChangeAfter(index)} value={after} />
            <FieldLabel label="Type after text.." margin="none" onChange={onChangeBefore(index)} value={before} />
            <Grid
              alignItems="center"
              container
              direction="row"
              justify="center"
              spacing={0}
            >
              <Grid item xs>
                <div className={classes.line} />
              </Grid>
              <Grid alignItems="flex-end" item justify="flex-end" xs={1}>
                <button
                  className={isAdd ? classes.buttonAdd : classes.buttonRemove}
                  onClick={() => isAdd ? onClickAddForm() : onClickRemoveForm(index + 1)}
                  type="button"
                >
                  {isAdd ? <Add /> : <Remove />}
                </button>
              </Grid>
            </Grid>
          </div>);
      })}
    </div>
  );
};

export default MultipleFormAddKeyword;

MultipleFormAddKeyword.propTypes = {
  multipleValue: PropTypes.array.isRequired,
  onChange: PropTypes.object.isRequired,
  onClickAddForm: PropTypes.func.isRequired,
  onClickRemoveForm: PropTypes.func.isRequired
};

