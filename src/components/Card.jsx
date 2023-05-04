import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const CardComponents = ({product, price, addBasket}) => {
    return(
        <Card className='Cards' shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
            <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160} alt="Norway"/>

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