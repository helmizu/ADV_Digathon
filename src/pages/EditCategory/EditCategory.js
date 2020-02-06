import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
// import ENDPOINT from '../../configs/services';
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
  // const [dataCategory, setDataCategory] = useState({});
  const { categoryId = '' } = useParams();

  const getDataProject = async () => {
    const params = { categoryId };
    const { success = false, data = []} = await ENDPOINT.getCategory(params);
    if (success) {
      inputCategoryName.setValue(data[0].categoryName);
      inputKeyword.updateValue(data[0].keyword);
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
    const payload = await mappingData();
    // try {
    //   setIsLoading(true);
    //   const payload = mappingData();
    //   const { success } = await ENDPOINT.generateDraft(payload);
    //   if (success) {
    //     window.location.href = '/';
    //   }
    // } catch (error) {
    //   noop();
    // } finally {
    //   setIsLoading(false);
    // }
    console.log({ payload });
  };

  return {
    formInput: { inputCategoryName, inputKeyword },
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

