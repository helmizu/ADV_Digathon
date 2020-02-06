import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ENDPOINT from '../../configs/services';
import CardCategory from '../../components/elements/CardCategory';
import Header from '../../components/elements/Header';

export default function Home() {
  const [dataCategory, setDataCategory] = useState([]);

  const getDataProject = async () => {
    const { success = false, data = []} = await ENDPOINT.getCategory();
    if (success) {
      setDataCategory(data);
    }
  };

  useEffect(() => {
    getDataProject();
  }, []);

  return (
    <section>
      <Header title="Category" />
      <Grid
        alignItems="flex-start"
        container
        direction="row"
        justify="flex-start"
      >
        {dataCategory.map((item, index) => (
          <Grid item key={index} style={{ padding: 12 }} xs={6}>
            <CardCategory item={item}  />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

