import { Container, Input, Textarea, Button, Stack, Grid } from '@mantine/core';
import { useState } from 'react';
import CardComponents from './components/Card';
import './index.css'


function App() {

  let info = [
    {
      baslik: "birinci",
      aciklama: "örnek paragraf 1"
    },

    {
      baslik: "ikinci",
      aciklama: "örnek paragraf 2"
    },

    {
      baslik: "üçüncü",
      aciklama: "örnek paragraf 3"
    },

    {
      baslik: "dördüncü",
      aciklama: "örnek paragraf 4"
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

      baslik: title,
      
      aciklama: paragraph

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
        {list.map(({baslik,aciklama}) => (
          <CardComponents aciklama = {aciklama} baslik = {baslik} />
        ))}
      </Grid>
    </Container>
    
  )
}

export default App;
