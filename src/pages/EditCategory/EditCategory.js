import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import FieldLabel, { useFieldLabel } from '../../components/elements/FieldLabel';
import { noop } from '../../utils';
import useStyles from './useStyles';
import MultipleFormAddKeyword, { useMultipleFormAddKeyword } from '../../components/elements/MultipleFormAddKeyword';
import Header from '../../components/elements/Header';
import ENDPOINT from '../../configs/services';
import { useParams } from 'react-router-dom';

const useForm = () => {
  const inputCategoryName = useFieldLabel('');
  const inputKeyword = useMultipleFormAddKeyword();
  const [isLoading, setIsLoading] = useState(false);
  const { categoryId = '' } = useParams();

  const getDataProject = async () => {
    try {
      setIsLoading(true);
      const { success = false, data = {} } = await ENDPOINT.getCategoryDetail(categoryId);
      if (success) {
        inputCategoryName.setValue(data.categoryName);
        inputKeyword.updateValue(data.keyword);
      }
    } catch (error) {
      noop();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataProject();
  }, []);

  const mappingData = () => {
    const keyword = inputKeyword.multipleValue;
    return {
      categoryName: inputCategoryName.value,
      keyword
    };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const payload = await mappingData();
      const { success } = await ENDPOINT.editCategory(categoryId, payload);
      if (success) {
        window.location.href = '/';
      }
    } catch (error) {
      noop();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formInput: { inputCategoryName, inputKeyword },
    isLoading,
    onSubmit,
  };
};

export default function AddCategory() {
  const classes = useStyles();
  const { formInput = {}, onSubmit = noop } = useForm();
  const { inputCategoryName, inputKeyword } = formInput;
  return (
    <section>
      <Header title="Add More Category" />
      {/* <Paper > */}
      <Grid item style={{ padding: 16 }} xs={6}>
        <form onSubmit={onSubmit}>
          <Grid spacing={1}>
            <FieldLabel {...inputCategoryName} label="Type category name.." margin="none" />
          </Grid>
          <Grid spacing={1}>
            <MultipleFormAddKeyword {...inputKeyword} margin="none" />
          </Grid>
          <Button className={classes.buttonBlock} type="submit" >Submit</Button>
        </form>
      </Grid>
      {/* </Paper> */}
    </section>
  );
}

