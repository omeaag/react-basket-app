import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const CardComponents = ({product, price, addBasket, src}) => {
    return(
        <Card className='Cards' shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={`/assets/images/${src}`}
                    height={250} alt="Norway"/>

            </Card.Section>

            <Group position="apart" mt="md" mb="xs">

               <Text>{product}</Text>

            </Group>

            <Text size="sm" color="dimmed">{price}</Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={addBasket} >
            Add
            </Button>
        </Card>
    )
}

export default CardComponents;