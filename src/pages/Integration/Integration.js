import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import ENDPOINT from '../../configs/services';
import Dropdown, { useDropdown } from '../../components/elements/Dropdown';
import UploadFile, { useUploadFile } from '../../components/elements/UploadFile';
import useStyles from './useStyles';
import Header from '../../components/elements/Header';

export default function Home() {
  const classes = useStyles();
  const [dataCategory, setDataCategory] = useState([]);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dropdownType = useDropdown('');
  const uploadFile = useUploadFile();

  const getDataProject = async () => {
    const { success = false, data = []} = await ENDPOINT.getCategory();
    if (success) {
      setDataCategory(data);
    }
  };

  const onTryAPI = async () => {
    if (dropdownType.value && uploadFile.value) {
      const formData = new FormData();
      formData.append('categoryName', dropdownType.value);
      formData.append('fileUpload', uploadFile.file, uploadFile.file.name);
      try {
        setIsLoading(true);
        const result = await ENDPOINT.getCategory(formData);
        const resultText = JSON.stringify(result, null, 4);
        setResponse(resultText);
      } catch (error) {
        const errorText = JSON.stringify(error, null, 4);
        setResponse(errorText);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getDataProject();
  }, []);

  let textToRender = response;
  if (!response && !isLoading) textToRender = 'Hit Send to get a response';
  else if (isLoading) textToRender = 'Sending request...';

  return (
    <section>
      <Header title="Try Your Configuration" />
      <Grid container style={{ padding: 24 }}>
        <Dropdown {...dropdownType} data={dataCategory} label="Pick File Category.." mappingItem={{ value: 'categoryName', label: 'categoryName' }} />
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="center"
        >
          <Grid item xs={10}>
            <UploadFile {...uploadFile} accept="image/jpeg,image/png,application/pdf" />
          </Grid>
          <Grid item xs>
            <Button className={classes.buttonBlock} onClick={onTryAPI}>Send</Button>
          </Grid>
        </Grid>
        <Paper style={{ width: '100%', padding: '16px 32px', marginTop: 16, minHeight: 300, textAlign: isLoading || !response ? 'center' : 'left' }}>
          <Typography component="pre" variant="subtitle1">
            {textToRender}
          </Typography>
        </Paper>
      </Grid>
    </section>
  );
}

