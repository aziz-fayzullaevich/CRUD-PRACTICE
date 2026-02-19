import { Button, Flex } from "@mantine/core"
import { modals } from "@mantine/modals"
import { useDeleteProduct } from "../queries/products-queries"

export const DeleteProduct = () => {

    // const { data, isPending } = useDeleteProduct();

    return (
        <Flex>
            <Button onClick={() => {
                modals.closeAll()
            }}>Нет</Button>
            <Button>Да</Button>
        </Flex>
    )
}