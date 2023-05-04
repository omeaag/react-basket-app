import { Container, Input, List, ThemeIcon, Textarea, Button, Stack, Grid } from '@mantine/core';
import { useState } from 'react';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import CardComponents from './components/Card';
import './index.css'


function App() {

  let info = [
    {
      product: "Laptop",
      price: "25000TL"
    },

    {
      product: "Xbox",
      price: "12000TL"
    },

    {
      product: "Cep Telefonu",
      price: "32000TL"
    },

    {
      product: "Tıraş Makinesi",
      price: "1500TL"
    }

  ];

  const [list, setList] = useState(info);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [filteredText, setFilteredText] = useState("");
  const [basketItems, setBasketItems] = useState([]);

  let filtredBasket = basketItems.filter((item) => item.product.toLowerCase().indexOf(filteredText.toLowerCase()) >= 0);
 
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
        {list.map(({product,price},id) => (
          <CardComponents key={id} price = {price} product = {product} addBasket = {() => {
            setBasketItems([...basketItems,{product}])
          }}/>
        ))}
      </Grid>
      <Input.Wrapper label="Arama">
          <Input placeholder= 'Aradığınız ürün' value = {filteredText} onChange={(e) => setFilteredText(e.target.value)}/>
      </Input.Wrapper>
      <List
      className='List'
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >

      {filtredBasket.map(({product},id) => (
        <List.Item key={id} >{product}</List.Item>
      ))}
      
      
    </List>

    </Container>
    
  )
}

export default App;
