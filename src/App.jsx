import { Container, Input, List,Flex, ThemeIcon, Textarea, Button, Stack,Group, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import CardComponents from './components/Card';
import './index.css'


function App() {

  let info = [
    {

      product: "Bisiklet",
      src: "cycle.jpg",
      price: "25000TL"
    },

    {
      product: "Güneş Gözlüğü",
      src: "glasses.jpg",
      price: "12000TL"
    },

    {
      product: "Spor Ayakkabı",
      src: "shoes.jpg",
      price: "32000TL"
    },

    {
      product: "Akıllı Kol Saati",
      src: "watch.jpg",
      price: "1500TL"
    },

    
    {
      product: "Kablosuz Mouse",
      src: "mouse.jpg",
      price: "900TL"
    },
    
    {
      product: "Atari",
      src: "atari.jpg",
      price: "1000TL"
    },

    {
      product: "Akıllı Telefon",
      src: "phone.jpg",
      price: "15000TL"
    },
    
    {
      product: "Kablosuz Kulaklık",
      src: "headphone.jpg",
      price: "4500TL"
    }

  ];

  const [list, setList] = useState(info);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [filteredText, setFilteredText] = useState("");
  const [basketItems, setBasketItems] = useState([]);
  let copyList = [...list];
  

  //burada basketItems'den gelen product'ın karakterlerini küçülttük. ancak bunu inputta aradığımız metnin kendisini de küçültmemiz lazım yoksa sepete ekledğimiz ilk harfi büyük olan ürünleri göstermez.
  
  let filtredProduct = copyList.filter((item) => item.product.toLowerCase().indexOf(filteredText.toLowerCase()) >= 0);


  return (
    <Container>
      <Group align='end'>
      <Input.Wrapper label="Arama" >
          <Input placeholder= 'Aradığınız ürün' value = {filteredText} onChange={(e) => setFilteredText(e.target.value)}/>
      </Input.Wrapper>
      <Button onClick={() => setFilteredText("")} >Clear</Button>
    </Group>

      <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
        {filtredProduct.map(({product,price,src},id) => (
          <CardComponents 
          key={id} 
          src = {src}
          price = {price} 
          product = {product} 
          click={() => {
            
            copyList.splice( id , 1 );
            setList(copyList);

          }}
          addBasket = {() => {
            setBasketItems([...basketItems,{product}])
          }}/>
        ))}
      </SimpleGrid>
    </Container>
    
  )
}

export default App;
