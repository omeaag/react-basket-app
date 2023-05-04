import { Container, Input, Textarea, Button, Stack, Grid } from '@mantine/core';
import { useState } from 'react';
import CardComponents from './components/Card';
import './index.css'


function App() {

  let info = [
    {
      product: "birinci",
      price: "örnek paragraf 1"
    },

    {
      product: "ikinci",
      price: "örnek paragraf 2"
    },

    {
      product: "üçüncü",
      price: "örnek paragraf 3"
    },

    {
      product: "dördüncü",
      price: "örnek paragraf 4"
    }

  ];

  const [list, setList] = useState(info);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
 
  const click = () => {

    setTitle("");

    setParagraph("");

    const copyList = [...list];

    copyList.push({

      product: title,
      
      price: paragraph

    })

    setList(copyList)
  }

  return (
    <Container>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input placeholder= 'Başlık giriniz' value = {title} onChange={(e) => setTitle(e.target.value)}/>
        </Input.Wrapper>
        
        <Textarea placeholder="Your comment" label="Açıklama giriniz" value = {paragraph} onChange={(e) => setParagraph(e.target.value)}/>
        <Button variant="outline" radius="md" onClick={click}>Oluştur</Button>
      </Stack>

      <Grid>
        {list.map(({product,price}) => (
          <CardComponents price = {price} product = {product} />
        ))}
      </Grid>
    </Container>
    
  )
}

export default App;
