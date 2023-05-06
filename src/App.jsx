import { Container, Input, List, ThemeIcon, Textarea, Button, Stack, SimpleGrid } from '@mantine/core';
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

  //burada basketItems'den gelen product'ın karakterlerini küçülttük. ancak bunu inputta aradığımız metnin kendisini de küçültmemiz lazım yoksa sepete ekledğimiz ilk harfi büyük olan ürünleri göstermez.
  
  let filtredProduct = info.filter((item) => item.product.toLowerCase().indexOf(filteredText.toLowerCase()) >= 0);
 
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

      <Input.Wrapper>
          <Input placeholder= 'Aradığınız ürün' value = {filteredText} onChange={(e) => setFilteredText(e.target.value)}/>
      </Input.Wrapper>


      <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
        {filtredProduct.map(({product,price,src},id) => (
          <CardComponents 
          key={id} 
          src = {src}
          price = {price} 
          product = {product} 
          addBasket = {() => {
            setBasketItems([...basketItems,{product}])
          }}/>
        ))}
      </SimpleGrid>
    </Container>
    
  )
}

export default App;
